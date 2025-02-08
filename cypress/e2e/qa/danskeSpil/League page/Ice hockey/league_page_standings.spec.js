import {standings_other_sports_po} from "../../../PageObject/danskeSpil/standings.po"
let po = new standings_other_sports_po
let url = null;

describe('Standings tests on league page - Ice hockey', () => {
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

  po.leagueNum = 3

  context('Tests standings on league page - Ice hockey', () => {

    it('C1 - Standings widget exists - Ice hockey', () => {
      cy.visit(url);
      po.standings_exists();
    });
 
    it('C2 - check all the texts - Ice hockey', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - check all the texts on mobile - Ice hockey', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - check the tooltips texts - Ice hockey', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    // it('C5 - event info pop-up on form icons - Ice hockey', () => {
    //   // cy.visit(url);
    //   po.check_form_popup();
    // });

    it('C6 - check dropdowns - Ice hockey', () => {
      // cy.visit(url);
      po.check_dropdowns();
    });

  });

});