import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { AuthModel } from "../Model/AuthModel.js";

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).send({ error: "Fill in all fields" })
        }
        const newEmail = email.toLowerCase()
        const user = await AuthModel.findOne({ email: newEmail })
        if (!user) {
            return res.status(401).send({ error: "Invalid credentials" })
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(401).send({ error: "Invalid credentials" })
        }
        const { _id: id, name } = user
        const token = jwt.sign({ role: user.role, email: user.newEmail, _id: user._id, name }, process.env.JWT_KEY)
        res.status(200).json(token);
    } catch (error) {
        return res.status(500).json({ error: "User login failed" })
    }
}

