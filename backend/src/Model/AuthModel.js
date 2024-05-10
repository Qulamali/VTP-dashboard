import mongoose, { Schema } from "mongoose";

const authSchema = new Schema({
    email: String,
    password: String,
});

export const AuthModel = mongoose.model("auth", authSchema);