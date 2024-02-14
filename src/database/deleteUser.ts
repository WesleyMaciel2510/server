import { db } from "./createTable";

export async function deleteUser(userId: number) {
  console.log(`Deleting user with ID ${userId}`);

  try {
    const deleteStatement = db.prepare(`
      DELETE FROM users
      WHERE ID = ?
    `);

    const result = deleteStatement.run(userId);

    if (result.changes === 0) {
      console.log(`User with ID ${userId} does not exist.`);
      throw new Error(`User with ID ${userId} does not exist.`);
    }
    // Reset the auto-increment counter for the users table
    db.exec("DELETE FROM sqlite_sequence WHERE name = 'users'");
    console.log(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
