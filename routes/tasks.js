import express from "express";
 const router = express.Router()
//import { createtask } from "../controllers/first";
import createtask from "../controllers/first.js";
router.route("/get").get(createtask)

export default router