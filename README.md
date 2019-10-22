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
1. Time to set up your own blog. Copy your own blog html files into this repository. Make sure to also include your CSS files and any images you might have used, otherwise they will not display!
    - This is how I have set up my project. Feel free to follow this layout, or create your own.
        -> project folder
        ---> 'blog' folder (containing individual blog html files)
        ------> 'sprint1-cultural.html'
        ------> 'sprint2-cultural.html'
        ------> ...
        ---> 'styles' folder
        ------> 'main.css'
        ---> 'images' folder
        ------> (all images go in here)
        ---> index.html (website home page)
        ---> server.js
        ---> index.js
        ...
2. First lets alter the home ("/") route to deliver our 'index.html' file, instead of just "Home Page"
    - hint: ```res.render()``` instead of ```res.send()```
3. Next we need to display each individual blog post. Writing a separate route for each of these files would make our server code super long, so lets use Route Parameters
    ``` 
    server.get("/blog/cultural:id", (req, res) => {
        // use 'id' to dictate which file you want to send back to the sender
    })
    ```
4. Don't forget to change your ```<a href>``` links in all of your files!
    - E.g. you could now change ```href="../blog/sprint1-cultural.html"``` to ```href="/cultural/1```
    - This will allow you to render your files based on ROUTES, rather than having to specify the exact filename in each of your files
5. Make sure all your html files have been imported into the project, and can be displayed by visiting their specific route. Feel free to use the example above, or implement your own solution.
    - If your folder structure in this project is different to the one in your original project, you may need to update any links/references to other files!
6. Congrats! Hopefully by this stage, you should have a server displaying 


