import mongoose, { Schema } from "mongoose";

const membersSchema = new Schema({
    name: String,
    surname: String,
    university: String,
    course: Number,
    field: String,
});

export const MembersModel = mongoose.model("members", membersSchema);