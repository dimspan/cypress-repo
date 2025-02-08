import { icehockey_statboxes } from "../../PageObject/1.Widgets Testing/31.Statboxes.po"
let url = null;
let po = new icehockey_statboxes


describe('Statboxes in ice hockey ', {
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

  context('Ice hockey Statboxes', () => {

    it("[IH]Statboxes Check visual elements",()=>{
        cy.visit("https://qatest-es.enetsites.com/statboxes")

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
    it("[IH] Statboxes Check texts",()=>{
      po.check_texts()
    })
    it("[IH] Statboxes Check values and circles",()=>{
      po.check_values_and_circles()
    })
    it("[IH] Statboxes player names",()=>{
      po.check_player_names()
    })


  });
  
});