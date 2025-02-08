import { ice_hockey_event_stats } from "../../PageObject/1.Widgets Testing/3.event_stats.po"
let url = null;
let po = new ice_hockey_event_stats


describe('Ice hockey event stats', {
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

  context('Ice hockey event stats', () => {
    it("[IH] Event stats Check visual elements",()=>{
        cy.visit("https://qatest-es.enetsites.com/event_stats")
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
        cy.wait(500)
        po.check_visual_elements() 
    })
    it("[IH] Event stats Check Text Elements",()=>{
      po.check_text_elements()
    })
    it("[IH] Event stats Check the tabs",()=>{
      po.check_tabs_in_ev_stats()
    })
  });
  
});