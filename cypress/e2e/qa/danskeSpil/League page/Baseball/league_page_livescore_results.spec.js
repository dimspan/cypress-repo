import {livescore_results_other_sports_po} from "../../../PageObject/danskeSpil/livescore_results.po"
let po = new livescore_results_other_sports_po
let url = null;

describe('livescore results tests on league page - Baseball', () => {
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
  po.sportOption = '.baseball'
  po.livescoreResultsWidget = '.wff_widget.wff_widget_FW348BD5470C4DB389.wff_widget_wide'
  po.livescoreResultsMobile = '.wff_widget.wff_widget_FW348BD5470C4DB389.wff_widget_small'
  po.leagueNum = 2
  po.scopeHeaderArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'H', 'Err', 'S']

  context('PC view tests livescore results on league page - Baseball', () => {

    it('C1 - livescore results widget exist - Baseball', () => {
      cy.visit(url);
      
      po.livescore_results_exists()
    });

    it('C2 - livescore results all texts - Baseball', () => {
      
      po.livescore_results_all_matches()
    });

    it('C3 - livescore results widget exist on mobile - Baseball', () => {
      cy.viewport(320,1100)
      po.livescore_results_all_matches_mobile()
      
    });

  });

});