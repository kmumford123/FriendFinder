var path = require("path");
var friendsData = require("../app/data/friends.js");
// console.log(friendsData);


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res) {

        // friendsData
        // compare data and user req
        // friendsData.forEach((people) => `${people.scores}`);
        for (i = 0; i < friendsData.length; i++) {
            // console.log(friendsData[i].scores)
            for (j = 0; j < friendsData[i].scores.length; j++) {
                var people = req.body.scores;
                console.log(`${people} ${req.body.name}`)
                    // if (friendsData[i].scores[j] != req.body.scores[j]) {
                let difference = friendsData[i].scores
                    .filter(x => !people.includes(x))
                    .concat(people.filter(x => !friendsData[i].scores.includes(x)));
                console.log(difference);
                // }
                //     console.log(req.body.scores[j])
            }
        }
        // req.body.name
        // console.log(req.body);
        friendsData.push(req.body);
        res.json("friendsData");
    });
};