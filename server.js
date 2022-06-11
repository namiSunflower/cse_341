const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const distDir = __dirname + "/dist/";

const port = process.env.PORT || 3000;
const app = express();


app.use(express.static(distDir))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
