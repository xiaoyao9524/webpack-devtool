const portscanner = require('portscanner');

function findPort (min, max) {
  return portscanner.findAPortNotInUse(min, max)
}

async function handler (min, max) {
  let port = await  findPort(min, max);
  console.log(port);
  return port;
}



module.exports = findPort;


