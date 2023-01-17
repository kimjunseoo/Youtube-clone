import express from "express";
import { deleteVideo, watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController"
import { uploadVideo, videoUpload } from "../middlewares";

// Video Router
const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.get("/:id([0-9a-f]{24})/edit", getEdit);
videoRouter.post("/:id([0-9a-f]{24})/edit", postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", videoUpload.single("video"),postUpload);

export default videoRouter;