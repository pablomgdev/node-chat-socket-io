import { io } from "socket.io-client";
import * as logger from "@pablomgdev/logger";

const CHAT_SERVER_DOMAIN =
  process.env.CHAT_SERVER_DOMAIN || "http://localhost:3000";

const socket = io(CHAT_SERVER_DOMAIN);

socket.on("connect", (socket) => {
  logger.logInfo(
    `Socket connection stablished (id: ${socket?.id ?? "No socket ID."}).`
  );
});

socket.on("disconnect", () => {
  logger.logInfo(
    `Socket connection closed (id: ${socket?.id ?? "No socket ID."}).`
  );
});

logger.logInfo("Console client app started.");
