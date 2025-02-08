import { standings_team_page_po } from "../../PageObject/fodboldDK/Team page/team_page_standings.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po"
let poTS = new player_page_tabs_switch_po
let po = new standings_team_page_po
let url = null;
po.standingsWide = ".wff_widget.wff_widget_FW86570092C7730A76.wff_widget_medium.wff_standings_soccer"
po.championsLeague = ".wff_table_row_column_content_wrapper.wff_qualification_to_next_stage"
po.flagContainer = ".wff_flag_logo_img"
po.formContainer = ".wff_table_row_column.wff_standings_stats_box:eq(2)"

describe('Multi - stage Standings in match page', () => {
    // Set viewport configuration for all tests within this describe block
    before(() => {
      cy.clearCookies()
                  cy.clearLocalStorage()
                  cy.window().then((win) => {
                      win.location.reload(true)
                    })
                  cy.wait(1000)
      url = 'https://fodbold.dk/kampe/4140625/Manchester-City-Brighton/';
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
  
    context('Multi - Stage Standings on match page', () => {
      it('C1 - Multi - Stage Standings properties in match pg ', () => {
            cy.visit(url);
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
            poTS.get_to_kamp_matchpage()
            po.standingsWidgetStillingTab()
      });
      it("C2 - Multi - Stage Check the tooltips in match pg",() =>{
        po.matchStandingsTooltipHeaders()
      })      
  
      it("C3 - Multi - Stage Check the rounded corners in match pg",()=>{
        po.roundedCorners()
        
      })
      it("C4 - Check the links of the team names in match page standings",()=>{
        po.check_names_links()
      })
 
  
    });
  });
//in progress