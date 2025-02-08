import {cycling_rankings_event_po} from "../../../PageObject/danskeSpil/rankings.po"
let po = new cycling_rankings_event_po
let url = null;

describe('[CL]Rankings male on event page', () => {
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
   
  po.sportOption = '.cycling'
  po.rankingsAtpButton = '.esm_ranking_li'

  context('[CL]Male rankings on event page', () => {

    it('[CL][C1]Rankings widget exists on event page', () => {
      cy.visit(url);
      po.rankings_exists();
    });
 
    it('[CL][C2]Male rankings all the texts on event page', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('[CL][C3]Male rankings all the texts on mobile on event page', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.check_all_texts_mobile();
    });

    it('[CL][C4]Male check dropdowns on event page', () => {
      // cy.visit(url);
      po.check_search_country_dropdown();
    });

  });

});