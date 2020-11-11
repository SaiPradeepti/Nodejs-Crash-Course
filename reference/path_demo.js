const path = require('path');

// filename with path
console.log(__filename);

//Base file name
console.log(path.basename(__filename));

// Dir name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(`
Name of the file: ${path.parse(__filename).name}
Extension: ${path.parse(__filename).ext}
Base file name: ${path.parse(__filename).base}
Root : ${path.parse(__filename).root}
Directory: ${path.parse(__filename).dir}
`);

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));