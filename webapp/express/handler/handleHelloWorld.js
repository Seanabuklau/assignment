function handleHelloWorld(req, res) {
    const response = {
        message: 'hello world'
    };
    res.json(response);
}

module.exports = handleHelloWorld;