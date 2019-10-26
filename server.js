// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')
const hbs = require('express-handlebars')
const blog = require('./blog/blog-posts/blogData.json')
// const blog = require('./blog/blog.json')

// Set up express server
const server = express()

// Exports our server for use elsewhere
module.exports = server

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout : 'main',
}))

server.set('view engine', 'hbs')

// Serve static files
server.use(express.static('public'))

// Set up routes
server.get('/', (req, res) => {
  const viewData = {
    blog224: blog
  }
    res.sendFile(__dirname + "../public")
})

server.get('/blog', (req, res) => {
    res.send("Blog Page")
})

console.log("This is the id from blogData.json => " + blog[0].id + ". But how to get it...")


server.get("blog224/:id", (req, res) => {
  const {id} = req.params
  let evenBlogPost = false
  console.log(id)
  console.log("hello")

  //find out if blog is an even or odd number
  if(id & 1 == 1) {
    return false //odd
  } else {
    return true //even
  }


  // const findId = blog.find(function (idNum) {
  //   return (id = idNum.id)
  // })
  
})


// const viewData = {
//   // getStuffFromBlogHBSUsingID : findId,
//   getStuffFromBLOGHBS : blog,
// }

  // const studentsFile = path.join(__dirname, 'students.json')
//   // let evenBlogPost = false

//   //loop through blog posts and return true if blog is even number
//   // for (i = 0; i < blog.length; i++) {
//   //   if(i & 1 == 1) {
//   //     return false
//   //   } else {
//   //     return true
//   //   }
//   // }
//   res.send('HERE IS THE CAT WITH ID OF' + id)
// })


