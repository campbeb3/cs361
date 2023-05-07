//campbeb3 - cs361 Spring2023
//JSON source: https://corgis-edu.github.io/corgis/json/state_crime/

// Express
var express = require('express');
var app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
PORT = 54555;

// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
const e = require('express');
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

/*ROUTES*/
app.get('/', function(req, res)
{ 
    res.render('index');     
});

app.get('/search', function(req, res)
{ 
    res.render('search');     
});

app.get('/results', function(req, res)
{ 
    res.render('results');     
});

app.get('/results_list', function(req, res)
{ 
    res.render('results_list');     
});

app.get('/state_crime', function(req, res)
{ 
    res.render('state_crime');     
});

/*LISTENER*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});