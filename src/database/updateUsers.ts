import { db } from "./createTable";

export async function updateUser(
  userId: number,
  newData: {
    Name?: string;
    UserName?: string;
    Password?: string;
    Email?: string;
    AccessLevel?: number;
    IsActive?: boolean;
  }
) {
  console.log(`Updating user with ID ${userId}`);

  const updateStatement = db.prepare(`
      UPDATE users
      SET Name = ?, UserName = ?, Password = ?, Email = ?, AccessLevel = ?, IsActive = ?
      WHERE ID = ?
    `);

  const { Name, UserName, Password, Email, AccessLevel, IsActive } = newData;
  const result = updateStatement.run(
    Name,
    UserName,
    Password,
    Email,
    AccessLevel,
    IsActive ? 1 : 0,
    userId
  );

  console.log(`User with ID ${userId} updated successfully.`);
}
