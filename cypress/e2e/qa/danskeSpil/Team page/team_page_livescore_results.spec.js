import {team_page_livescore_results_po} from "../../PageObject/danskeSpil/livescore_results.po"
let po = new team_page_livescore_results_po
let url = null;

describe('livescore results tests on team page - Soccer', () => {
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
   

  context('Tests livescore results on team page - Soccer', () => {

    it('C1 - livescore results widget exist - soccer', () => {
      cy.visit(url);
      
      po.livescore_results_exists()
    });

    it('C2 - livescore results all texts - soccer', () => {
      
      po.livescore_results_all_matches()
    });

    it('C3 - livescore results widget exist on mobile - soccer', () => {
      cy.viewport(320,1100)
      po.livescore_results_all_matches_mobile()
      
    });

  });

});