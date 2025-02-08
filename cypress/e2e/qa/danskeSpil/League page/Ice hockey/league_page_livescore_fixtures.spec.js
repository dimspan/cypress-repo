import {livescore_fixtures_other_sports_po} from "../../../PageObject/danskeSpil/livescore_fixtures.po"
let po = new livescore_fixtures_other_sports_po
let url = null;

describe('livescore fixtures tests on league page - Ice hockey', () => {
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

  context('Tests livescore fixtures on league page - Ice hockey', () => {

    it('C1 - livescore fixtures widget exist - Ice hockey', () => {
      cy.visit(url);
      
      po.livescore_fixtures_exists()
    });

    it('C2 - livescore fixtures all texts - Ice hockey', () => {
      
      po.livescore_fixtures_all_matches()
    });

    it('C3 - livescore fixtures widget exist on mobile - Ice hockey', () => {
      cy.viewport(320,1100)
      po.livescore_fixtures_all_matches_mobile()
      
    });

  });

});