const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

// Generates unique id
//console.log(uuid.v4());

// Generates all zeros
// console.log(uuid.NIL);

class Logger extends EventEmitter{
    log(msg){
        // call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

const logger = new Logger();

// logger.on('message', data => console.log('Called Listener: ', data));
logger.on('message', data => {
    fs.appendFile(path.join(__dirname, 'loggerData.txt'),`    
    ID: ${data.id}
    Message: ${data.msg}        
    `, err => {
        if(err) throw err;
        console.log('File Appended...');
    });
});

logger.log('Hello World!');
logger.log('Hi');
logger.log('Hello!');

