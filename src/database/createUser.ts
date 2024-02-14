import { db } from "./createTable";

export async function createUser(user: {
  Name: string;
  UserName: string;
  Password: string;
  Email: string;
  AccessLevel: number;
  IsActive: boolean;
}) {
  console.log("chamou createUser");
  console.log("data received in the server = ", user);
  console.log("user.name = ", user.Name);
  console.log("user.UserName = ", user.UserName);
  const insertUser = db.prepare(`
      INSERT INTO users ( Name, Username, Password, Email, AccessLevel, IsActive)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
  const result = insertUser.run(
    user.Name,
    user.UserName,
    user.Password,
    user.Email,
    user.AccessLevel,
    user.IsActive ? 1 : 0
  );
  console.log("USUÁRIO CRIADO = ", result);

  console.log("User created successfully with ID:", result.lastInsertRowid);
}
