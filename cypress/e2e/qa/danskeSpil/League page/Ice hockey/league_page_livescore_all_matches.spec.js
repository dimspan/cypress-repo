import {livescore_results_other_sports_po} from "../../../PageObject/danskeSpil/livescore_results.po"
let po = new livescore_results_other_sports_po
let url = null;

describe('livescore results tests on league page - Ice hockey', () => {
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
  po.sportOption = '.icehockey'
  po.livescoreResultsWidget = '.wff_widget.wff_widget_FW348BD5470C4DB389.wff_widget_wide'
  po.livescoreResultsMobile = '.wff_widget.wff_widget_FW348BD5470C4DB389.wff_widget_small'
  po.counter = 5

  context('Tests livescore all matches on league page - Ice hockey', () => {

    it('C1 - livescore all matches widget exist - Ice hockey', () => {
      cy.visit(url);
      
      po.livescore_results_exists()
    });

    it('C2 - livescore all matches all texts - Ice hockey', () => {
      
      po.livescore_results_all_matches()
    });

    it('C3 - livescore all matches widget exist on mobile - Ice hockey', () => {
      cy.viewport(320,1100)
      po.livescore_results_all_matches_mobile()
      
    });

  });

});