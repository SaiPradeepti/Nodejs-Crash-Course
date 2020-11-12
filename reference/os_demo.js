const os = require('os');

// Platform
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

//CPU Core Info
// Returns an array of objects containing information about each logical CPU core.
// Like model, speed etc
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());