const Log = require("./logger");

async function main() {
  console.log("Starting test...");
  
  await Log(
    "backend",
    "info",
    "service",
    "Testing log middleware"
  );

  console.log("Test completed.");
}

main();