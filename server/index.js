const express = require("express");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const User = require("./models/User")


dotenv.config();

//Express Setup
const app = express();
// const CLIENT_URL = process.env.CLIENT_URL;
// app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

//set statics (public) folder
app.use("/uploads", express.static(__dirname + "/uploads"));

//Database Connect
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);
app.get("/", (req, res) => {
  res.send("<h1>This is a MERN Stack Chat</h1>")
})


//Register
const salt = bcrypt.genSaltSync(10);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt)
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//User login
const secret = process.env.SECRET;
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  if (userDoc) {
    const isMatchedPassword = bcrypt.compareSync(password, userDoc.password);
    if (isMatchedPassword) {
      //can login
      jwt.sign({ username, userId: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        //save data in cookie
        res.cookie("token", token).json({
          userId: userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json("wrong credentials");
    }
  } else {
    res.status(400).json("Wrong credentials");
  }
});


//logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});


app.get('/profile', (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, secret, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("no token");
  }
});

//Run Server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});