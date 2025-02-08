import {stillinger_po} from "../../../PageObject/danskeSpil/stillinger.po"
let po = new stillinger_po
let url = null;

describe('Stillinger tests on front page - Soccer', () => {
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

  context('PC view tests stillinger on front page - Soccer', () => {

    // it('C1 - Check livescore widget exist', () => {
    //   cy.visit(url);
    //   // cy.scrollTo('bottom');
    //   // cy.wait(5000)
    //   // cy.scrollToBottomWithLazyLoading();
    //   po.livescoreCheckSoccerMatches()
    // });

    it('C1 - Check Stillinger tab - Soccer', () => {
      cy.visit(url);
      po.checkStillingerTopLeagues()
      po.checkStillingerAllStages()
      po.checkIfStageNameHasLinks()
    });
 

  });

});