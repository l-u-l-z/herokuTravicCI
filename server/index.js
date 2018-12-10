const compression = require('compression');
const express = require('express');
const path = require('path');
const chalk = require('chalk');

const notice = chalk.green;
// const error = chalk.red;

const rootPath = path.resolve(__dirname, '..');
const PORT = process.env.PORT || 8080;

const app = express();
app.enable('trust proxy'); // heroku
app.use(compression()); // compress all requests
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(rootPath + '/build/index.html');
});

app.listen(PORT, function () {
  console.log(notice(`💻 Server listening on port ${PORT}!`));
});
