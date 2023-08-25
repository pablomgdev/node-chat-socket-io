import { io } from "socket.io-client";

// TODO: get the server domain from the corresponding file.
//  Port is duplicated here.
const CHAT_SERVER_DOMAIN =
  process.env.CHAT_SERVER_DOMAIN || "http://localhost:3000";

const socket = io(CHAT_SERVER_DOMAIN);

socket.on("connect", (socket) => {
  console.log(
    `[INFO] Socket connection stablished (id: ${
      socket?.id ?? "No socket ID."
    }).`
  );
});

socket.on("disconnect", () => {
  console.log(
    `[INFO] Socket connection closed (id: ${socket?.id ?? "No socket ID."}).`
  );
});
