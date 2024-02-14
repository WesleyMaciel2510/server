import { db } from "./createTable";

export async function readUserByID(userId: number) {
  console.log("Reading users...");

  const query = db.prepare("SELECT * FROM users WHERE ID = ?");
  const users = query.all(userId);

  console.log("Users:", users);
  return users;
}
