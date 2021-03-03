const http = require("http");
const socketIo = require("socket.io");
const API_URL = "http://localhost:3000";

const PORT = 3000;

const handler = function (request, response) {
  const defaultRoute = async (request, response) => response.end("Welcome");

  return defaultRoute(request, response);
};

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: "*",
    credentials: false,
  },
});

io.on("connection", (socket) => console.log("someone connected", socket.id));

setInterval(() => {
  io.emit("file-uploaded", 5e6);
}, 250);

const startServer = () => {
  console.log(`app running at http://${API_URL}:${PORT}`);
};

server.listen(PORT, startServer);
