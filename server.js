// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')

// Set up express server
const server = express()

// Serve static files
server.use(express.static('public'))

// Set up routes
server.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

server.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/blog/blog.html")
})

server.get('/blog/cultural/:id', (req, res) => {
    let id = req.params.id
    if (id <= 5) {
        res.sendFile(__dirname + "/blog/sprint" + id + "-cultural.html")
    }
    else {
        res.send("File does not exist")
    }
})

server.get('/blog/technical/:id', (req, res) => {
    let id = req.params.id
    if (id <= 4) {
        res.sendFile(__dirname + "/blog/sprint" + id + "-technical.html")
    }
    else {
        res.send("File does not exist")
    }
})

server.get('/blog', (req, res) => {
    res.send("Blog Page")
})

// Exports our server for use elsewhere
module.exports = server