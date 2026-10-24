// import express from "express";
// import cors from "cors";

// import readmeRoutes from "./routes/readmeRoutes.js";

// const app = express();

// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://gemini-readme-generator.onrender.com",
//   ],
// }));
// app.use(express.json());


// app.use("/api/readme", readmeRoutes);

// export default app;

import express from "express";
import cors from "cors";
import readmeRoutes from "./routes/readmeRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.use("/api/readme", readmeRoutes);

export default app;