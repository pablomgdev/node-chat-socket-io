import { Server } from "socket.io";

const io = new Server(httpServer, {
  /* options here */
});

io.on("connection", (socket) => {
  console.log("Connection stablished.");
});

io.listen(3000);
