import {livescore_fixtures_other_sports_po} from "../../../PageObject/danskeSpil/livescore_fixtures.po"
let po = new livescore_fixtures_other_sports_po
let url = null;

describe('livescore fixtures tests on league page - Am.Football', () => {
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
   
  po.sportOption = '.am_football'
  po.leagueNum = 4
  po.scopeHeaderArray = ['1Q', '2Q', '3Q', '4Q', 'S']

  context('PC view tests livescore fixtures on league page - Am.Football', () => {

    it('C1 - Check livescore fixtures widget exist - Am.Football', () => {
      cy.visit(url);
      
      po.livescore_fixtures_exists()
    });

    it('C2 - Check livescore fixtures all texts - Am.Football', () => {
      
      po.livescore_fixtures_all_matches()
    });

    it('C3 - Check livescore fixtures widget exist on mobile - Am.Football', () => {
      cy.viewport(320,1100)
      po.livescore_fixtures_all_matches_mobile()
      
    });

  });

});