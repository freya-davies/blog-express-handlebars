// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')

// Set up express server
const server = express()

// Serve static files

// Set up routes
server.get('/', (req, res) => {
    res.send("Home Page")
})

server.get('/blog', (req, res) => {
    res.send("Blog Page")
})

// Exports our server for use elsewhere
module.exports = server