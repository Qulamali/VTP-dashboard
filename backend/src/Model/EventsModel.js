import mongoose, { Schema } from "mongoose";

const eventsSchema = new Schema({
    day: String,
    hour: Number,
    name: String,
    mentor: String,
});

export const EventsModel = mongoose.model("events", eventsSchema);