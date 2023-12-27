function validatePassword(password) {
  // Define a regular expression for password validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  // Test the password against the regular expression
  const isValid = passwordRegex.test(password);

  // Return the validation result
  return isValid;
}
const password = "MyP@ssw0rd";
if (validatePassword(password)) {
  console.log("Password is valid");
} else {
  console.log("Password is invalid");
}
