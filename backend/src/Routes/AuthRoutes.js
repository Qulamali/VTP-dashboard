import express from "express"
import { loginUser } from "../Controller/AuthController.js"
export const authRoute = express.Router()


authRoute.post('/', loginUser)
