import { Team_sum_po } from "../../PageObject/worldCup/team_sum.po";
let po = new Team_sum_po
po.widgetComponent = ".wff_widget.wff_widget_FWCFA8A2A7441B9537.wff_widget_medium"
po.summaryGeneric = ".wff_summary_stats_container:eq(0)"
po.defendingHeader = ".wff_label_text.wff_section_header_label:eq(0)";

let url = null;

describe(' Test team sum fodboldDK in team page',()=>{
    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
        // url = 'https://fodbolddk-es.enetsites.com/stillinger/47/Premier+League'    
        url = 'https://fodbold.dk/hold/8456/Manchester-City/statistik'
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
    context('PC view tests team sum team page',() =>{    
        it("C1 - Check if the team summary exists", () => {
            
            cy.visit(url)
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
            po.existElement()
            
        })
        it("C1.1 - Check defensive widget",()=>{
          po.widgetComponent = ".wff_widget.wff_widget_FW77DB9C3FFAE83E46.wff_widget_medium"            
          po.existElement()
        })
        it("C2 - Check elements with regular font weight ",()=>{
            po.checkRegularWeight()
            po.widgetComponent = ".wff_widget.wff_widget_FWCFA8A2A7441B9537.wff_widget_medium"
            po.checkRegularWeight()
        })
        it("C3 - Check elements with bold font weight", ()=>{
            po.checkBoldWeight()
            po.widgetComponent = ".wff_widget.wff_widget_FW77DB9C3FFAE83E46.wff_widget_medium"
            po.checkBoldWeight()
        })       

        
        
    })  
})