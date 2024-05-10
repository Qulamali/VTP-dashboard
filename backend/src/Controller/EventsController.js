import { EventsModel } from "../Model/EventsModel.js";

export const getAllEvents = async (req, res) => {
    try {
        const events = await EventsModel.find({});
        res.status(200).json(events);
    } catch (error) {
        console.log(error.message);
    }
};

export const getByIdEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await EventsModel.findById(id);
        res.send(event);
    } catch (error) {
        console.log(error.message);
    }
};

export const createEvent = async (req, res) => {
    const {day,hour,name,mentor} = req.body;
    try {
        const newEvent = new EventsModel({day,hour,name,mentor});
        await newEvent.save();
        res.send("Event Added");
    } catch (error) {
        console.log(error.message);
    }
};

export const updateEventByID = async (req, res) => {
    const { id } = req.params;
    const {day,hour,name,mentor} = req.body;
    try {
        const event = await EventsModel.findByIdAndUpdate(id, {day,hour,name,mentor});
        res.send(event);
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await EventsModel.findByIdAndDelete(id);
        res.send(event);
    } catch (error) {
        console.log(error.message);
    }
};