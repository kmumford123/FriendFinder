var path = require("path");
var friendsData = require("../app/data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res) {

        console.log(friendsData);
    });
};