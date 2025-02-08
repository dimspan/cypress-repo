

//Define variables used from the functions. Must match the file name w/out the extension.
var functionName = "testMethodParent";

// Create a Cypress parent custom command. They always begin a new chain of commands and and ignore previously yielded subjects.
Cypress.Commands.add(
functionName,   // Gives name to the command
function (testElement) {    // Takes any arguments/objects/etc you want to pass to the command.
try {   // Create a try-catch statement. If the function fails - we will receive an error message.
  
    cy.get(testElement).eq(0)   // Gets the first instance of the chosen element on the page.

} catch (err) {     // Catch and show any error that may occur.
  cy.log(`----------ERROR! ${err}`);
  console.log(
    "%c" + `----------ERROR! ${err}`,
    "color: #ff0000; font-size: 14px; font-weight: bold;"
  );
}
}
);

// Note: Commands created like this (as separate files) are specific, global actions that can be re-used in tests and page object commands.