var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var VIPS_COLLECTION = "vips";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// VIPS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
  
  /*  "/api/vips"
   *    GET: finds all vips
   *    POST: creates a new vip
   */
  
  app.get("/api/vips", function(req, res) {
  });
  
  app.post("/api/vips", function(req, res) {
  });
  
  /*  "/api/vips/:id"
   *    GET: find vip by id
   *    PUT: update vip by id
   *    DELETE: deletes vip by id
   */
  
  app.get("/api/vips", function(req, res) {
    db.collection(VIPS_COLLECTION).find({}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get vips.");
      } else {
        res.status(200).json(docs);
      }
    });
  });
  
  app.post("/api/vips", function(req, res) {
    var newVip = req.body;
    newVip.createDate = new Date();
  
    if (!req.body.name) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    } else {
      db.collection(VIPS_COLLECTION).insertOne(newVip, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new vip.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
    }
  });
  
  app.put("/api/vips/:id", function(req, res) {
  });
  
  app.delete("/api/vips/:id", function(req, res) {
  });