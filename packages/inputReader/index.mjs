import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const PROMPT = '> '

async function getUserInput({ question } = {}) {
  const readLine = readline.createInterface({ input, output })
  const answer = await readLine.question(
    `${question ? question + `\n${PROMPT}` : PROMPT}`,
  )
  readLine.close()
  return answer
}

export { getUserInput }
