import {livescore_fixtures_other_sports_po} from "../../../PageObject/danskeSpil/livescore_fixtures.po"
let po = new livescore_fixtures_other_sports_po
let url = null;

describe('livescore fixtures tests on league page - Basketball', () => {
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
  po.sportOption = '.basketball'
  po.scopeHeaderArray = ['1Q', '2Q', '3Q', '4Q', 'S']

  context('Tests livescore fixtures on league page - Basketball', () => {

    it('C1 - livescore fixtures widget exist - Basketball', () => {
      cy.visit(url);
      
      po.livescore_fixtures_exists()
    });

    it('C2 - livescore fixtures all texts - Basketball', () => {
      
      po.livescore_fixtures_all_matches()
    });

    it('C3 - livescore fixtures widget exist on mobile - Basketball', () => {
      cy.viewport(320,1100)
      po.livescore_fixtures_all_matches_mobile()
      
    });

  });

});