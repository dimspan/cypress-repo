import { livescore_fixtures_po } from "../../../PageObject/fodboldDK/Tournament page/livescore_fixtures.po";
import { livescore_results_po } from "../../../PageObject/fodboldDK/Tournament page/livescore_results.po";
import { player_page_tabs_switch_po } from "../../../PageObject/fodboldDK/page_switch_tabs.po";
let poFixtures = new livescore_fixtures_po
let poResults = new livescore_results_po
let poST = new player_page_tabs_switch_po
let url = null;
poResults.ls_lastmatch_container_teampage = ".es-loading.es_prev_matches_player_page.esm_comp.esm_club.esm_national_team.es_widget_container"
poFixtures.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(0)"
poResults.lastMatches = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
poFixtures.nextMatches = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"

describe('Champions league livescore ', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/spiller/737066/Gonzalo-Montiel/overblik/';
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

  context('Champions league pc view livescore', () => {
    it('C1 - Check last matches player page klub tab [CL] ', () => {
        cy.visit(url);
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
        /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
        })
        poST.get_to_klub()
        cy.wait(2000)
        poResults.player_results_livescore()
    });
    it("C2 - Check the livescore fixtures player page klub tab [CL] ",()=>{
        poFixtures.team_player_fixtures_livescore()
    })
 

  });
});