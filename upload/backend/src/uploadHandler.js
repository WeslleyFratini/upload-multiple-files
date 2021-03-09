const BusBoy = require("busboy");
const { logger, pipelineAsync } = require("./util");
const { join } = require("path");
const { createWriteStream } = require("fs");
class UploadHandler {
  #io;
  #socketId;
  constructor(io, socketId) {
    this.#io = io;
    this.#socketId = socketId;
  }

  registerEvents(headers, onFinish) {
    const busboy = new BusBoy({ header });

    busboy.on("file", this.#onFile.bind(this));

    busboy.on("finish", onFinish);

    return busboy;
  }

  #handleFileBytes(filename) {
    async function* handleData(data) {
      for await (const item of data) {
        const size = item.length;
        logger.inf(`File [${filename}] got ${size} bytes to ${this.#socketId}`);
        yield item;
      }

      return handleData(this);
    }
  }

  async #onFile(fieldname, file, filename) {
    const saveFileTo = join(__dirname, "../", "downloads", filename);
    logger.info("Uploading" + saveFileTo);

    await pipelineAsync(
      file,
      this.#handleFileBytes.aplly(this, [filename]),
      createWriteStream(saveFileTo)
    );

    logger.info(`File [${filename}] finished `);
  }
}
