import {profile_circuit_po} from "../../../PageObject/danskeSpil/profile_circuit.po"
let po = new profile_circuit_po
let url = null;

describe('Profile circuit tests on event page', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
                
    url = 'https://danskespil.enetscores.com/';
    
    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    
    cy.viewport(1700,1100)
  })
  const retryConfig = {
    
    retries: {
      runMode: 2,
      openMode: 1,
    },
  };
   

  context('Tests Profile circuit on event page', () => {

    it('C1 - Profile circuit widget exists', () => {
      cy.visit(url);
      po.profile_circuit_exists();
    });
 
    it('C2 - Profile circuit all the texts', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - Profile circuit all the texts on mobile', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.check_all_texts_mobile();
    });

  });

});