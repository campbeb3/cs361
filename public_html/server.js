// REF: https://github.com/bpk68/api-server-starter/tree/master

// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();
const fs = require('fs');

// configure express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTE HANDLER //
const routes = require('./routes/routes.js')(app, fs);

// LAUNCH ON PORT 54544 //
const server = app.listen(54544, () => {
  console.log('listening on port %s...', server.address().port);
});
