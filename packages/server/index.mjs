import { Server } from "socket.io";

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const ACCEPTABLE_ORIGINS = process.env.ACCEPTABLE_ORIGINS || "*";
const ALLOWED_HEADERS = process.env.ALLOWED_HEADERS || "*";

const io = new Server({
  cors: {
    origin: ACCEPTABLE_ORIGINS,
    allowedHeaders: ALLOWED_HEADERS,
  },
});

io.on("connection", (socket) => {
  console.log(`[INFO] Socket connection stablished (id: ${socket.id}).`);
});

io.listen(SERVER_PORT);

io.httpServer.on("listening", () => {
  console.log(`[INFO] Server started on port ${SERVER_PORT}.`);
});
