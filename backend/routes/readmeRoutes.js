import express from "express";
import { createReadme } from "../controllers/readmeControllers.js";
const router = express.Router()

router.post("/generate",createReadme)

export default router;
