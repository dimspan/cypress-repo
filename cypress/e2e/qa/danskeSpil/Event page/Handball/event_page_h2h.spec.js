import {h2h_po} from "../../../PageObject/danskeSpil/h2h.po"
let po = new h2h_po
let url = null;

describe('h2h tests on event page - Handball', () => {
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
   
  po.homeTeamHeaderText = 'Seneste GOG'
  po.awayTeamHeaderText = 'Seneste SønderjyskE'
  po.homeTabHomeTeamText = "Seneste H2H GOG"
  po.awayTabAwayTeamText = 'Seneste H2H SønderjyskE'

  context('Tests h2h on event page - Handball', () => {

    it('C1 - h2h widget exist - Handball', () => {
      cy.visit('https://danskespil.enetscores.com/h2h/4199961');
      
      po.h2h_exists()
    });

    it('C2 - h2h all texts - Handball', () => {
      
      po.h2h_all_matches()
    });

    it('C3 - h2h checking tabs - Handball', () => {
      //cy.viewport(320,1100)
      po.h2h_home_away_tabs()
      
    });

    it('C4 - h2h all texts on mobile - Handball', () => {
      cy.viewport(320,1100)
      po.h2h_all_matches_mobile()
      
    });

  });

});