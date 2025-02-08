import {daily_livescore_po} from "../../../PageObject/danskeSpil/daily_livescore.po"
let po = new daily_livescore_po
let url = null;

describe('Livescore tests on soccer front page', () => {
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
   
  // po.lastMatches = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide"
  // po.ls_lastmatch_container_teampage = ".esm_comp.esm_livescore"

  context('Tests livescore on soccer front page', () => {

    it('C1 - livescore widget exist - soccer', () => {
      cy.visit(url);
      //po.counter = 1
      po.daily_livescore_exists()
    });

    it('C2 - livescore all texts - soccer', () => {
      //cy.visit(url);
      
      po.livescore_all_matches()
    });

    it('C3 - livescore all texts on mobile - soccer', () => {
      cy.viewport(320,1100)
      po.livescore_all_matches_mobile()
      
    });

    it('C4 - live matches on livescore widget - soccer', () => {
      po.counter = 1
      po.livescore_live_matches();
    });

    it('C5 - finished matches on livescore widget - soccer', () => {
      //cy.visit(url);
      po.counter = 1
      po.livescore_finished_matches()
      
    });

    it('C6 - team names with links - soccer', () => {
      cy.visit(url);
      
      po.checkIfTeamNameHasLink()
    });
 

  });

});