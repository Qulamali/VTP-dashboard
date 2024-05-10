import { Router } from "express";
import { createMember, deleteMemberById, getAllMembers, getByIdMember, updateMemberByID } from "../Controller/MembersController.js";

export const membersRouter = Router();

membersRouter.get("/", getAllMembers)
    .get("/:id", getByIdMember)
    .post("/", createMember)
    .put("/:id", updateMemberByID)
    .delete("/:id", deleteMemberById)