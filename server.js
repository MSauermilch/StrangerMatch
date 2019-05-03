
//Dependences
const express = require ("express");
const path = require("path");
//?? Needs body-parse?

//Sets Up express and sets port
const PORT = process.env.POST || 3000;

// Inigitiates Express
const app = express();

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allows us to use static files
//app.use(express.static("app/public"));

// Routes
require ("./app/routing/apiRoutes")(app);
require ("./app/routing/htmlRoutes")(app);

// Starts up the server.
app.listen(PORT, function(){
    console.log ("Meeting Strangers on Port: " + PORT)
});
