//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const aboutContent = "An organization or economic system where goods and services are exchanged for one another or for money. Every business requires some form of investment and enough customers to whom its output can be sold on a consistent basis in order to make a profit. Businesses can be privately owned, not-for-profit or state-owned.";

const contactContent = "We aim to reach you anytime & everywhere.. Your satisfaction is our mission. For any inquiries or complaints please contact us: example@gmail.com";

const servicesContent = "Drawing on our consulting, public accounting and industry backgrounds, we design practical solutions and implement the change our clients need to achieve exceptional results. As we have grown, the ways we serve our clients has only expanded – we continue to add capabilities and develop new solutions that meet the dynamic, and evolving, needs of our clients.";

const schedulesContent = "Write all your text messages days or months in advance and then leave them to be sent out automatically, according to your schedule. Trust our smart scheduling system and get your text messages delivered at the right time.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  //res.sendFile(__dirname + "/First Website_Resp.html");
  res.render("home", {});
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/services", function(req, res){
  res.render("services", {servicesContent: servicesContent});
});

app.get("/schedules", function(req, res){
  res.render("schedules", {schedulesContent: schedulesContent});
});

// app.get("/:postName", function(req, res){
//   const requestedTitle = _.lowerCase(req.params.postName);
//   res.render(""+requestedTitle+"", {});
// });

// app.get("/posts/:postName", function(req, res){
//   const requestedTitle = _.lowerCase(req.params.postName);
//   res.render(""+requestedTitle+"", {});
// });

app.get("/posts/:postName", function(req, res){
  const requestedTitle = req.params.postName;
  res.render(""+requestedTitle+"", {});
});

// app.get("/posts/:postName", function(req, res){
//   res.render("flowerPost", {});
// });

//   posts.forEach(function(post){
//     const storedTitle = _.lowerCase(post.title);
//
//     if(requestedTitle === storedTitle){
//       //console.log("Match Found!");
//       res.render("post", {title: post.title, content: post.content});
//     }else{
//       //console.log("Not a match");
//     }
//   });
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});

//if not working check naming it index.js here and in package.json
