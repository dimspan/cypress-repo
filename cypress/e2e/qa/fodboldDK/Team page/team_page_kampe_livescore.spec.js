import { livescore_fixtures_po } from "../../PageObject/fodboldDK/Tournament page/livescore_fixtures.po";
import { livescore_results_po } from "../../PageObject/fodboldDK/Tournament page/livescore_results.po";
import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
let poFixtures = new livescore_fixtures_po
let poResults = new livescore_results_po
let poTP = new tournamentPage_po
let url = null;

describe('Kampe tab Team page', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    // cy.clearCookies()
    //             cy.clearLocalStorage()
    //             cy.window().then((win) => {
    //                 win.location.reload(true)
    //               })
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

  context('PC view team info team page kampe tab', () => {
    it('C1 -  Switch to kampe tab and check headers', () => {
        cy.visit(url);
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
        /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
        })
        cy.wait(1000)
        poTP.openKampeTab()
    });
    it(" C2 - Check the livescore for last matches kampe tab team page ",()=>{
        poResults.team_results_livescore()
        // poResults.team_page_kampe_livescore_results_styles_tooltip()
    })
    it(" C3 - Check the livescore for next matches kampe tab team page ",()=>{
        poFixtures.team_player_fixtures_livescore()
        // poFixtures.livescore_fixtures_styles_tooltip()
    })
   

  });
});