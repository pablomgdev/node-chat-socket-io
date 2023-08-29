import { NO_ID_TEXT } from './constants.mjs'

function getSocketIdentifier(socket) {
  return socket.id ?? NO_ID_TEXT
}

export { getSocketIdentifier }
