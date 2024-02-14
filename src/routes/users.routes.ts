import express from "express";
import {
  createUser,
  readUsers,
  readUserByID,
  readUserByParam,
  updateUser,
  deleteUser,
  logUserIn,
} from "../database/index";

interface User {
  ID: number;
  Name: string;
  Email: string;
  Password: string;
  AccessLevel: number;
  IsActive: boolean;
}

const userRouter = express.Router();
// ==========================================================
userRouter.get("/search", async (req, res) => {
  try {
    console.log("SEARCH CALLED");
    console.log("DATA RECEIVED = ", req.body);
    //remember to pass only one param at time for the function below
    readUserByParam(req.body);
  } catch (error) {
    console.error("Error reading users:", error);
    res.status(500).send("Internal Server Error");
  }
});

userRouter.get("/login", async (req, res) => {
  try {
    console.log("Query parameters = ", req.query);
    const credentialsObject = JSON.parse(JSON.stringify(req.query));
    console.log("credentialsObject = ", credentialsObject);
    const users = await logUserIn(credentialsObject);
    users ? res.status(200).send(true) : res.status(200).send(false);
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

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
    if (foundUser.length) {
      res.status(200).json(foundUser);
    } else {
      res.status(404).send(`User with ID ${req.params.ID} not found.`);
    }
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
  const index = parseInt(req.params.ID);
  if (parseInt(req.params.ID) > 0) {
    updateUser(index, req.body);
    res.send(`User updated successfully!`);
  } else {
    res.status(404).send(`User with ID ${req.params.ID} not found.`);
  }
});

export default userRouter;
