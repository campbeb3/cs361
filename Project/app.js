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

/*ROUTES*/



//FETCH JSON DATA FROM PARTNER'S MICROSERVICE

/*
DOES NOT LIKE:
*/
//import fetch from 'node-fetch';
const fetch = require("node-fetch");
/*
async function getData() {
    const url = 'http://flip3.engr.oregonstate.edu:54546/api/data';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } 
  
getData();
*/


//RENDER HOME PAGE
app.get('/', function(req, res)
{ 
    res.render('index');     
});

//RENDER SEARCH PAGE
app.get('/search', function(req, res)
{ 
    res.render('search');     
});

/*
app.post('/test_api', async function(req, res)
{ 
    console.log(req);
    //res.render('test_api');
    //const url = 'http://flip3.engr.oregonstate.edu:54546/api/data?state=VA&var=S1701_C03_001E';
    url = 'http://flip3.engr.oregonstate.edu:54546/api/data?state='+req.body.state+'&var='+req.body.var_code+'';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //console.log(req.body); 
    //console.log(req.params);  
    console.log(res);
    return res.render('test_api');
    //return
});
*/

app.get('/test_api/:state/:var1', async function(req, res)
{ 
    console.log(req);
    //res.render('test_api');
    //const url = 'http://flip3.engr.oregonstate.edu:54546/api/data?state=VA&var=S1701_C03_001E';
    url = 'http://flip3.engr.oregonstate.edu:54546/api/data?state='+req.params.state+'&var='+req.params.var_code+'';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //console.log(req.body); 
    console.log(req.params);  
    //console.log(res);
    return res.render('test_api');
    //return
});



//RENDER RESULTS PAGE
app.get('/results', function(req, res)
{ 
    res.render('results');     
});

//RENDER RESULTS_LIST PAGE
app.get('/results_list', function(req, res)
{ 
    res.render('results_list');     
});

//HANDLE INVALID RESULTS
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });


/*LISTENER*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});