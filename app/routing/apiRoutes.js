const strangerData = require("../data/strangers");

module.exports = function(app) {

    // A GET route with the url /api/Strangers. This will be used to display a JSON of all possible Strangers.
    app.get("/api/strangerData", function (req, res) {
        res.json(strangerData);
      });

    //grabs data from Survey page
    app.post("/api/strangerData", function (req, res) {

        // New Stranger's Name
        var newStranger = req.body.name;
        // Survey Score Array
        var newStrangerScore = req.body.score;

        var lastDiff = 81;
        var strangerNum = 0;

        for (var i = 0; i < strangerData.length; i ++) {
          
          var totalDiff = 0;

          for (var j = 0; j < newStrangerScore.length; j++) {
            if (newStrangerScore[j] > strangerData[i].score[j]) {
              var diffScore = newStrangerScore[j] - strangerData[i].score[j];
            } else if (newStrangerScore[j] < strangerData[i].score[j]) {
              var diffScore = strangerData[i].score[j] - newStrangerScore[j];
            }
            totalDiff += diffScore;
          }
          if (totalDiff < lastDiff) {
            lastDiff = totalDiff;
            strangerNum = i;
          }
        };
          console.log(strangerData[strangerNum]);
          strangerData.push(newStranger);

          let strangerMatch = strangerData[strangerNum];
          res.send(strangerMatch);
    })
  };