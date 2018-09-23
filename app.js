const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const Controller      = require('./controllers/controller.js');
const hbs             = require('hbs');
const fs              = require('fs');

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

const port = process.env.PORT;

Controller(app);

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
