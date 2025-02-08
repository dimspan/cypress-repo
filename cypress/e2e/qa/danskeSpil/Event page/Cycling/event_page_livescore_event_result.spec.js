import {cycling_event_results_po} from "../../../PageObject/danskeSpil/daily_livescore.po"
let po = new cycling_event_results_po
let url = null;

describe('[CL]Livescore event result on event page', () => {
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

  context('[CL]Event result Livescore on event page', () => {

    it('[CL][C1]event result in event page exists', () => {
      cy.visit(url);
      po. event_result_livescore_exists();
    });
 
    it('[CL][C2]Event result all the texts in event page', () => {
      // cy.visit(url);
      po.livescore_event_result();
    });

    it('[CL][C3]Event result all the texts in event page on mobile', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.livescore_event_result_mobile();
    });

    it('[CL][C4]check if event result names have links', () => {
      // cy.visit(url);
      po.check_dropdowns();
    });

  });

});