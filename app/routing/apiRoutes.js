const strangers = require("../data/strangers");

module.exports = function(app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/strangers", function (req, res) {
        res.json(strangers);
      });

    //grabs data from strangers.js
    app.post("/api/strangers", function (req, res) {
        console.log("apiRoutes.js line 12")
    })
  };