# homework-3-password-generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password:
1. WHEN I click the button to generate a password,
    THEN I am presented with a series of prompts for password criteria.
2. WHEN prompted for password criteria,
    THEN I select which criteria to include in the password.
3. WHEN prompted for the length of the password, 
    THEN I choose a length of at least 8 characters and no more than 128 characters.
4. WHEN prompted for character types to include in the password,
    THEN I choose lowercase, uppercase, numeric, and/or special characters.
5. WHEN I answer each prompt,
    THEN my input should be validated and at least one character type should be selected.
6. WHEN all prompts are answered,
    THEN a password is generated that matches the selected criteria.
7. WHEN the password is generated,
    THEN the password is either displayed in an alert or written to the page.
```
Note: I altered the HTML to present a more practical user interface, wherein, instead of clicking “OK” or “Cancel” in a series of window confirm methods to determine what type of components they want in a password, users can uncheck a checkbox if they do not wish to include special characters (symbols), numbers, uppercase letters, or lowercase letters in their randomly generated password. They can also type, use the arrows, or use the slidebar to indicate how long they want their password to be.

```

## Mock-Up

The following images showcase the web application's appearance and functionality:
images/screenshot_alert.png
images/screenshot/png
