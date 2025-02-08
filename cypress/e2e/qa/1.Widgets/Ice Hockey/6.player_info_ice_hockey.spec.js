import { ice_hockey_player_info_po } from "../../PageObject/1.Widgets Testing/16.player_info.po"
let url = null;
let po = new ice_hockey_player_info_po


describe(' Ice hockey player info ', {
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

  context('Ice hockey', () => {

    it("[1]Player Info Check name and logo",()=>{
        cy.visit("https://qatest-es.enetsites.com/player_info")
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
        cy.wait(500)
        po.check_player_name_and_logo() 
    })
    it("[2]Player Info Check data attributes",()=>{
      po.check_data()
    })
    it("[3]Player Info Check background image",()=>{
      po.check_background_image()
    })
    it("[4]Player info Check zebra rows",()=>{
      po.check_zebra_rows()
    })
    it("[5]Player info Check flags",()=>{
      po.check_flags()
    })
    // add tests for the other tabs

  });
  
});