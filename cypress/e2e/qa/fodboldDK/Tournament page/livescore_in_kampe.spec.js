import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
import { livescore_fixtures_po } from "../../PageObject/fodboldDK/Tournament page/livescore_fixtures.po";
import { livescore_results_po } from "../../PageObject/fodboldDK/Tournament page/livescore_results.po";

let poFixtures = new livescore_fixtures_po
let poResults = new livescore_results_po
let poTP = new tournamentPage_po
let url = null;

describe(' Tournament Livescore kampeee ',()=>{
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
    context('PC Tournament kampe livescore',() =>{ 
        it("C1 - Open kampe tab",()=>{           
           
            cy.visit(url)
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
            poTP.openKampeTab()            
        })  
        
        it("C2 - Check last matches in the kampe tab",()=>{
          poResults.tournament_results_livescore()
          // poResults.livescore_results_styles_tooltip()
        })   
        
        it("C3 - Check next matches in the kampe tab",()=>{
          poFixtures.tournament_fixtures_livescore()
          // poFixtures.livescore_fixtures_styles_tooltip()
        })
        

       
        
    })  
})