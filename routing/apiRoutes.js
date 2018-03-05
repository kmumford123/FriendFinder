var path = require("path");
var friendsData = require("../app/data/friends.js");
// console.log(friendsData);


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res) {
        // compare data and user req

        for (i = 0; i < friendsData.length; i++) {
            // console.log(friendsData[i].scores)

            for (j = 0; j < friendsData[i].scores.length; j++) {
                var people = req.body.scores;
                // if (friendsData[i].scores[j] != req.body.scores[j]) {
                var matchingNumbers = Math.abs(+friendsData[i].scores[j] - +req.body.scores[j]);
                var mnumarray = []
                var matchValue = mnumarray.reduce((a, b) => a + b, 0);
                if (matchingNumbers > 0) {
                    mnumarray.push(matchingNumbers)
                    console.log(`${friendsData[i].name} ${mnumarray}`);

                }
                // console.log(mnumarray);
                // }
            }
        }
        // var matchValue = mnumarray.reduce((a, b) => a + b, 0);
        // console.log(matchValue)
        // console.log(mnumarray);
        friendsData.push(req.body);
        res.json("friendsData");
    });
};