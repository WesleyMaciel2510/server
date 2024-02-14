import { db } from "./createTable";

export async function createUser(user: {
  Name: string;
  Email: string;
  Password: string;
  AccessLevel: number;
  IsActive: boolean;
}) {
  const insertUser = db.prepare(`
      INSERT INTO users ( Name, Email, Password, AccessLevel, IsActive)
      VALUES (?, ?, ?, ?, ?)
    `);
  const result = insertUser.run(
    user.Name,
    user.Email,
    user.Password,
    user.AccessLevel,
    user.IsActive ? 1 : 0
  );

  console.log("User created successfully with ID:", result.lastInsertRowid);
}
