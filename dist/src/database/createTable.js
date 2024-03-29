import sqlite3 from "better-sqlite3";
export const db = new sqlite3("data.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Email TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL,
    AccessLevel INTEGER NOT NULL,
    IsActive INTEGER NOT NULL
  );
`);
console.log("Table created successfully.");
