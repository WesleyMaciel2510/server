import { db } from "./createTable";

export async function readUserByParam(param: any) {
  console.log("Reading users...");
  console.log("param received = ", param);

  const property = Object.keys(param)[0];
  console.log("property = ", property);
  const value = param[property];
  console.log("value = ", value);

  const query = db.prepare("SELECT * FROM users WHERE ? = ?");
  const userFound = query.all(property, value);

  console.log("User Found:", userFound);
  return userFound;
}
