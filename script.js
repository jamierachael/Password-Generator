// Start Psuedo code
// The user will be prompted to choose from the following password criteria: 8 and 128 characters
// The user will recieve a confirm for: 
// Password containing special characters, numbers, and uppercase
// Either 4 variables individual ones, or 3 with toLowerCase to Uppercase conversion
// This will need to randomly generate a selection or randomly select array data, so math.random and math.floor will need to be used.     
// The application should validate user input and ensure that at least one character type is selected.
// Solution: If, else if statement (similar to car input)
// Problem: Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
// Solution: setAttribute
// Problem: As a bonus, the user should also have the option to click a button to copy the password to their clipboard.
// While loop?           
// Solution: Event listener?
// Use appendchild lesson from today to add password to textarea 

// Start working code
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// Start function to generate password
function generatePassword() {
    // Asks for user input

    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    console.log(enter);

    if (!enter) {
        alert("Needs a value!");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
    // Start if statement that uses user input prompts to determine choices

    // Else if for 4 positive options
    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        // converts letters to uppercase 
        toUpper = function (x) {
            return x.toUpperCase();
        };
        // creates a variable for uppercase conversion
        alpha2 = alpha.map(toUpper);
        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2)
    }
    // Else if for 4 negative options
    else if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choice a criteria!");
    };


    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").value = ps;
    console.log(ps);
}
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

        // test 

        // Try this instead of generate password function: 

        // var generate = document.querySelector("#generate");
        // generate.addEventListener("click", function () {
        //     generatePassword();
        // });

        // function generatePassword() {
        //     generate.textContent = value + ps;
        // };
        // This puts the password value into the textbox
