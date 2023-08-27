import { Server } from 'socket.io'
import * as logger from '@pablomgdev/logger'

const SERVER_PORT = process.env.SERVER_PORT || 3000
const ACCEPTABLE_ORIGINS = process.env.ACCEPTABLE_ORIGINS || '*'
const ALLOWED_HEADERS = process.env.ALLOWED_HEADERS || '*'

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
