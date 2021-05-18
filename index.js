const express = require('express');

server = express()

server.get('/',(req, res) => {
    res.send("Hello World")
})

var PORT = process.env.PORT || 3333


server.listen(PORT)
