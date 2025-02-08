import { statistics_stilling_po } from "../../PageObject/fodboldDK/Tournament page/statistics.po";
import { statistics_widget_po } from "../../PageObject/fodboldDK/Team page/statistics_widget.po";
let po =  new statistics_stilling_po
let poW = new statistics_widget_po
let url = null;

describe(' Test stats tab in team page',()=>{
    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
         
        url = 'https://fodbold.dk/hold/8456/Manchester-City/'
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
    context('PC view tests team page stats tab',() =>{    
        it("C1 - Go to stats tab ", () => {            
            cy.visit(url)
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
            cy.wait(2000)
            po.team_page_stats_tab()
            
        })
        it("C2 - Check team stats headers",()=>{ //not working
            cy.wait(1500)
            poW.checkTeamHeaders()
        })
        it("C3 - Check team bars ", () =>{
            cy.wait(1500)
            poW.checkProperties()
        })
   
        
        
    })  
})