import { db } from "./createTable";

export async function logUserIn(credentials: object) {
  console.log("called logUserIn");
  console.log("credentials = ", credentials);
  const email = Object.values(credentials)[0];
  const password = Object.values(credentials)[1];
  console.log("email = ", email, "password = ", password);

  const query = db.prepare(
    "SELECT * FROM users WHERE Email = ? AND Password = ?"
  );

  //Execute the query with provided email and password
  const userFound = await query.get(email, password);

  console.log("User Found:", userFound);
  return true;
}
