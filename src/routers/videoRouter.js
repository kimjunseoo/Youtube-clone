import express from "express";
import { deleteVideo, watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController"

// Video Router
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id/edit", getEdit);
videoRouter.post("/:id/edit", postEdit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);

export default videoRouter;