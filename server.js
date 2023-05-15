const express = require("express");
const app = new express();
require("./database/database.js");
const allRoutes = require('./routes/all.routes.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(express.json());
app.use(allRoutes);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
