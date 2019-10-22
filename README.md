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


```