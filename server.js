
// Dependences
const express = require ("express");

// Sets Up express and sets port
const PORT = process.env.POST || 3000;

// Inigitiates Express
require('dotenv').config()
const app = express();


// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Code to serve images, CSS files, and JavaScript files in a directory public:
app.use(express.static('public'))

// Routes
require ("./app/routing/apiRoutes")(app);
require ("./app/routing/htmlRoutes")(app);

// Starts up the server.
app.listen(PORT, function(){
    console.log ("Meeting Strangers on Port: " + PORT)
});
