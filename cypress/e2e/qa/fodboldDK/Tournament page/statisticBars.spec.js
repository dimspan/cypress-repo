import { tournamentPage_po } from "../../PageObject/fodboldDK/Tournament page/tournamentPage.po";
import { statistics_stilling_po } from "../../PageObject/fodboldDK/Tournament page/statistics.po.js"
let poTP = new tournamentPage_po()
let poSK = new statistics_stilling_po()
let url = null;

describe(' Test statistic bars in tournament page',()=>{
    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
        // url = 'https://fodbolddk-es.enetsites.com/stillinger/47/Premier+League'    
        url = 'https://fodbold.dk/stillinger/47/Premier-League/statistik/'
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
    context('PC view tests statistic bars',() =>{    
        
        it("C1 - Check the statistik tab",()=>{      
            cy.visit(url)  
            cy.wait(1000)    
            poTP.openStatistikTab()
            
        })
        it("C2 - Check headers",()=>{
            poSK.checkTeamHeaders()   
            poSK.checkPlayerHeaders()        
            cy.wait(1000)
        })
        it("C3 - Check team bars ",()=>{
           poSK.checkTeamBars()
           poSK.checkPlayerBars()
        })        
        it("C4 - Check data in bars statistics", ()=>{
            poSK.check_if_everything_has_data()
        })
        
        
    })  
})