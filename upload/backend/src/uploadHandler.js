const BusBoy = require("busboy");
const { logger } = require("./util");

class UploadHandler {
  #io;
  #socketId;
  constructor(io, socketId) {
    this.#io = io;
    this.#socketId = socketId;
  }

  registerEvents(headers, onFinish) {
    const busboy = new BusBoy({ header });

    busboy.on("file", (fieldname, file, filename) => {
      logger.info("file" + filename);
    });

    busboy.on("finish", onFinish);

    return busboy;
  }
}
