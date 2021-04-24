const express = require('express');

server = express()

server.get('/',(req, res) => {
    res.send("carai nao e q manjo do devops mesmo")
})

var PORT = process.env.PORT || 3333


server.listen(PORT)