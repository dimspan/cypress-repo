import {livescore_results_other_sports_po} from "../../../PageObject/danskeSpil/livescore_results.po"
let po = new livescore_results_other_sports_po
let url = null;

describe('livescore results tests on league page - Basketball', () => {
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
   
  po.livescoreResultsTab = '.esm_resultater_li'
  po.sportOption = '.basketball'
  po.livescoreResultsWidget = '.wff_widget.wff_widget_FW348BD5470C4DB389.wff_widget_wide'
  po.livescoreResultsMobile = '.wff_widget.wff_widget_FW348BD5470C4DB389.wff_widget_small'
  po.scopeHeaderArray = ['1Q', '2Q', '3Q', '4Q', 'S', 'OT']

  context('Tests livescore results on league page - Basketball', () => {

    it('C1 - livescore results widget exist - Basketball', () => {
      cy.visit(url);
      
      po.livescore_results_exists()
    });

    it('C2 - livescore results all texts - Basketball', () => {
      po.counter = 5
      po.livescore_results_all_matches()
    });

    it('C3 - livescore results widget exist on mobile - Basketball', () => {
      cy.viewport(320,1100)
      po.counter = 5
      po.livescore_results_all_matches_mobile()
      
    });

  });

});