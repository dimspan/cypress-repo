import { ice_hockey_event_info_po } from "../../PageObject/1.Widgets Testing/5.event_info.po"
let url = null;
let po = new ice_hockey_event_info_po


describe('Event info in ice hockey ', {
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

  context('Ice hockey event info', () => {

    it("[IH]Event info Check visual elements",()=>{
        cy.visit("https://qatest-es.enetsites.com/event_info")
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
    it("[IH]Event info Check scorebox",()=>{
      po.check_score_box()
    })
    it("[IH] Event info Check the texts",()=>{
      po.check_texts()
    })
    it("[IH] Event info Check the tooltip",()=>{
      po.check_tooltip()
    })


  });
  
});