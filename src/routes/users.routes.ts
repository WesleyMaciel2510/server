import express from "express";
//import users from "../mock/users";
import {
  createUser,
  readUsers,
  readUserByID,
  updateUser,
  deleteUser,
} from "../database/index";

interface User {
  ID: number;
  Name: string;
  UserName: string;
  Password: string;
  Email: string;
  AccessLevel: number;
  IsActive: boolean;
}

const userRouter = express.Router();
// ==========================================================
userRouter.get("/", async (req, res) => {
  try {
    const users = await readUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error reading users:", error);
    res.status(500).send("Internal Server Error");
  }
});

userRouter.get("/:ID", async (req, res) => {
  if (parseInt(req.params.ID) > 0) {
    const foundUser = await readUserByID(parseInt(req.params.ID));
    res.status(200).json(foundUser);
  } else {
    res.status(404).send(`User with ID ${req.params.ID} not found.`);
  }
});
// ==========================================================
userRouter.post("/", (req, res) => {
  console.log("req.body = ", req.body);

  console.log("POST CALLED");
  console.log("req.body before send to sqlite = ", req.body);
  createUser(req.body);
  //users.push(req.body);
  res.status(201).send("User registered successfully!");
});
// ==========================================================
userRouter.delete("/:ID", (req, res) => {
  console.log("DELETE CALLED");
  if (parseInt(req.params.ID) > 0) {
    deleteUser(parseInt(req.params.ID));
    res.send(`User deleted successfully!`);
  } else {
    res.status(404).send(`User with ID ${req.params.ID} not found.`);
  }
});
// ==========================================================
userRouter.put("/:ID", (req, res) => {
  console.log("UPDATE CALLED");

  res.send(`User updated successfully!`);
});

export default userRouter;
