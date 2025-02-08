import { livescore_fixtures_po } from "../../PageObject/fodboldDK/Tournament page/livescore_fixtures.po";
import { livescore_results_po } from "../../PageObject/fodboldDK/Tournament page/livescore_results.po";
let poFixtures = new livescore_fixtures_po
let poResults = new livescore_results_po
let url = null;

describe('Livescore tests on team page', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/hold/8456/Manchester-City/';
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

  context('PC view tests livescore on team page', () => {
    it('C1 - Check last matches [TP]', () => {
        cy.visit(url);
        poResults.team_player_page_overview_results_livescore()
        // poResults.livescore_results_styles_tooltip()
    });
    it("C2 - Check the next matches [TP]",()=>{
        poFixtures.team_player_page_overview_fixtures_livescore()
        // poFixtures.livescore_fixtures_styles_tooltip()
    })
 

  });
});