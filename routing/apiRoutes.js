var path = require("path");
var friendsData = require("../app/data/friends.js");
// console.log(friendsData);


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res) {
        res.json("friendsData");
        console.log(friendsData);
    });
};