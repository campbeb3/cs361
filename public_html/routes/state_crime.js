const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/state_crime.json';
  
    // READ
    app.get('/state_crime', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = userRoutes;