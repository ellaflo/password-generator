// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to get password options from user
const getPasswordOptions = () => {
  // Prompt user to input password length
const length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )

  // Validate inputs
  if(isNaN(length) === true){
    alert(`Password length must be provided as a number`);
    return;
  }

  if(length < 10) {
    alert(`Password length must be at least 10 characters`);
    return;
  }

  if(length > 64) {
    alert(`Password length must be less than 65 characters`);
    return;
  }

  // Prompt user for type of charcters to include
  const hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )
  const hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )
  const hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )
  const hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )

  // Validate user selection
  if(!hasLowerCasedCharacters &&
    !hasUpperCasedCharacters &&
    !hasSpecialCharacters && 
    !hasNumericCharacters) {
      alert(`Must select at least one character type`);
      return;
  }

  //Return options as object
  return {
    length,
    hasSpecialCharacters,
    hasUpperCaseCharacters,
    hasLowerCaseCharacters,
    hasNumericCharacters,
    };
    };

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  
  let result = []

  let possibleCharacter = []


  let guaranteedCharacter = []


  if(options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }


  if(options["hasLowerCasedCharacters"]) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }

  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  console.log(possibleCharacter);

  for(let index = 0; index < guaranteedCharacter.length; index++) {
       result.push(guaranteedCharacter[index]);
     }

  for(let index = guaranteedCharacter.length; index < options.length; index++){
    var generated = getRandom(possibleCharacter);
    console.log(generated);
    result.push(generated);
  }

  console.log(result);


  return result.join("")

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);