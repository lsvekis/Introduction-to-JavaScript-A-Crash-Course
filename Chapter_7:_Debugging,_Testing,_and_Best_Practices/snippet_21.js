return {
info(message) {
console.log(`[INFO] ${message}`);
},
warn(message) {
console.warn(`[WARN] ${message}`);
},
error(message) {
console.error(`[ERROR] ${message}`);
}
};
}
const logger = createLogger();
logger.info("This is an info message.");
logger.warn("This is a warning message.");
logger.error("This is an error message.");