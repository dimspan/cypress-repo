import {extended_stats_team_po} from "../../../PageObject/danskeSpil/extended_stats_team.po"
let po = new extended_stats_team_po
let url = null;

describe('Extended stats - team tests on league page - Soccer', () => {
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
   

  context('Tests extended stats for team on league page - Soccer', () => {

    it('C1 - Extended stats widget exists - team - Soccer', () => {
      cy.visit(url);
      po.extended_stats_exists();
    });
 
    it('C2 - all the texts - team - Soccer', () => {
      //cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - all the texts on mobile - team - Soccer', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - the tooltips texts - team - Soccer', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    it('C5 - dropdowns - team - Soccer', () => {
      // cy.visit(url);
      po.check_dropdowns();
    });

  });

});