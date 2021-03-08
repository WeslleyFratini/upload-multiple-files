const { MongoRepository } = require("typeorm");

const logger = require("pino")({
  prettyPrint: {
    ignore: "pid,hostname",
  },
});

module.exports = {
  logger,
};
