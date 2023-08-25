import pc from "picocolors";

const LOG_TYPES = {
  INFO: "[INFO]",
  ERROR: "[ERROR]",
};

function logInfo(message) {
  console.log(`${LOG_TYPES.INFO}: ${message}.`);
}

function logError(message) {
  console.log(pc.red(`${LOG_TYPES.ERROR}: ${message}.`));
}

export { logInfo, logError };
