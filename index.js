const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended : true }));

app.use(express.static("assets"));
app.use(express.static("vendor"));

mongoose.connect("mongodb+srv://Ayush123:Ayush123@cluster0.7zjlv.mongodb.net/first?retryWrites=true&w=majority",{useNewUrlParser : true});

const enquirySchema = {
  name : String,
  email : String,
  message : String
};
const Enquiry = mongoose.model("Enquiry", enquirySchema);

const placementSchema = {
  name : String,
  email : String,
  phone : String,
  college : String
};
const Placement = mongoose.model("Placement", placementSchema);

const languageSchema = {
  name : String,
  email : String,
  phone : String,
  college : String
};
const Language = mongoose.model("Language", languageSchema);

const algorithmSchema = {
  name : String,
  email : String,
  phone : String,
  college : String
};
const Algorithm = mongoose.model("Algorithm", algorithmSchema);

const developmentSchema = {
  name : String,
  email : String,
  phone : String,
  college : String
};
const Development = mongoose.model("Development", developmentSchema);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/course", function(req, res) {
  res.sendFile(__dirname + "/course.html");
});

app.get("/thankyou", function(req, res) {
  res.sendFile(__dirname + "/thankyou.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.post("/enquiry", function(req, res) {

  const name1 = req.body.name;
  const email1 = req.body.email;
  const message1 = req.body.message;

  const enquiry = new Enquiry ({
    name : name1,
    email : email1,
    message : message1
  });

   enquiry.save();

   res.sendFile(__dirname + "/thankyou.html");

});

app.post("/placement", function(req, res) {

  const name1 = req.body.name;
  const email1 = req.body.email;
  const phone1 = req.body.phone;
  const college1 = req.body.college;

  const placement = new Placement ({
    name : name1,
    email : email1,
    phone : phone1,
    college : college1
  });

   placement.save();

   res.sendFile(__dirname + "/thankyou.html");

});

app.post("/language", function(req, res) {

  const name1 = req.body.name;
  const email1 = req.body.email;
  const phone1 = req.body.phone;
  const college1 = req.body.college;

  const language = new Language ({
    name : name1,
    email : email1,
    phone : phone1,
    college : college1
  });

   language.save();

   res.sendFile(__dirname + "/thankyou.html");

});

app.post("/development", function(req, res) {

  const name1 = req.body.name;
  const email1 = req.body.email;
  const phone1 = req.body.phone;
  const college1 = req.body.college;

  const development = new Development ({
    name : name1,
    email : email1,
    phone : phone1,
    college : college1
  });

   development.save();

   res.sendFile(__dirname + "/thankyou.html");

});

app.post("/algorithm", function(req, res) {

  const name1 = req.body.name;
  const email1 = req.body.email;
  const phone1 = req.body.phone;
  const college1 = req.body.college;

  const algorithm = new Algorithm ({
    name : name1,
    email : email1,
    phone : phone1,
    college : college1
  });

   algorithm.save();

   res.sendFile(__dirname + "/thankyou.html");

});

app.listen(3000, function() {
  console.log("server is running on 3000");
});
