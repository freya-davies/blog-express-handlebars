// This is the file that runs our server

// Imports in our 'server' from our 'server.js' file
const server = require('./server')

// We will be listening on port 3000
const port = 3000

// Tells our server to listen on port 3000, and console.logs this when it is done
server.listen(port, function () {
  console.log('Server is listening on port', port)
})