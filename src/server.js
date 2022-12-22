import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);

// MiddleWare
const urlLoggerMiddleWare = (req, res, next) => {
  console.log(`In URL : ${req.url}`);
  next();
}

const timeLoggerMiddleWare = (req, res, next) => {
  const reqTime = new Date();
  console.log(`Year : ${reqTime.getFullYear()} /  Month : ${reqTime.getMonth() +1} / Date : ${reqTime.getDate()}`);
  next();
}

const secLoggerMiddleWare = (req, res, next) => {

}

const prtLoggerMiddleWare = (req, res, next) => {

}

// Handle Request

const handleHome = (req, res, next) => {
  return res.send("<h1> This page is home </h1>");
};

const handleAbout = (req, res) => {
  return res.send("<h1> This page is /about </h1>");
};

const handleContact = (req, res) => {
  return res.send("<h1> This page is /contact </h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1> This page is /login </h1>");
};

app.use(morgan("dev"));
app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);
