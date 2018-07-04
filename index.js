// modules
var express = require('express');
var app = express();

// set our port
var port = process.env.PORT || 3000;

// set the static files location
// app.use(express.static(__dirname + '/client/public'));
if (process.env.NODE_ENV === 'production') {
  // Serve up production assets
  app.use(express.static('client/public'));

  // Serve index.html if unrecognized route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
  });
}

// startup our app at http://localhost:3000
app.listen(port);

// expose app
exports = module.exports = app;
