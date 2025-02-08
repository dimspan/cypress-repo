import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
import { standings_stilling_po } from "../../PageObject/fodboldDK/Tournament page/standings_stilling.po";
import { statistics_stilling_po } from "../../PageObject/fodboldDK/Tournament page/statistics.po.js"
import { TI_fodbolddk_po } from "../../PageObject/fodboldDK/Team page/team_info_fodboldDK.po"



let poTI = new TI_fodbolddk_po()
let poTP = new tournamentPage_po()

let poSI = new standings_stilling_po()
let poSK = new statistics_stilling_po()
let url = null;
poTI.medium_view_team_info = ".wff_widget.wff_widget_FW31379CE25E2C9F60.wff_widget_wide.wff_standings_soccer"
poTI.event_info_tooltip = ".wff_widget.wff_standings_event_info.wff_widget_FW31379CE25E2C9F60.wff_widget_small"
describe(' Tournament page Tabs ',()=>{
    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
        url = 'https://fodbold.dk/stillinger/47/Premier-League/'    
        cy.viewport(1700,1100)
       
        
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
    context('PC Tournament tabs',() =>{ 

        it("C1 - Opens the Stilling tab", ()=>{
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
            cy.visit(url)
            poTP.openStillingTab()
            poSI.standingsWidgetStillingTab()
            
        })
        it("C2 - Check standings styles", ()=>{
            // cy.visit("https://fodbolddk-es.enetsites.com/stillinger/47/Premier+League/stilling/")
            poSI.standingsStillingHeaders()
            poSI.pcTooltipsStillingTab()
            poSI.roundedCorners()
            // poSI.formTooltip()
        })
        it("C3 - Check the statistik tab",()=>{
            // cy.visit(url)
            poTP.openStatistikTab()
            poSK.checkTeamHeaders()    
            poSK.checkPlayerHeaders()       
        })
        it("C4 - Check the event info tooltip in standings",()=>{
          cy.visit("https://fodbold.dk/stillinger/47/Premier+League/stilling/")
          cy.clearCookies()
          cy.clearLocalStorage()
          cy.window().then((win) => {
              win.location.reload(true)
            })
            poTI.check_event_info_in_standings()
          })

       
        
    })  
})