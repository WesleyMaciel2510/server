import { db } from "./createTable";
export async function logUserIn(credentials) {
    console.log("called logUserIn");
    console.log("credentials = ", credentials);
    const email = Object.values(credentials)[0];
    const password = Object.values(credentials)[1];
    console.log("email = ", email, "password = ", password);
    const query = db.prepare("SELECT * FROM users WHERE Email = ? AND Password = ?");
    // Execute the query and check if a user with the given credentials exists
    const userFound = query.get(email, password);
    if (userFound) {
        console.log("User found:", userFound);
        return true;
    }
    else {
        console.log("User not found or invalid credentials.");
        return false;
    }
}
