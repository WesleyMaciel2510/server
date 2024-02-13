import express from "express";
import userRouter from "./routes/users.routes";
import sqlite3 from "better-sqlite3";
import "./database/createTable";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
const db = new sqlite3("data.db");
app.use("/api/users", userRouter);
// Middleware
app.use(express.json());
// Routes
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
