import { standings_team_page_po } from "../../PageObject/fodboldDK/Team page/team_page_standings.po";
import { TI_fodbolddk_po } from "../../PageObject/fodboldDK/Team page/team_info_fodboldDK.po"

let poTI = new TI_fodbolddk_po 
let po = new standings_team_page_po
poTI.medium_view_team_info = ".wff_widget.wff_widget_FW31379CE25E2C9F60.wff_widget_wide.wff_standings_soccer"
poTI.event_info_tooltip = ".wff_widget.wff_standings_event_info.wff_widget_FW31379CE25E2C9F60.wff_widget_small"
poTI.score_box = ".wff_event_result_single_row_link"
po.championsLeague = ".wff_table_row_column_content_wrapper.wff_championsleague"

let url = null;

describe('League stage Standings team page', () => {
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
  
    context('League standings on team page test', () => {
      it('C1 - Standings properties ', () => {
                    cy.visit(url);
                    po.standingsWidgetStillingTab()
              });
      it("C2 - Check headers of the league standings in team page ",()=>{
        po.standingsStillingHeaders()
      })

      it("C3 - Check the tooltips of league standings in team page ",() =>{
        po.pcTooltipsStillingTab()
      })
      it("C4 - league standings Formtooltip ",()=>{
        po.formTooltipTeamPage()
      })
      it("C5 - league standings Check the event info ", ()=>{
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        poTI.check_event_info()
      })
      it("C6 - league standings Check the rounded corners ",()=>{
        po.roundedCorners()
      })
 
  
    });
  });
