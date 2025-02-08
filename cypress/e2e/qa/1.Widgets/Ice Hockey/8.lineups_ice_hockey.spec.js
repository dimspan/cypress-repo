import { icehockey_lineups_po } from "../../PageObject/1.Widgets Testing/10.lineups_po"
let url = null;
let po = new icehockey_lineups_po


describe('Lineups in Ice hockey', {
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
    cy.viewport(2200,1100)
  })
  let url = "https://qatest-es.enetsites.com/lineups"

  context('Ice hockey Lineups', () => {

    it("[IH] Lineups Check visual elements",()=>{
        cy.visit(url)
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
    it("[IH] Lineups Check texts",()=>{
      po.check_texts()
    })
    it("[IH] Lineups Check headers",()=>{
      po.check_headers()
    })
    it("[IH] Lineups expand/collapse",()=>{
      po.expand_collapse_sections()
    })
    it("[IH] Lineups Tooltips",()=>{
      po.check_tooltips()
    })
    it("[IH] Lineups Check data text",()=>{
      po.check_data_text()
    })
    // add tests for the other tabs

  });
  
});