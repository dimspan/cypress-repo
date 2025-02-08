import { squad_po } from "../../PageObject/fodboldDK/Team page/squad.po";
let po = new squad_po
let url = null;

describe(' Test squad in team page',()=>{
    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
        // url = 'https://fodbolddk-es.enetsites.com/stillinger/47/Premier+League'    
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
    context('PC view tests lineups tab team page',() =>{    
        it("C1 - Check squad header properties", () => {
            
            cy.visit(url)
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
            po.check_header_properties()
        })
        it("C2 - Check widget's headers",()=>{
            po.check_widget_headers()
        })
        it("C3 - Checks the player links", () =>{
            po.check_widget_links()
        })
        it("C4 - Check flags",()=>{
          po.check_flags()
        })
        it("C5 - Check stats headers",()=>{
          po.check_tooltip()
        })
        
        
    })  
})