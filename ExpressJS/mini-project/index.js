import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import publicRoutes from "./routes/public.routes.js";
import privateRoutes from "./routes/private.routes.js";
import { logMiddleware } from "./middlewares/log.middleware.js";

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}

// Global Middleware
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to logger api");
});

app.use("/api/v1/public", publicRoutes);
app.use("/api/v1/private", privateRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
