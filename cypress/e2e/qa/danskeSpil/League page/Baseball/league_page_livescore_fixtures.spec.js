import {livescore_fixtures_other_sports_po} from "../../../PageObject/danskeSpil/livescore_fixtures.po"
let po = new livescore_fixtures_other_sports_po
let url = null;

describe('livescore fixtures tests on league page - Baseball', () => {
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
   
  po.sportOption = '.baseball'
  po.leagueNum = 0
  po.scopeHeaderArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'H', 'Err', 'S']

  context('Tests livescore fixtures on league page - Baseball', () => {

    it('C1 - livescore fixtures widget exist - Baseball', () => {
      cy.visit(url);
      
      po.livescore_fixtures_exists()
    });

    it('C2 - livescore fixtures all texts - Baseball', () => {
      
      po.livescore_fixtures_all_matches()
    });

    it('C3 - livescore fixtures widget exist on mobile - Baseball', () => {
      cy.viewport(320,1100)
      po.livescore_fixtures_all_matches_mobile()
      
    });

  });

});