import { Server } from 'socket.io'
import * as logger from '@pablomgdev/logger'
import { USER_SENDS_MESSAGE_EVENT, socketUtilities } from '@pablomgdev/shared'
import {
  SERVER_PORT,
  ACCEPTABLE_ORIGINS,
  ALLOWED_HEADERS,
} from './constants.mjs'

const io = new Server({
  cors: {
    origin: ACCEPTABLE_ORIGINS,
    allowedHeaders: ALLOWED_HEADERS,
  },
})

io.on('connection', (socket) => {
  logger.logInfo(`Socket connection stablished (id: ${socket.id}).`)
})

io.listen(SERVER_PORT)

io.httpServer.on('listening', () => {
  logger.logInfo(`Server started on port ${SERVER_PORT}.`)
})
