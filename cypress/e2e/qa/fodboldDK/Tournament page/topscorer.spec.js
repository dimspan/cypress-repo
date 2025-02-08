import { topscorer_po } from "../../PageObject/fodboldDK/Tournament page/topScorer.po";
import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
let poSC = new topscorer_po()
let poTP = new tournamentPage_po()
let url = null;

before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)                
    url = 'https://fodbold.dk/stillinger/47/Premier-League/'    
    // cy.viewport(1700,1100)
    
});

describe(' Topscorer widget in fodboldDK',{
    retries: {
        runMode: 2,
        openMode: 1,          
      },        
  
},


()=>{
    
    beforeEach(()=>{
        cy.viewport(1700,1100)
    })
    
    
       
    context('Tournament page Topscorer widget',() =>{ 
        it("C1 - Opens a league from top tournaments tp", () =>{
            cy.wait(500)
            cy.visit(url)
            cy.wait(1000)
            poTP.openTournament() //Opens England Premier league
        })
        it("C2 - Check basic topscorer styles",()=>{
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
                if (resizeObserverLoopErrRe.test(err.message)) {
                  return false
                }
            })
            
            poSC.topScorerPc()
            //     poSC.countParticipants()
            //     poSC.checkTopscorerNames()
        })  
        it("C3 - Count the participants and show more funct",()=>{
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
                if (resizeObserverLoopErrRe.test(err.message)) {
                  return false
                }
            })
            poSC.countParticipants() //checks the show more functionality
        })
        it("C4 - Check topscorer names ",()=>{
            poSC.checkTopscorerNames()
        })
    })
})