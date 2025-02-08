// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import the domain-specific language low-level (Cypress custom commands).
import './commonMethods/acceptPopupMessage'
import './commonMethods/clearData'
import './commonMethods/dropDownByClick'
import './commonMethods/dropDownBySelect'
import './commonMethods/dropDownMultiselect'
import './commonMethods/dropDownRegularWithAssert'
import './commonMethods/element'
import './commonMethods/getElement'
import './commonMethods/findElement'
import './commonMethods/findElementMultiple'
import './commonMethods/forceClick'
import './commonMethods/navigateBack'
import './commonMethods/navigateTo'
import './commonMethods/sendKeyboardKey'
import './commonMethods/sendKeys'
import './commonMethods/toUrl'
import './commonMethods/verifyAttributeContainsValue'
import './commonMethods/verifyContainsText'
import './commonMethods/verifyElementNotVisible'
import './commonMethods/verifyHaveText'
import './commonMethods/verifyImageNotBroken'
import './commonMethods/verifyRegex'
import './commonMethods/verifySelectedMultiselectDropDownValues'
import './commonMethods/editNameOfImage'
import './commonMethods/changeStageHeaders'
import './commonMethods/betweenColors'
// Import test methods (Cypress custom commands).
import './testMethods/testMethodParent'
import './testMethods/testMethodChild'
import './commonMethods/lineupsRatings'
import './commonMethods/visualElements'
import './commonMethods/tooltipProperties'
//import 'cypress-iframe';
import './commonMethods/TextIsOneOf'
import './CheckStylesCommands/checkStyles'
import 'cypress-real-events/support';
import './commonMethods/moveAndAssertElement'
import '@4tw/cypress-drag-drop'


// Alternatively you can use CommonJS syntax:
// require('./commands')
//require('@cypress/xpath');
// import '@percy/cypress'
