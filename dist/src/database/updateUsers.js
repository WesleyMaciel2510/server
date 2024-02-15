import { db } from "./createTable";
export async function updateUser(userId, newData) {
    console.log(`Updating user with ID ${userId}`);
    console.log("newData RECEIVED = ", newData);
    // Initialize an empty array to store the SET clauses
    const setClauses = [];
    // Check each field in newData and add it to the SET clauses if it's provided
    if (newData.Name !== undefined)
        setClauses.push("Name = ?");
    if (newData.Email !== undefined)
        setClauses.push("Email = ?");
    if (newData.Password !== undefined)
        setClauses.push("Password = ?");
    if (newData.AccessLevel !== undefined)
        setClauses.push("AccessLevel = ?");
    if (newData.IsActive !== undefined)
        setClauses.push("IsActive = ?");
    // Construct the dynamic SET clause
    const setClause = setClauses.join(", ");
    console.log("setClause = ", setClause);
    // Prepare the UPDATE statement
    const updateStatement = db.prepare(`
    UPDATE users
    SET ${setClause}
    WHERE ID = ?
  `);
    // Clone newData object to avoid mutating the original object
    const updatedData = { ...newData };
    // Transform boolean from 'IsActive' to number 0 or 1
    if (updatedData.IsActive !== undefined) {
        updatedData.IsActive = updatedData.IsActive ? 1 : 0;
    }
    // Extract the values from updatedData
    const values = Object.values(updatedData);
    console.log("values = ", values);
    try {
        // Execute the update with userId as a separate argument
        const result = updateStatement.run(...values, userId);
        console.log("result = ", result);
        console.log(`User with ID ${userId} updated successfully.`);
    }
    catch (error) {
        console.error(`Error updating the User with ID ${userId}: ${error}`);
    }
}
