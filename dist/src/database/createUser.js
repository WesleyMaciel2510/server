import { db } from "./createTable";
export function createUser(user) {
    console.log("chamou createUser");
    console.log("data received in the server = ", user);
    const insertUser = db.prepare(`
      INSERT INTO users ( Name, Username, Password, Email, AccessLevel, IsActive)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const result = insertUser.run(user.name, user.username, user.password, user.email, user.accessLevel, user.isActive ? 1 : 0);
    console.log("User created successfully with ID:", result.lastInsertRowid);
}
