import { io } from 'socket.io-client'

import * as logger from '@pablomgdev/logger'
import { getUserInput } from '@pablomgdev/inputreader'
import { USER_SENDS_MESSAGE_EVENT, socketUtilities } from '@pablomgdev/shared'

import { CHAT_SERVER_DOMAIN, EXIT_COMMAND } from './constants.mjs'

const socket = io(CHAT_SERVER_DOMAIN)

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
  logger.logInfo(`Type ${EXIT_COMMAND} to leave the chat.\n`)
  let message = ''
  do {
    if (message) {
      logger.log(`${socketUtilities.getSocketIdentifier(socket)}: ${message}\n`)
      socket.emit(USER_SENDS_MESSAGE_EVENT, message)
    }
    message = await getUserInput()
  } while (message !== EXIT_COMMAND)
  process.exit(0)
})()
