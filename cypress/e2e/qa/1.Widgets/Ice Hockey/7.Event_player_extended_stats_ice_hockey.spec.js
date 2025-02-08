import { ice_hockey_player_ext_stats_po } from "../../PageObject/1.Widgets Testing/30.event_extended_player_stats.po"
let url = null;
let po = new ice_hockey_player_ext_stats_po


describe('Player event ext stats in Ice hockey', {
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

  context('Ice hockey Ev Extended Pl Stats', () => {

    it("[IH]Ev Ex Pl Check visual elements",()=>{
        cy.visit("https://qatest-es.enetsites.com/extended_stats")
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
    it("[IH] Ev Ex Pl Check tabs",()=>{
      po.check_tabs()
    })
    it("[IH] Ev Ex Pl Check headers",()=>{
      po.check_headers()
    })
    it("[IH] Ev Ex Pl Switch tabs functionality",()=>{
      po.switch_tabs_functionality()
    })
    it("[IH] Ev Ex Pl Check show all functionality and tooltips",()=>{
      po.check_tooltips()
    })
    // add tests for the other tabs

  });
  
});