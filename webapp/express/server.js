const express = require('express');
const middlewareLogger = require('./middleware/middlewareLogger');
const handleHelloWorld = require('./handler/handleHelloWorld');

const app = express();
const port = 5656;

//middleware
app.use(middlewareLogger);

//endpoint
app.get('/hello_world', handleHelloWorld);

app.listen(port, ()=> {
    console.log(`server started and listening on port ${port}`)
})