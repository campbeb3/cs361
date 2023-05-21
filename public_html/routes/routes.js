//REF: https://github.com/bpk68/api-server-starter/tree/master

// load up our shiny new route for users
const jsonRoutes = require('./state_crime.js');

const appRouter = (app, fs) => {
  // added in a default route here that handles empty routes
  // at the base API url

//ROUTES//
  app.get('/', (req, res) => {
    res.send('welcome to the state_crime api-server');
  });

  // run our user route module here to complete the wire up
  jsonRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;