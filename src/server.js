import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import usersRouter from "./routers/userRouter";


const app = express();

const PORT = 4000;

const logger = morgan("dev");

app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", usersRouter);



const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);