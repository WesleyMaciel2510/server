import { db } from "./createTable";

export async function deleteUser(userId: number) {
  console.log(`Deleting user with ID ${userId}`);

  const deleteStatement = db.prepare(`
      DELETE FROM users
      WHERE ID = ?
    `);

  const result = deleteStatement.run(userId);

  console.log(`User with ID ${userId} deleted successfully.`);
}
