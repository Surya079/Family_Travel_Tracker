# Family_Travel_Tracker

_This project is used mark a visited countries. it can help us to which countries we are visited and which country we have to go to visited member wisly we can identify_.

## Project_Setup

```
 npm  init -y  
 npm i express ejs body-parser nodemon
 
```
_Once installed all the required packages make sure to check all the packages are successfully installed_

    ```
                {
        "name": "family_travel_tracker",
        "version": "1.0.0",
        "main": "index.js",
        "type": "module",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "description": "",
        "dependencies": {

           ***"body-parser": "^1.20.2",         
            "ejs": "^3.1.10",
            "express": "^4.19.2"*** 
        }
        }
    ```

### create files with path like bellow:

    * /views/index.ejs             <!--  embedded javascript file -->
    * /public/styles/main.css      <!-- style file to adding styles in our project -->
    * index.js                     <!-- Server file    -->
    * Queries.sql                  <!-- All the queries for our database  -->

## Server Setup

    _make sure to before setup your server need to import all the required module So, Go to the 
    `package.json` make sure to add given bellow:_

    
        > type : "module"

    Now, we can starting ro setup our server as well like bellow code.

    ```
       > import express from 'express';

       > const app = express();
       > const port = 3000;


       > // Server 
       > app.listen(port, (req, res)=>{
       >     console.log(`Server Listening on ${port}`);
       > });

    ```

_make sure to don't forget to install `npm i nodemon `. This is one of  package to start our project on local server `https://localhost:3000`._


## Render a  Map using Get Http request 
_we are going to render our map in `index.ejs` file by using a get http request like bellow code:_

```
    // Home Page
    app.get('/', (req, res)=>{
        res.render("index.ejs")
    });

```
## Adding static Files
* _If we adding css or images in our file we can  specify static file like bellow_

* _Even With add the middleware for to getting all the user body request by using code bellow_ 

```
> app.use(bodyParser.urlencoded({extended : true}));  // Middleware
> app.use(express.static("public"))   // static Root

```

### Install our Database and setup

* _before you install make sure to update your table in pgadmin using given queries in [SQL Queries](https://github.com/Surya079/Family_Travel_Tracker/blob/main/queries.sql)_

* _after You need to install the database in you project using `npm install pg`. Then you havt setup your database in your main server file like using bellow Example_
 
```
    import pg from 'pg';
    
    // Database

    const db = new pg.Client({
        user : "postgres",
        host : "localhost",
        database : "World",
        password : "Suryavme@005",
        port : "5432"
    })


    db.connect();

```

