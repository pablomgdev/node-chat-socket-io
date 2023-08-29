import { io } from 'socket.io-client'
import * as constants from './constants.mjs'
import * as logger from '@pablomgdev/logger'
import { getUserInput } from '@pablomgdev/inputreader'

const socket = io(constants.CHAT_SERVER_DOMAIN)

socket.on('connect', (socket) => {
  logger.logInfo(
    `Socket connection stablished (id: ${socket?.id ?? 'No socket ID.'}).`,
  )
})
socket.on('disconnect', () => {
  logger.logInfo(
    `Socket connection closed (id: ${socket?.id ?? 'No socket ID.'}).`,
  )
})
;(async () => {
  logger.log('💬 You have been joined to the chat! Type messages!')
  logger.logInfo(`Type ${constants.EXIT_COMMAND} to leave the chat.`)
  let message = ''
  do {
    if (message) {
      logger.log(`${socket.id ?? constants.NO_ID_TEXT}: ${message}`)
      socket.emit(constants.USER_SENDS_MESSAGE_EVENT, message)
    }
    message = await getUserInput()
  } while (message !== constants.EXIT_COMMAND)
  process.exit(0)
})()
