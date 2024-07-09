import express from 'express';
import bodyParser  from 'body-parser';

const app = express();
const port = 3000;

// middleware and static files
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

// Home Page
app.get('/', (req, res)=>{
    res.render("index.ejs")
});

// Server 
app.listen(port, (req, res)=>{
    console.log(`Server Listening on ${port}`);
});

