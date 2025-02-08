import { ice_hockey_standings_po } from "../../PageObject/1.Widgets Testing/22.standings.po"
let url = null;
let po = new ice_hockey_standings_po


describe('Ice hockey standings', {
  retries: {
  runMode: 2,
  openMode: 1,
},
},




() => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)

    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(2000,1100)
  })

  context('Ice hockey standings', () => {
    it("Check conferences attributes",()=>{
        cy.visit("https://qatest-es.enetsites.com/standings")
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
        cy.wait(500)
        po.conferencesCheck() 
    })
    it("Check divisions attributes",()=>{
      po.divisionsCheck()
    })
    it("Check the tooltips",()=>{
      po.pcTooltips()
    })
    it("Check the minimizing of all sections",()=>{
      po.minimizeAllSections()
    })
    //add tests for the dropdowns
   it("Check dropdowns css properties",()=>{
    po.dropdownVisual()
   })
   it("Check dropdown functionaility",()=>{    
    po.dropdownFunctional()
   })
 
      
 

  });
  
});