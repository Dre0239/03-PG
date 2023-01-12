# 03-PG

## Generate Random Passwords:

## Description:

The javascript application code will run in the web browser and generate a random password based on the criteria the employees have selected.

Here is an image showing the web application's appearance and functionality:

## The Application:

- Displays a red button to "Generate Password"

<img src="./assets/password generator.jpg" alt="pic of app" title="Password Generator" />

## User Story:

- Employee with access to sensitive data need a randomly generate password that meets certain criteria so createing a strong password that provides greater security.

The employees will be prompted to choose from the following password criteria:

- Length (must be between 8 and 128 characters)

- Character type:

- The password can include special characters. Click link below

  (https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

- Numeric characters

- Lowercase characters

- Uppercase characters

The javascript application should validate user input and ensure that at least one character type is selected.

## Business Context:

- Companies that handle large amounts of sensitive data, weak passwords can pose a real security threat.

## Insider threats come in three flavors:

- Social Engineering
- Phishing
- Compromised users
- Malicious users
- Careless users

## Acceptance Criteria

The employee is presented with a series of prompts for password criteria. Each employee can select which criteria to include in the password. When prompted for the password length, the employee chooses at least eight characters and no more than 128 characters and will be asked for character types to include in the password.

If the employees confirm whether or not to include lowercase, uppercase, numeric, or unique characters, the input should be validated, and at least one character type should be selected.
