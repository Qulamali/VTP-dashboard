import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { eventsRouter } from "./src/Routes/EventsRoutes.js";
import { membersRouter } from "./src/Routes/MembersRoutes.js";
import { authRoute } from "./src/Routes/AuthRoutes.js";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/events", eventsRouter);
app.use("/members", membersRouter);
app.use("/login", authRoute);

mongoose
    .connect(process.env.KEY)
    .then(() => console.log("Connected!"))
    .catch((error) => console.log(error.message));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});