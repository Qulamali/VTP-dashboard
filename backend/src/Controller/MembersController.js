import { MembersModel } from "../Model/MembersModel.js";

export const getAllMembers = async (req, res) => {
    try {
        const members = await MembersModel.find({});
        res.status(200).json(members);
    } catch (error) {
        console.log(error.message);
    }
};

export const getByIdMember = async (req, res) => {
    const { id } = req.params;
    try {
        const member = await MembersModel.findById(id);
        res.send(member);
    } catch (error) {
        console.log(error.message);
    }
};

export const createMember = async (req, res) => {
    const { name, surname, university, course, field, } = req.body;
    try {
        const newMember = new MembersModel({ name, surname, university, course, field, });
        await newMember.save();
        res.send("Member Added");
    } catch (error) {
        console.log(error.message);
    }
};

export const updateMemberByID = async (req, res) => {
    const { id } = req.params;
    const { name, surname, university, course, field, } = req.body;
    try {
        const member = await MembersModel.findByIdAndUpdate(id, { name, surname, university, course, field, });
        res.send(member);
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteMemberById = async (req, res) => {
    const { id } = req.params;
    try {
        const member = await MembersModel.findByIdAndDelete(id);
        res.send(member);
    } catch (error) {
        console.log(error.message);
    }
};