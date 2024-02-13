import { db } from "./createTable";

export async function readUsers() {
  console.log("Reading users...");

  const users = db.prepare("SELECT * FROM users").all();

  console.log("Users:", users);
  return users;
}
