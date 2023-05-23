//campbeb3 - cs361 Spring2023
//JSON source: https://corgis-edu.github.io/corgis/json/state_crime/

// Express
var express = require('express')
const debug = require("debug")("server");
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Methods','Content-Type','Authorization');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next(); 
})
var cors = require('cors');
app.use(cors({
    origin: '*'
}));
PORT = 54555;

// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
const e = require('express');
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

//*ROUTES*//
const fetch = require("node-fetch");

//RENDER HOME PAGE//
app.get('/', function(req, res)
{ 
    res.render('index');     
});

//RENDER SEARCH PAGE//
app.get('/search', function(req, res)
{ 
    res.render('search');     
});

app.get('/test_api/:state', async function(req, res)
{ 
    console.log("request received");
    console.log(req.params);
    console.log(req);
    // GET MEAN HOUSEHOLD INCOME (S1902_C03_001E)
    url = 'http://flip3.engr.oregonstate.edu:54546/api/data?state='+req.params.state+'&var=S1902_C03_001E';
    console.log("url is:"+url);
    const response = await fetch(url);
    const data = await response.json();
    console.log("data is:"+data);
    return res.json(data);
});



//RENDER RESULTS PAGE//
app.get('/results', function(req, res)
{ 
    res.render('results');     
});

//RENDER RESULTS_LIST PAGE//
app.get('/results_list', function(req, res)
{ 
    res.render('results_list');     
});

//HANDLE INVALID RESULTS/
app.get('*', (req, res) => {
    res.send('404! This is Brian and this is an invalid URL.');
  });


//*LISTENER*//
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});