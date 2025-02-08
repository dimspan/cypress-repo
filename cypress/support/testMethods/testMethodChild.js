

//Define variables used from the functions. Must match the file name w/out the extension.
var functionName = "testMethodChild";

// Create a Cypress child custom command. They are always chained off of a parent or child command. The previous subject will be yielded to the callback function.
Cypress.Commands.add(
functionName,
{ prevSubject: 'element' },   // Defines what the previous subject is. element: requires the previous subject be a DOM element
function (subject, ariaLabelToCheck) {   // Takes any arguments/objects/etc you want to pass to the command. subject is mandatory and takes element from parent.
try {   // Create a try-catch statement. If the function fails - we will receive an error message.
  cy.wrap(subject).should('have.attr', 'aria-label').and('be.equal', `${ariaLabelToCheck}`)

        // cy.wrap(subject) is needed as the rest are child commands and need a parent.
        // .should('have.attr', 'aria-label') checks if the element has an aria-label attribute.
        // .and('be.equal', `${ariaLabelToCheck}`) adds to the above assertion and checks the aria label's value = the one we've passed in the test.

} catch (err) {
  // Catch and show any error that may occur.
  cy.log(`----------ERROR! ${err}`);
  console.log(
    "%c" + `----------ERROR! ${err}`,
    "color: #ff0000; font-size: 14px; font-weight: bold;"
  );
}
}
);

// Note: Commands created like this (as separate files) are specific, global actions that can be re-used in tests and page object commands.