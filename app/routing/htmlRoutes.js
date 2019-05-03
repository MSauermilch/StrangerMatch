
var path = require("path");

module.exports = function(app) {
    
    //Surver Page <== working
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Home page/No matching route <== working
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};