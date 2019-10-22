// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')

// Set up express server + express middleware
const server = express()
server.use(express.static('public'))



// Exports our server for use elsewhere
module.exports = server