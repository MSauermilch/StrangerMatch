
//Dependences
const express = require ("express");
const path = require("path");
//?? Needs body-parse?

//Sets Up express and sets port
const PORT = process.env.POST || 8080;

// Inigitiates Express
const app = express();

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require ("./app/routing/apiRoutes")(app);
require ("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log ("Meeting Strangers on Port: " + PORT)
});
