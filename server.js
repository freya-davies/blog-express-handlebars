// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')
const hbs = require('express-handlebars')

// Set up express server
const server = express()

// Handlebars middleware
server.engine('hbs', hbs({
    extname: 'hbs',
}))
server.set('view engine', 'hbs')

// Serve static files
server.use(express.static('public'))

// Set up routes
server.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/views/blog/blog.html")
})

server.get('/blog/cultural/:blogNumber', (req, res) => {
    let blogNumber = req.params.blogNumber

    if (blogNumber <= 5) {
        res.sendFile(__dirname + "/views/blog/sprint" + blogNumber + "-cultural.html")
    }
    else {
        res.send("File does not exist")
    }
})

server.get('/blog/technical/:blogNumber', (req, res) => {
    let blogNumber = req.params.blogNumber
    if (blogNumber <= 4) {
        res.sendFile(__dirname + "/views/blog/sprint" + blogNumber + "-technical.html")
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