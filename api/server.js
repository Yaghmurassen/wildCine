const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/lefeu', function (req, res) {
  fs.readFile('movies.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
