
//LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  
//Displays friend data
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Allows user to post the data of incoming search results
  app.post("/api/survey", function(req, res) {

   var newFriend=req.body
   //test if newFriend is user data and properly formatted
   console.log(newFriend)
    //add new data to friends data
   friends.push(newFriend)
    //give json of new friend
   res.json(newFriend)
  });
}
