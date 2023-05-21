//REF: https://github.com/bpk68/api-server-starter/tree/master

const jsonRoutes = (app, fs) => {
    // VARIABLES //
    const dataPath = './data/state_crime.json';
  
    // HELPERS //
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
      fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
              throw err;
          }
          callback(returnJson ? JSON.parse(data) : data);
        });
    };

    // READ //
    app.get('/state_crime', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = jsonRoutes;