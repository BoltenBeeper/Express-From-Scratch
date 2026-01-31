# Express From Scratch

This is a project purely made for me to practice Express.JS without any other non-required technologies. I want to know the ins and outs of Express JS, be able to explain it well, and use it in the future without needing a tutorial.

Technologies/concepts used:
 - Express JS
 - JSON formating/parsing
 - Data structures
 - JS promises
 - JS async, await
 - Node File System (fs)

DEPENDENCIES: 
 - Node JS "npm init -y"
 - Express JS "npm i express"
 - Nodemon "npm i --save-dev nodemon"
 - EJS "npm i ejs"

File map:
 - public: All static files (vanilla HTML, CSS and JS) that typically for non-express projects. (Standard naming)
 - routes: Express JS files that contian the logic for processing requests sent and recieved from different URL routes. (Ex.: "./users/new") (Standard naming)
 - views: Pages that use the ejs file format. (Dynamic HTML that changes based on server information) (Necessary naming)
 - .gitignore: Containes names of files/folders for the git service to ignore when pushing to the cloud. (Necessary naming)
 - package.json: JSON data containing project and dependency information. (Automatically created from node.js)
 - README.md: This text file. Notes from me about how the project is made with necessary information for replication. (Necessary naming)
 - server.js: Primary JS file with server setup logic. (Standard naming)

 - node_modules (automatically added with express.js): Folder with module files coming from node, necessary for installed node packages.
 - package-lock.json (automatically added with express.js): Mode in-depth JSON data specifically detailing to node what dependencies to use from node_modules.

Available URLs/Requests:
 - "/" (GET): Home page. Basically just says hi.
 - "/users" (GET): Displays a list of all created users.
 - "/users/new" (GET): A form to create a new user.
 - "/users/new" (POST): Creates a new user object from form data and adds it to users list.
 - ".users/[user ID] (GET)" Displays users page with their info from ID in URL.
 - ".users/[user ID] (PUT)" Updates user with the given ID's info'.
 - ".users/[user ID] (DELETE)" Deletes the user with the given ID.

List of steps I did to make the project:
 - Terminal setup
  1. Initialized with "git init" and subsequent steps to properly link my project to this public repository.
  2. "npm init -y" for default Node configuration.
  3. "npm i express" installing express. (Duh)
  4. "npm i --save-dev nodemon" to install Nodemon for easier testing without manual refresh '--save-dev'ed to make it a necessary dependency.
  5. "npm i ejs" to allow ejs file support. (Dynamic HTML that changes based on server information)
 - Folder organization
  1. routes
  2. public
  3. ejs_pages

Sources:
 - Express JS basics video (Web Dev Simplified): https://www.youtube.com/watch?v=SccSCuHhOw0
