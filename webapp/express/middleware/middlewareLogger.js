const fs = require('fs');

function middlewareLogger(req, res, next){
    const logLevel = 'INFO';
    const logFile = 'access.log'
    const now = new Date();

    const logMessage = `${now.toISOString()}|${logLevel}|-|method=${req.method}|-|url=${req.url}|-|status_code=${res.statusCode}|`;

    fs.appendFile(logFile, logMessage + '\n', (err)=> {
        if (err) {
            console.log('error writhing to log file:', err);
        }
    });

    next();
}

module.exports = middlewareLogger;