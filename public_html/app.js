//source: https://www.youtube.com/watch?v=Fva57lcikK0
//JSON source: https://corgis-edu.github.io/corgis/json/state_crime/


// Express
var express = require('express');
var app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
PORT = 54545;

// Database
// var db = require('./database/db-connector');

// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
const e = require('express');
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

/*
ROUTES
*/
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

app.get('/Birds.json', function(req, res)
{ 
    res.render('Birds.json');     
});
//const btn = document.querySelector('#btn');
//const main = document.querySelector('.container');
//const url = 'state_crime.json';
//btn.addEventListener('click',reqData);

/*
function reqData() {
    fetch(url)
    .then(res=>res.json())
    .then(data=>addEventListener(data))
    .catch((error)=> {
        console.error(error);
    })
}

function adder(data) {
    console.log(data);
    const ul = document.createElement('ul');
    main.append(ul)
    data.forEach((ele, ind)=>{
        console.log(ele);
        const li = document.createElement('li');
        li.textContent=`${ind+1}.${ele.first}${ele.last}`;
        ulappend(li);
    })
}
/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});