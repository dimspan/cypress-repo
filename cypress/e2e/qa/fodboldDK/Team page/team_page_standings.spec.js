import { standings_team_page_po } from "../../PageObject/fodboldDK/Team page/team_page_standings.po";
import { TI_fodbolddk_po } from "../../PageObject/fodboldDK/Team page/team_info_fodboldDK.po"
let poTI = new TI_fodbolddk_po 
let po = new standings_team_page_po
po.championsLeague = ".wff_table_row_column_content_wrapper.wff_championsleague"
let url = null;

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
describe('Standings team page',{
   
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
() => {
    // Set viewport configuration for all tests within this describe block
    
    beforeEach(()=>{
      cy.viewport(1700,1100)
    })
    
  
    context('Standings on team page test', () => {
      it('C1 - Standings properties [TP]', () => {
            cy.visit(url);
            po.standingsWidgetStillingTab()
      });
      it("C2 - Check headers [TP] ",()=>{
        po.standingsStillingHeaders()
      })
      it("C3 - Check the tooltips [TP] ",() =>{
        po.pcTooltipsStillingTab()
      })
      it("C4 - Formtooltip [TP]",()=>{
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        po.formTooltipTeamPage()
      })
      // it("C5 - Check the event info [TP]", ()=>{
      //   poTI.check_event_info()
      // })
      it("C6 - Check the rounded corners [TP]",()=>{
        po.roundedCorners()
      })
 
  
    });
  });
