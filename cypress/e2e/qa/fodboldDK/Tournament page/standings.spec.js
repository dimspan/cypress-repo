import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
import { standings_po } from "../../PageObject/fodboldDK/Tournament page/standings.po";
import { livescore_fixtures_po } from "../../PageObject/fodboldDK/Tournament page/livescore_fixtures.po";
import { livescore_results_po } from "../../PageObject/fodboldDK/Tournament page/livescore_results.po";
let poFixtures = new livescore_fixtures_po
let poResults = new livescore_results_po
poFixtures.nextMatchesKampeTab = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small"
poResults.lastMatches = ".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small"
// let poLP = new listPage_po()
let poTP = new tournamentPage_po()
let poST = new standings_po()
let url = null;




describe(' Main tournament page and functionalities',()=>{
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
    context('Tournament page and tests in PC view',() =>{ 
        it("C1 - Opens a league from top tournaments tp", () =>{
            cy.visit(url)
            cy.wait(1000)
            poTP.openTournament() //Opens England Premier league
        })
    
        it("C2 -Tour. page - Checks the standings widget ",()=>{
            poST.standingsWidget()
            poST.pcTooltips()
        }) 

    })  
        
})