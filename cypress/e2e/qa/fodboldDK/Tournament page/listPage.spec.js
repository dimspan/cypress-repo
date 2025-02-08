import { listPage_po } from "../../PageObject/fodboldDK/Tournament page/listPage.po";
let po = new listPage_po()
let url = null;


describe('League list', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/stillinger/';
    // cy.viewport(1700, 1100);
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

  context('List tests', () => {
    it('C1 -Design list page', () => {
      cy.visit(url)            
      po.checks_ListPage_Design_fontSize()
    });
    it("C2 - Checks all flags in list page",()=>{
      po.checksAllFlags()
    })
    it("C3 - Counts the top leagues list ",()=>{            
      po.countTopLeaguesPCview()        
    })
    it("C4 - Search a league list ",()=>{
      po.searchAndOpenTournamentPage()
    })
    it("C5 - Check the ls previous matches ",()=>{
      po.livescoresTestPCview()
     
    })
    // it("C6 - Check the link in the scorebox", () =>{
                  
  //     cy.wait(1000)
  //     to.scorebox()                   
  //     cy.wait(1000)            
  //     cy.go("back")
  //     cy.wait(1000)
                  
  // })
    it("C7 - Check the Team links in list page ",()=>{
      po.checkTeamLink()          
 //   cy.go("back")
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
      Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false
        }
      })
    })
    it(" C8 - Check ls - next matches from list page ",() =>{
      // cy.go("back")
      po.livescoresNextMatchesPC()
      // to.anyData()  
    })
  }); //end of context
  context('Mobile view list',
  () => {
    beforeEach(()=>{
      cy.viewport(360,800)
    })
   
        it(" C9 - Checks design in Mobile view ",()=>{
          cy.visit(url)            
          po.checks_ListPage_Design_fontSize()
        })
        it(" C10 - Checks all flags - Mobile ",()=>{
          po.checksAllFlagsMobile()
        })
        it(" C11 - Counts the top leagues - Mobile ",()=>{            
          po.countTopLeaguesMobile()        
        })
        it(" C12 - Search a league - Mobile ",()=>{
          po.searchAndOpenTournamentPage()
        })
        it(" C13 - Check the livescore - previous matches - Mobile ",()=>{
          po.livescoresTestMobile()
          // to.anyData()  
        })
        // it(" C14 - Check the link in the scorebox - Mobile ", () =>{
            
        //     cy.wait(1000)
        //     po.scoreboxSmall()                   
        //     cy.wait(1000)            
        //     cy.go("back")
        //     cy.wait(1000)
            
        // })
        it(" C15 - Check the Team link - Mobile",()=>{
          po.checkTeamLinkSmall()          
          // cy.go("back")
          cy.wait(1000)
          const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
          Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
          })
        })
        it(" C16 - Check next matches - Mobile ",()=>{
            // cy.go("back")
          po.livescoresNextMatchesMobile()
          // to.anyData()  
        })
  })

});




// describe(' League list design ',{
//   retries: {
//     runMode: 2,
//     openMode: 1,
//   },
// },()=>{
//     before(() => {
//         cy.clearCookies()
//                     cy.clearLocalStorage()
//                     cy.window().then((win) => {
//                         win.location.reload(true)
//                       })
//                     cy.wait(1000)                
//         url = 'https://fodbolddk-es.enetsites.com/stillinger'    
//         cy.viewport(1700,1100)
        
//     });
//     beforeEach(()=>{
//         cy.viewport(1700,1100)
//     })
    
      
      
//       context(' League list page functionalities and design ',() =>{
//         it(" C1 - Listpage",()=>{
//             cy.visit(url)            
//             po.checks_ListPage_Design_fontSize()
//         })
//         it("C2 - Checks all flags in list page",()=>{
//             po.checksAllFlags()
//         })
//         it("C3 - Counts the top leagues list ",()=>{            
//             po.countTopLeaguesPCview()        
//         })
//         it("C4 - Search a league list ",()=>{
//           po.searchAndOpenTournamentPage()
//         })
//         it("C5 - Check the ls previous matches ",()=>{
//           po.livescoresTestPCview()
//           to.anyData()  
//         })
//         // it("C6 - Check the link in the scorebox", () =>{
            
//         //     cy.wait(1000)
//         //     to.scorebox()                   
//         //     cy.wait(1000)            
//         //     cy.go("back")
//         //     cy.wait(1000)
            
//         // })
//         it("C7 - Check the Team links in list page ",()=>{
//           po.checkTeamLink()          
//         //   cy.go("back")
//           cy.wait(1000)
//           const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
//             Cypress.on('uncaught:exception', (err) => {
//                 /* returning false here prevents Cypress from failing the test */
//                 if (resizeObserverLoopErrRe.test(err.message)) {
//                     return false
//                 }
//             })
//         })
//         it(" C8 - Check ls - next matches from list page ",() =>{
//             // cy.go("back")
//             po.livescoresNextMatchesPC()
//             to.anyData()  
//         })
//       })
//       context("Mobile - List page ",()=>{
//         beforeEach(()=>{
//             cy.viewport(360,800)
//         }),() =>{
//           it(" C9 - Checks design in Mobile view ",()=>{
//             cy.visit(url)            
//             po.checks_ListPage_Design_fontSize()
//         })
//         it(" C10 - Checks all flags - Mobile ",()=>{
//             po.checksAllFlagsMobile()
//         })
//         it(" C11 - Counts the top leagues - Mobile ",()=>{            
//             po.countTopLeaguesMobile()        
//         })
//         it(" C12 - Search a league - Mobile ",()=>{
//             po.searchAndOpenTournamentPage()
//         })
//         it(" C13 - Check the livescore - previous matches - Mobile ",()=>{
//             po.livescoresTestMobile()
//             to.anyData()  
//         })
//         // it(" C14 - Check the link in the scorebox - Mobile ", () =>{
            
//         //     cy.wait(1000)
//         //     po.scoreboxSmall()                   
//         //     cy.wait(1000)            
//         //     cy.go("back")
//         //     cy.wait(1000)
            
//         // })
//         it(" C15 - Check the Team link - Mobile",()=>{
//             po.checkTeamLinkSmall()          
//             // cy.go("back")
//             cy.wait(1000)
//             const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
//             Cypress.on('uncaught:exception', (err) => {
//                 /* returning false here prevents Cypress from failing the test */
//                 if (resizeObserverLoopErrRe.test(err.message)) {
//                     return false
//                 }
//             })
//         })
//         it(" C16 - Check next matches - Mobile ",()=>{
//             // cy.go("back")
//             po.livescoresNextMatchesMobile()
//             to.anyData()  
//         })
//       }}     
       

           
// )})
