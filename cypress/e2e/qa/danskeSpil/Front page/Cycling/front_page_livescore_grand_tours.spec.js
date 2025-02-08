import {cycling_grand_tours_livescore_po} from "../../../PageObject/danskeSpil/daily_livescore.po"
let po = new cycling_grand_tours_livescore_po
let url = null;

describe('[CL]Livescore grand tours on front page', () => {
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
    cy.viewport(1000,1000)
  })
  const retryConfig = {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  };

  context('[CL]Grand tours in livescore on front page', () => {

    it('[CL][C1]Grand tours in livescore exists', () => {
      cy.visit(url);
      cy.window().then((win) => {
        // Log dimensions to the console
        console.log(`Window dimensions: ${win.innerWidth} x ${win.innerHeight}`);
        cy.log(`Window dimensions: ${win.innerWidth} x ${win.innerHeight}`);

      });
      po. grand_tours_livescore_exists();
    });
 
    it('[CL][C2]Grand tours all the texts', () => {
      // cy.visit(url);
      po.livescore_grand_tours();
    });

    it('[CL][C3]Grand tours all the texts on mobile', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.livescore_grand_tours_mobile();
    });

    it('[CL][C4]check if grand tours names have links', () => {
      // cy.visit(url);
      po.check_if_event_name_has_link();
    });

  });

});