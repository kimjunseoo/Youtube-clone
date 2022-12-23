import express from "express";
import { join, login } from "../controllers/userController";
import { search } from "../controllers/videoController";



// Global Router(Root Router)
const globalRouter = express.Router();

const handleHome = (req, res) => {
  res.send("Home");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;