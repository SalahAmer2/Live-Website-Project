//jshint esversion:6

const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/First Website_Resp.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});

//if not working check naming it index.js here and in package.json
