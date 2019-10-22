# blog-express-handlebars
Let's write our EDA blogs with Express.js and Handlebars.js.

Please note:
- This is my approach to converting a blog site - there will be many other ways of doing this!
- This approach may work better/worse for you, depending on how you have set up your initial blog website
- You can view how I implemented this with my EDA blog by checking out the branch "cherise-blog"
    - Feel free to check this out if you want to get a better idea of how I implemented the steps
    - Or come ask me questions directly! 
- Also feel free to give feedback - either let me know directly, raise an issue, or even create a pull request!
- This does not include tests! This is designed to be an exercise focused on getting more comfortable with express and handlebars. Feel free to add your own test suite!
    - You can add these test packages into your project like so: ```npm install jest supertest cheerio```

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

## Express
### Setup Express Server
1. Have a look inside the index.js and server.js files
    - index.js runs the server
    - server.js sets up the server and determines how it will run
2. Type the following commands into the command line to run the server:
    - ```npm run dev``` will use nodemon to restart the server every time it detects a change
    - ```npm start``` will start the server (without using nodemon)
3. You can now visit http://localhost:3000/ 
    - This will display a ```Cannot GET /``` error. This is because our server is not serving up any data at this route ("/"). Let's fix that.

### Express Routes
1. Express allows us to display data based on the url we are accessing in our browser. We do this using ROUTES.
2. Look at the server.js file, and uncomment the code under "Set up routes". Then refresh your browser
    - We are now sending "Home Page" back to the browser when we visit the "/" route
    - We send "Blog page" back to the browser when we visit the "/blog" route

More about routes:
* "/" is commonly referred to as the "home route". When we access this, we are visiting http://localhost:3000
* "/blog" will be the route at which we place our blog. When we access this, we are visiting http://localhost:3000/blog

Both of these routes are accessed using "GET" requests. They are essentially requesting data from a specified resource. They then respond to that according to the code we write (e.g. ```res.send()```, ```res.render()```). There are other types of requests, but we will not be covering them here in this project.
* For more info: https://www.w3schools.com/tags/ref_httpmethods.asp 

### Setup Blog
1. Time to set up your own blog. Copy your own blog html files into your local repository. Make sure to also include your CSS files and any images you might have used, otherwise they will not display!
    - This is how I have set up my project. Feel free to follow this layout, or create your own.
    ```
        -> project folder
        ---> 'blog' folder (containing individual blog html files)
        ------> 'sprint1-cultural.html'
        ------> 'sprint2-cultural.html'
        ------> ...
        ---> 'public' folder
        ------> 'styles' folder
        ---------> 'main.css'
        ------> 'images' folder
        ---------> (all images go in here)
        ---> index.html (website home page)
        ---> server.js
        ---> index.js
        ...
    ```
2. In order to serve up our static files (e.g. images, CSS, JavaScript), we need to place these within a specified folder
    - Look at the server.js file and place the following code under "Serve static files"
    ```
    server.use(express.static('public'))
    ```
    - This code tells express to look for static files inside a folder called "public"
3. Make sure your static files are all contained a folder named "public" 
    - See the above suggested layout for an example of this

### Setup for Express Routes
1. First let's alter the home ("/") route to deliver our 'index.html' file, instead of just writing "Home Page"
    - hint: ```res.render()``` instead of ```res.send()```
2. Next we need to display each individual blog post. Writing a separate route for each of these files would make our server code super long, so lets use Route Parameters. See the example below (but feel free to solve this in your own way!):
    ``` 
    server.get("/blog/cultural/:id", (req, res) => {
        // use 'id' to dictate which file you want to send back to the sender
    })
    ```
3. Don't forget to change your ```<a href>``` links in all of your files!
    - E.g. you could now change ```href="../blog/sprint1-cultural.html"``` to ```href="/cultural/1```
    - This will allow you to render your files based on ROUTES, rather than having to specify the exact filename in each of your files
4. Make sure all your files have been imported into this new project, and that they can be viewed by visiting their specific route. Feel free to use the example above, or implement your own solution.
    - If your folder structure in this project is different to the one in your original project, you may need to update any links/references to other files!
5. Congrats! Hopefully by this stage, you should have an express server displaying your blog!

## Handlebars
### Set Up Handlebars
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

### Handlebars Layouts
1. A large amount of the code in our ".hbs" files is repeated! The html set-up of each of the files is likely near-identical amongst each of our blog posts. Using LAYOUTS allows us to minimise this repetiton
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
5. Copy and paste one of your blog pages into this new file. If you delete the part where you actually write the blog post, you will find that there is a large html skeleton left over!
6. We can dynamically update the content inside this html skeleton/layout by using ```{{{body}}}```
    - Replace the blog post with ```{{{body}}}```, as shown in the example below
    ```
    <html>
        <head> 
            ...
        </head>
        <body>
            <other-code-here> 

            {{{body}}}

            <other-code-here> 
        </body>
    </html>
    ```
7. Now we can modify our blog post files (the files that are within our "views" folder)
    - For each of these files, we can delete everything except the blog post! (Or more specifically - we can delete everything that is contained within our "main.hbs" file)
8. Restart the server and visit your routes. They should all look the same as before! But we have now significantly reduced the number of lines of code in our project.

#### Additional Layouts
1. It is possible to have more than one layout file!! In my case, the layout of my home page is actually different to my blog pages (it has a different "header" layout) - so just rendering this page within the "main" template won't work for me!
2. You can create different templates, and then tell express to use that particular template (rather than the default one)
3. To solve this: I created a new layout file called "home.hbs" within my "layouts" folder
    - Within this file, I repeated the steps for the previous section, except specifically for my home page(index.ejs) rather than my blog files -> this left me with an entirely new template
4. We can then tell express to use the "home.hbs" layout instead of the "main" layout when we visit the home ("/") route
    ```
    server.get("/", (req, res) => {
      res.render("index", { layout: "home.hbs" })
    }
    ```

### Handlebars Partials
1. Partials allow us to write reusable small blocks of code - thus minimising redundant code within our files. In this example, we will create "header" and "footer" partials, which can then be inserted into our files.
2. Within your template files, you likely have some code above and below your ```{{{body}}}``` (represented by ```<other-code-here>``` in the example below). We can turn these into 'header' and 'footer partials (assuming this piece of code is shared across all of your files)
    ```
    <html>
        <head> 
            ...
        </head>
        <body>
            <other-code-here> // the "header" section

            {{{body}}}

            <other-code-here> // the "footer" section
        </body>
    </html>
    ```
3. In my case, my "main.hbs" and "home.hbs" templates have different "header" sections (they have different navigation bar layouts), but the footer remains the same
    - In this project, I will give instructions that fit my project (as defined above) - feel free to adapt this part to suit your project layout better!
4. Within the "views" folder, create a new folder called "partials" 
5. Create a new partial (file) within this folder called "footer.hbs', and transfer the code from the "footer" section of your template file into this partial.
6. You can then require this partial into the footer section, in the place where the footer code used to live
    ```{{> header}}
7. Repeat the above steps for your headers. If you have a similar layout to mine, you might need a "main-header.hbs" and a "home-header.hbs" file. If your hader is the same across all of your files, you might need only a single "header.hbs" file
8. Require the relevant partials into your templates. 
    - My "main.hbs" file now looks like this:
        ```
    <html>
        <head> 
            ...
        </head>
        <body>
            {{main-header}} // NB: in the "home.js" file, this will instead say {{home-header}}

            {{{body}}}

            {{footer}}
        </body>
    </html>
    ```
9. Now visit http://localhost:3000. Your blog site should be displaying!!

## Congrats! You now have built a blog site with express and handlebars!