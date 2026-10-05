const readlineSync = require("readline-sync");

let password;
let isValid;

do {
    password = readlineSync.question("Enter a password: ");

    let hasUppercase = false;
    let hasNumber = false;

    for (const character of password) {
        if (character >= "A" && character <= "Z") {
            hasUppercase = true;
        }

        if (character >= "0" && character <= "9") {
            hasNumber = true;
        }
    }

    isValid =
        password.length >= 8 &&
        hasUppercase &&
        hasNumber;

    if (isValid) {
        console.log("Success! Your password meets all the requirements.");
    } else {
        console.log("Your password does not meet the requirements.");
    }

} while (!isValid);
