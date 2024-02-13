import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./routes/users.routes";
import ip from "ip";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(PORT, () => {
  const ipAddresses = ip.address();
  console.log(`Server listening on: http://${ipAddresses}:${PORT}`);
});
