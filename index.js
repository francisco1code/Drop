const express = require('express');

server = express()

server.get('/',(req, res) => {
    res.send("hello 55")
})

var PORT = process.env.PORT || 3333


server.listen(PORT)
