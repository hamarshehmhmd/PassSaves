const fs = require("fs");
const crypto = require("crypto");

// Prompt the user to enter their username and password
const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

// Generate a random salt
const salt = crypto.randomBytes(16).toString("hex");

// Hash the password using the Argon2 algorithm
const hash = crypto.argon2Hash(password, salt);

// Save the username and encrypted password to a file
const data = {
    username: username,
    salt: salt,
    hash: hash
};
fs.writeFileSync("credentials.txt", JSON.stringify(data));

console.log("Username and password saved to credentials.txt");

try {
    fs.writeFileSync("credentials.txt", JSON.stringify(data));
    console.log("Username and password saved to credentials.txt");
} catch (error) {
    console.error("Error writing to file:", error);
}
