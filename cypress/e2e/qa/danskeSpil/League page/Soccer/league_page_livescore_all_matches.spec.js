import {league_page_livescore_results_po} from "../../../PageObject/danskeSpil/livescore_results.po"
let po = new league_page_livescore_results_po
let url = null;

describe('livescore results tests on league page - Soccer', () => {
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
   
  po.livescoreResultsTab = '.esm_alle_kampe_li'

  context('Tests livescore all matches on league page - Soccer', () => {

    it('C1 - livescore all matches widget exist - soccer', () => {
      cy.visit(url);
      
      po.livescore_results_exists()
    });

    it('C2 - livescore all matches all texts - soccer', () => {
      
      po.livescore_results_all_matches()
    });

    it('C3 - livescore all matches widget exist on mobile - soccer', () => {
      cy.viewport(320,1100)
      po.livescore_results_all_matches_mobile()
      
    });

  });

});