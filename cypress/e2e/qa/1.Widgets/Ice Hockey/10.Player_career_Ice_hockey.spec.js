import { ice_hockey_player_career_po } from "../../PageObject/1.Widgets Testing/14.player_career.po"
let url = null;
let po = new ice_hockey_player_career_po


describe('Player career in ice hockey ', {
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

  context('Ice hockey Player career', () => {

    it("[IH] Player career Check visual elements",()=>{
        cy.visit("https://qatest-es.enetsites.com/player_career")

        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
        cy.wait(500)
        po.check_widget_headers() 
    })
    it("[IH] Player career Check headers values",()=>{
      po.check_headers_values()
    })
    it("[IH] Player career Check tooltips",()=>{
      po.check_tooltips()
    })
    it("[IH] Player career Check visual elements",()=>{
      po.check_visual_elements()
    })
    it("[IH] Player career Check font styles",()=>{
      po.check_font_styles()
    })
    it("[IH] Player career Check values visibility and values",()=>{
      po.check_if_all_values_are_displayed()
    })
    


  });
  
});