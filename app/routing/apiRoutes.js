
//LOAD DATA
var friends = require("../data/friends");

// ROUTING
module.exports = function (app) {
    //variable needs to be set so GET call doesn't error at start
    var bestMatch=""
    
    //Displays friend data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Allows user to post the data of incoming search results
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body
        //turn strings in scores back to integers after passing through $.post
        for (var i = 0; i < newFriend.scores.length; i++) {

            newFriend.scores[i] = parseInt(newFriend.scores[i])
        }
        //Compare scores of newFriend to all in friends list and populate the difference score in the array differenceArr
        var differenceArr=[];
        for (var t = 0; t < friends.length; t++) {
            var totalDifference=0;

            for (var i = 0; i < newFriend.scores.length; i++) {
                var difference = Math.abs(friends[t].scores[i] - newFriend.scores[i])
                totalDifference =totalDifference+difference
            }
            differenceArr.push(totalDifference)
        }
        //Find the lowest number in the array and its index
        var index = 0;
        var value = differenceArr[0];
        for (var i = 1; i < differenceArr.length; i++) {
          if (differenceArr[i] < value) {
            value = differenceArr[i];
            index = i;
          }
        }
        //Closest match for the questions asked
        bestMatch=friends[index];
        console.log(bestMatch.name)

        //test if newFriend is user data and properly formatted
        console.log(newFriend)
        //add new data to friends data
        friends.push(newFriend)
        //give json of new friend
        res.json(newFriend)
    });
   
    app.get("/api/best", function (req, res) {
  
        res.json(bestMatch);
    });
}
