# PassSaves

This implementation uses the argon2Hash function from the crypto module to hash the password using the Argon2 algorithm, which is considered to be more secure than PBKDF2. The program also generates a random salt and stores it along with the hash in the file.

It is important to handle any errors that may occur when reading or writing to the file. You can do this by wrapping the fs.writeFileSync function in a try-catch block:
try {
  fs.writeFileSync("credentials.txt", JSON.stringify(data));
  console.log("Username and password saved to credentials.txt");
} catch (error) {
  console.error("Error writing to file:", error);
}

(Code is already added inside the file)


This will catch any errors that occur when writing to the file and log them to the console.
