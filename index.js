import express from 'express';
import bodyParser  from 'body-parser';
import pg from 'pg';


const app = express();
const port = 3000;


// Database

const db = new pg.Client({
    user : "postgres",
    host : "localhost",
    database : "World",
    password : "Suryavme@005",
    port : "5432"
})


db.connect()

// middleware and static files
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));



// Home Page
app.get('/', async (req, res)=>{
    const result  = await db.query("SELECT country_code from visited_countries");
    let countries = []
    result.rows.forEach(country =>{
        countries.push(country.country_code);
    });
    console.log(countries);

    res.render("index.ejs" , { countries : countries});
});


app.post('/submit', async (req, res)=>{
    const answer = req.body["country"];
    // console.log(answer);
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ;",
        [answer.toLowerCase()]
    );
    const data = result.rows[0];
    const country_code = data.country_code;
    // console.log(country_code);
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1) ", [country_code]);
    res.redirect('/');

});
// Server 
app.listen(port, (req, res)=>{
    console.log(`Server Listening on ${port}`);
});

