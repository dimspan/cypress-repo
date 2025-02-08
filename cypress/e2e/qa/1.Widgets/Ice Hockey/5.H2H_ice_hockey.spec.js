import { ice_hockey_h2h_po } from "../../PageObject/1.Widgets Testing/7.h2h.po"
let url = null;
let po = new ice_hockey_h2h_po


describe('H2H in Ice hockey', {
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
    cy.viewport(1700,1100)
  })

  context('Ice hockey H2H', () => {

    it("[IH] H2H Check Headers",()=>{
        cy.visit("https://qatest-es.enetsites.com/h2h")
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
        cy.wait(500)
        po.check_headers() 
    })
    it("[IH] H2H Check visual elements",()=>{
      po.check_visual_elements()
    })
    it("[IH] H2H Score boxes",()=>{
      po.check_score_boxes()
    })
    it("[IH] H2H Check the date and status",()=>{
      po.check_status_and_date()
    })
    it("[IH] Check collapsing functionality",()=>{
      po.check_collapsing_functionality()
    })
    // add tests for the other tabs

  });
  
});