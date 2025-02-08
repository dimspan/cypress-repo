import {player_extended_po} from "../../PageObject/fodboldDK/Team page/player_extended_stats.po"
let po = new player_extended_po
let url = null;

describe(' Test ext stats in team page',
{
  retries: {
  runMode: 2,
  openMode: 1,
},
},
()=>{
    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
        // url = 'https://fodbolddk-es.enetsites.com/stillinger/47/Premier+League'    
        url = 'https://fodbold.dk/hold/10260/Manchester-City/'
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
    context('PC view tests extended stats team page',() =>{    
        it("C1 - Check design of extended stats widget", () => {
            
            cy.visit(url)
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
            po.extended_stats_design()
        })
        it("C2 - Check dropdown of ext stats",()=>{
            po.search_by_country()
        })
        it("C3 - Check the stats filter dropdown", ()=>{
            po.stats_filter()
        })       

        
        
    })  
})