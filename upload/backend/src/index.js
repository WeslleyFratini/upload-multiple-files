const http = require("http");
const port = 3000;

const handler = function (request, response) {
  const defaultRoute = async (request, response) => response.end("Welcome");
};

const server = http.createServer();
