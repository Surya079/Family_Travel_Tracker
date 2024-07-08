# Family_Travel_Tracker

_This project is used mark a visited countries. it can help us to which countries we are visited and which country we have to go to visited member wisly we can identify_.

## Project_Setup

```
 npm  init -y  
 npm i express ejs body-parser
 
```
_ Once installed all the required packages make sure to check all the packages are successfully installed _

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

           *** "body-parser": "^1.20.2",         
            "ejs": "^3.1.10",
            "express": "^4.19.2" ***
        }
        }
    ```

### create files with path like bellow:

    * /views/index.ejs             <!--  embedded javascript file -->
    * /public/styles/main.css      <!-- style file to adding styles in our project -->
    * index.js                     <!-- Server file    -->
    * Queries.sql                  <!-- All the queries for our database  -->

## Server Setup
    make sure  to before setup your server need to import all the required module So, Go to the 
    `package.json` make sure to add given bellow:
    
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