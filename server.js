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
    res.render("index")
})

server.get('/blog', (req, res) => {
    res.render("blog/blog")
})

server.get('/blog/cultural/:blogNumber', (req, res) => {
    let blogNumber = req.params.blogNumber

    if (blogNumber <= 5) {
        res.render("blog/sprint" + blogNumber + "-cultural")
    }
    else {
        res.send("File does not exist")
    }
})

server.get('/blog/technical/:blogNumber', (req, res) => {
    let blogNumber = req.params.blogNumber
    if (blogNumber <= 4) {
        res.render("blog/sprint" + blogNumber + "-technical")
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