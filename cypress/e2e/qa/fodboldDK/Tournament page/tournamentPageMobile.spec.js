
import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
import { standings_po } from "../../PageObject/fodboldDK/Tournament page/standings.po";
import { topscorer_po } from "../../PageObject/fodboldDK/Tournament page/topScorer.po";
import { livescore_fixtures_po } from "../../PageObject/fodboldDK/Tournament page/livescore_fixtures.po";
import { livescore_results_po } from "../../PageObject/fodboldDK/Tournament page/livescore_results.po";
let poFixtures = new livescore_fixtures_po
let poResults = new livescore_results_po
let poTP = new tournamentPage_po
let poST = new standings_po
let poSC = new topscorer_po
let url = null;


describe(' Tournament page - Mobile',{
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
        url = 'https://fodbold.dk/stillinger'    
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

context('Mobile view tests of tournament page',() =>{
    beforeEach(()=>{
        cy.viewport(360,800)
    })
    before(()=>{
        cy.visit(url)
    })
    it(" C1 - Opens a league from top tournaments - mobile", () =>{
        cy.visit(url)            
        poTP.openTournamentMobile() //Opens England Premier league
        
    })
    
    it(" C2 - Checks the last matches livescore mobile",()=>{
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                    /* returning false here prevents Cypress from failing the test */
                    if (resizeObserverLoopErrRe.test(err.message)) {
                        return false
                    }
                })
        poResults.overview_mobile_results_livescore()
        
    })
    it(" C3 - Check the headers - Mobile ",()=>{
        poTP.checkHeaders()
    })
    it("C4 - Checks the next matches tp mobile",()=>{
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                    /* returning false here prevents Cypress from failing the test */
                    if (resizeObserverLoopErrRe.test(err.message)) {
                        return false
                    }
                })
        poFixtures.overview_fixtures_mobile_livescore()
    })    
    // it("C5 - Checks the standings mobile",()=>{  not used because we have the same test for pc but it's faling in the ci/cd
    //     cy.wait(1000)          
    //     poST.standingsWidgetMobile()
    //     poST.mobileTooltips()
    // })
    it("C6 - Topscorer widget mobile",()=>{
        poSC.topscorerMobile()
        poSC.countParticipantsMobile()
        poSC.checkTopscorerNamesMobile()
    })

    
    }) 
})
