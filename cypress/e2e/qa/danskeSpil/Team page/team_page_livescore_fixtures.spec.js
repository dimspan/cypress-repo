import {team_page_livescore_fixtures_po} from "../../PageObject/danskeSpil/livescore_fixtures.po"
let po = new team_page_livescore_fixtures_po
let url = null;

describe('livescore fixtures tests on team page - Soccer', () => {
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
   
  po.counter = 3

  context('Tests livescore fixtures on team page - Soccer', () => {

    it('C1 - livescore fixtures widget exist - soccer', () => {
      cy.visit(url);
      
      po.livescore_fixtures_exists()
    });

    it('C2 - livescore fixtures all texts - soccer', () => {
      
      po.livescore_fixtures_all_matches()
    });

    it('C3 - livescore fixtures widget exist on mobile - soccer', () => {
      cy.viewport(320,1100)
      po.livescore_fixtures_all_matches_mobile()
      
    });

  });

});