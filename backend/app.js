import express from "express";
import cors from "cors";

import readmeRoutes from "./routes/readmeRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5174",
}));

app.use(express.json());

app.get("/api/readme/test", (req, res) => {
  res.send("Backend is working!");
});
app.use("/api/readme", readmeRoutes);

export default app;
