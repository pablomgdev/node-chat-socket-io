import pc from "picocolors";

const LOG_TYPES = {
  INFO: "[INFO]",
  SUCCESS: "[SUCCESS]",
  ERROR: "[ERROR]",
};

function logInfo(message) {
  console.log(`${LOG_TYPES.INFO}: ${message}`);
}

function logSuccess(message) {
  console.log(pc.green(`${LOG_TYPES.SUCCESS}: ${message}`));
}

function logError(message) {
  console.log(pc.red(`${LOG_TYPES.ERROR}: ${message}`));
}

export { logInfo, logSuccess, logError };
