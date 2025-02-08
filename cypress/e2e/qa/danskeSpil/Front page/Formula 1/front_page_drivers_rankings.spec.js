import {drivers_rankings_f1_po} from "../../../PageObject/danskeSpil/rankings.po"
let po = new drivers_rankings_f1_po
let url = null;

describe('[F1]Drivers rankings tests on front page', () => {
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
   

  context('[F1]Tests Drivers Rankings on front page', () => {

    it('[F1][C1] Drivers Rankings  widget exists', () => {
      cy.visit(url);
      po.drivers_rankings_f1_exists();
    });
 
    it('[F1][C2] Drivers Rankings all the texts', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('[F1][C3] Drivers Rankings all the texts on mobile', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.check_all_texts_mobile();
    });

    it('[F1][C4] check the drivers season dropdown', () => {
      // cy.visit(url);
      po.check_dropdowns();
    });

    it('[F1][C5] check the drivers tournament flag tooltips', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

  });

});