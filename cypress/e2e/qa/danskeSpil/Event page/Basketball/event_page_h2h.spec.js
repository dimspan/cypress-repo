import {h2h_po} from "../../../PageObject/danskeSpil/h2h.po"
let po = new h2h_po
let url = null;

describe('h2h tests on event page - Basketball', () => {
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
   
  po.homeTeamHeaderText = 'Seneste Philadelphia 76ers'
  po.awayTeamHeaderText = 'Seneste Washington Wizards'
  po.homeTabHomeTeamText = "Seneste H2H Philadelphia 76ers"
  po.awayTabAwayTeamText = 'Seneste H2H Washington Wizards'

  context('Tests h2h on event page - Basketball', () => {

    it('C1 - h2h widget exist - Basketball', () => {
      cy.visit('https://danskespil.enetscores.com/h2h/4302002');
      
      po.h2h_exists()
    });

    it('C2 - h2h all texts - Basketball', () => {
      
      po.h2h_all_matches()
    });

    it('C3 - h2h checking tabs - Basketball', () => {
      //cy.viewport(320,1100)
      po.h2h_home_away_tabs()
      
    });

    it('C4 - h2h all texts on mobile - Basketball', () => {
      cy.viewport(320,1100)
      po.h2h_all_matches_mobile()
      
    });

  });

});