# blog-express-handlebars
Let's write our EDA blogs with Express.js and Handlebars.js.

## Setup
1. Option A:
    - Clone the repository down to your computer, and create your own branch
        ```git clone <...>```
        ```git checkout -b <your-name-here>```
    Option B:
    - Fork the repository and then pull it down to your computer
        ```git clone <your-repository-name-here>```
2. Use npm to install packages
    ```npm install```
3. Add a .gitignore file so you don't upload your node_modules
    ```touch .gitignore```
    ```echo node_modules > .gitignore```

## Setup Express Server
1. Have a look inside the 'index.js' and 'server.js' files
    - 'index.js' runs the server
    - 'server.js' defines how the server will run
2. Type the following commands into the command line to run the server:
    - ```npm run nodemon``` will use nodemon to restart the server every time it detects a change
    - ```npm run start``` will start the server (without using nodemon)
3. You can now visit http://localhost:3000/ 
    - This will display a ```Cannot GET /``` error. This is because our server is not serving up any data at this route ("/"). Let's fix that.

## Express Routes
1. Express allows us to display data based on the url we are accessing in our browser. We do this using ROUTES.
2. Look at the "server.js" file, and uncomment the code under "Set up routes". Then refresh your browser
    - We are now sending "Home Page" back to the browser when we visit the "/"
    - We send "Blog page" back to the browser when we visit the "/blog" route

More about routes:
    - "/" is commonly referred to as the "home route". When we access this, we are visiting http://localhost:3000
    - "/blog" will be the route at which we place our blog. When we access this, we are visiting http://localhost:3000/blog
        - Nb: this may end up being slightly different for you, depending on how you have set up your EDA blog previously. Feel free to change this to something that works for you!

Both of these routes are accessed using "GET" requests. They are essentially requesting data from a specified resource. They then respond to that according to the code we write (e.g. ```res.send()```, ```res.render()```)
    - For more info: https://www.w3schools.com/tags/ref_httpmethods.asp 

## Setup Blog Routes


