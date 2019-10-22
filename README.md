# blog-express-handlebars
Let's write our EDA blogs with Express.js and Handlebars.js.

## Setup
1. There are two options for setup:
    - Option A: Clone the repository down to your computer, and create (and navigate into) your own branch
        ```
        git clone https://github.com/cherise-tan/blog-express-handlebars.git
        git checkout -b <your-name-here>
        ```    
    - Option B: Fork the repository and then pull it down to your computer
        ```
        git clone <your-repository-name-here>
        ```
2. Use npm to install packages
    ```
    npm install
    ```
3. Add a .gitignore file so you don't upload your node_modules
    ```
    touch .gitignore
    echo node_modules > .gitignore // this will insert the text "node_modules" inside your .gitignore file
    ```

## Setup Express Server
1. Have a look inside the index.js and server.js files
    - index.js runs the server
    - server.js sets up the server and determines how it will run
2. Type the following commands into the command line to run the server:
    - ```npm run nodemon``` will use nodemon to restart the server every time it detects a change
    - ```npm run start``` will start the server (without using nodemon)
3. You can now visit http://localhost:3000/ 
    - This will display a ```Cannot GET /``` error. This is because our server is not serving up any data at this route ("/"). Let's fix that.

## Express Routes
1. Express allows us to display data based on the url we are accessing in our browser. We do this using ROUTES.
2. Look at the server.js file, and uncomment the code under "Set up routes". Then refresh your browser
    - We are now sending "Home Page" back to the browser when we visit the "/" route
    - We send "Blog page" back to the browser when we visit the "/blog" route

More about routes:
* "/" is commonly referred to as the "home route". When we access this, we are visiting http://localhost:3000
* "/blog" will be the route at which we place our blog. When we access this, we are visiting http://localhost:3000/blog

Both of these routes are accessed using "GET" requests. They are essentially requesting data from a specified resource. They then respond to that according to the code we write (e.g. ```res.send()```, ```res.render()```). There are other types of requests, but we will not be covering them here in this project.
* For more info: https://www.w3schools.com/tags/ref_httpmethods.asp 

## Setup Blog Routes
1. Time to set up your own blog. Copy your own blog html files into your local repository. Make sure to also include your CSS files and any images you might have used, otherwise they will not display!
    - This is how I have set up my project. Feel free to follow this layout, or create your own.
    ```
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
    ```
2. First let's alter the home ("/") route to deliver our 'index.html' file, instead of just writing "Home Page"
    - hint: ```res.render()``` instead of ```res.send()```
3. Next we need to display each individual blog post. Writing a separate route for each of these files would make our server code super long, so lets use Route Parameters. See the example below (but feel free to solve this in your own way!):
    ``` 
    server.get("/blog/cultural/:id", (req, res) => {
        // use 'id' to dictate which file you want to send back to the sender
    })
    ```
4. Don't forget to change your ```<a href>``` links in all of your files!
    - E.g. you could now change ```href="../blog/sprint1-cultural.html"``` to ```href="/cultural/1```
    - This will allow you to render your files based on ROUTES, rather than having to specify the exact filename in each of your files
5. Make sure all your files have been imported into this new project, and that they can be viewed by visiting their specific route. Feel free to use the example above, or implement your own solution.
    - If your folder structure in this project is different to the one in your original project, you may need to update any links/references to other files!
6. Congrats! Hopefully by this stage, you should have an express server displaying your blog!

## Set Up Handlebars
Handlebars allows us our html to have more flexibility
- It allows us to use layouts and partials to create more modular html 
    - This allows for more flexibility when building up html files, and also can reduce repeated code
- It allows us to use some javascript-like functionality when rendering our pages (e.g. if/else statements, passing variables into our pages)

1. First we need to import the 'express-handlebars' package into our server.js file
    ```
    const hbs = require('express-handlebars')

    ```
2. Next we need to set up the handlebars middleware
    - "server.engine" sets up our "hbs" template engine to look for ".hbs" files
    - "server.set" tells our server to use the "hbs" template engine
    ```
    server.engine('hbs', hbs({
        extname: 'hbs',
    }))
    server.set('view engine', 'hbs')
    ```
3. We have now configured express-handlebars to expect all templated files to end with ".hbs". Express-handlebars also expects to find all the ".hbs" files within a "views" folder. 
    - We now need to create a "views" folder, and place all of our html files within it
    - We also need to change the ".html" to ".ejs" for each of these files!!
4. We now need to modify our express routes - they now need to render .hbs files (instead of .html files)
    - Note we do not need to write ".hbs" at the end of the file names. Just "index" will work fine. Go handlebars!
    ```
    server.get('/', (req, res) => {
        res.render("index")
    })
    ```
5. Run your server again. Your blog website should look just the same as it did before adding handlebars

## Handlebars Layouts
1. A large amount of the code in our ".hbs" files is repeated! The html set-up of each of the files is likely near-identical amongst each of our blog posts. Using LAYOUTS allows us to minimise this repititon
2. First we need to configure handlebars to have a default layout. In the below example, I have set the default layout file to be called "main"
    - NB: "main" will be an hbs file -> aka "main.hbs"
    ```
    server.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'main'
    }))
    ```
3. Time to add our layout. Within the "views" folder, make another folder called "layouts"
4. Within the "layouts" folder, create a new document called "main.hbs"
5. Copy and paste one of your blog pages into this new file. If you delete the part where you actually write the blog, you will find that there is a large html skeleteon left over!
6. We can dynamically update the content inside this html skeleton/layout by using ```{{{body}}}```
    - Replace the blog post with ```{{{body}}}```, as shown in the example below
    ```
    <html>
        <head> 
            <other-code-here> 
        </head>
        <body>
            <other-code-here> 

            {{{body}}}

            <other-code-here> 
        </body>
    </html>
    ```
7. Now we can modify our blog post files ("the files that are within our "views" folder)
    - For each of these files, we can delete everything except the blog post! (Or more specifically - we can delete everything that is contained within our "main.hbs" file)
8. Restart the server and visit your routes. They should all look the same as before! But we have now significantly reduced the number of lines of code in our project.