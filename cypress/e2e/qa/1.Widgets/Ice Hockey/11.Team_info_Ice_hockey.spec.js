import { ice_hockey_team_info_po } from "../../PageObject/1.Widgets Testing/24.team_info_widget.po"
let url = null;
let po = new ice_hockey_team_info_po


describe('Team info in ice hockey ', {
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

  context('Ice hockey Team info', () => {

    it("[IH] Team info Check big names",()=>{
        cy.visit("https://qatest-es.enetsites.com/team_info")

        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false
              }
            })
        cy.wait(500)
        po.check_team_and_tournament_name() 
    })
    it("[IH] Team info Check team info properties",()=>{
      po.check_team_info_properties()
    })
    it("[IH] Team info Check form icons",()=>{
      po.check_form_icons()
    })
    it("[IH] Team info Check event info",()=>{
      po.check_event_info()
    })
    it("[IH] Team info Check categories",()=>{
      po.check_info_categories()
    })
    it("[IH] Team info Check category values",()=>{
      po.check_info_values()
    })
    // it("[IH] Player career Check font styles",()=>{
    //   po.check_font_styles()
    // })
    // it("[IH] Player career Check values visibility and values",()=>{
    //   po.check_if_all_values_are_displayed()
    // })
    


  });
  
});