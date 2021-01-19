const express = require("express");
const cors = require("cors");
const knex = require("knex");
const bcrypt = require("bcryptjs");
const morgan = require("morgan");

const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

const register = require("./Controllers/register");
const signin = require("./Controllers/signin");
const profile = require("./Controllers/profile");
const image = require("./Controllers/image");
const authorization = require("./middleware/authorization");

const db = knex({
  //from their website http://knexjs.org/ .
  client: "pg",
  connection: process.env.POSTGRES_URI,
  ssl: true,
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(morgan("tiny"));

console.log("startedd");


//Register
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
}); //<== this is called dependencies injection!

//sign in
app.post("/signin", (req, res) => {
  signin.handleSignInAuthentiaction(req, res, db, bcrypt);
});

//Profile
app.get("/profile/:id", authorization.requireAuth, (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.put("/profile/:id", authorization.requireAuth, (req, res) => {
  profile.handleProfileUpdate(req, res, db);
});

//Image (to return entries)
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

//ImageURL (to return facebox)
app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});


if (process.env.NODE_ENV === "production") {
  app.use(compression());
  //app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}


app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port" + port);
});
