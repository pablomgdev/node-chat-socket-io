import { Server } from "socket.io";

const PORT = 3000;

const io = new Server({
  /* options here */
});

io.on("connection", (socket) => {
  console.log(`Socket connection stablished (id: ${socket.id}).`);
});

io.listen(PORT);

io.httpServer.on("listening", () => {
  console.log(`[INFO] Server started on port ${PORT}.`);
});
