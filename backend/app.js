import express from "express";
import readmeRoutes from "./routes/readmeRoutes.js";

const app = express();
app.use(express.json())
app.use("/api/readme", readmeRoutes);
export default app;