import { Router } from "express";
import { createEvent, deleteEventById, getAllEvents, getByIdEvent, updateEventByID } from "../Controller/EventsController.js";

export const eventsRouter = Router();

eventsRouter.get("/", getAllEvents)
    .get("/:id", getByIdEvent)
    .post("/", createEvent)
    .put("/:id", updateEventByID)
    .delete("/:id", deleteEventById)