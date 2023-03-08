# Username and Password Hashing

This is a simple Node.js script that prompts the user for their username and password, generates a random salt, and hashes the password using the Argon2 algorithm. The username, salt, and hashed password are then saved to a file in JSON format.

## Prerequisites

- Node.js v10 or higher
- NPM (Node Package Manager)

## Installation

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the command line.

## Usage

1. Navigate to the project directory in the command line.
2. Run `node index.js`.
3. Enter your username and password when prompted.
4. The program will generate a random salt and use the Argon2 algorithm to hash the password.
5. The username, salt, and hashed password will be saved to a file called `credentials.txt`.

## Files

- `index.js`: Contains the code for prompting the user for their username and password, generating a random salt, hashing the password, and saving the data to a file.
- `package.json`: Contains information about the project and its dependencies.
- `README.md`: This file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
