import { TI_fodbolddk_po} from "../../PageObject/fodboldDK/Team page/team_info_fodboldDK.po";
let po = new TI_fodbolddk_po
let url = null;

describe('Test the team info team page',
  {    
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
    url = 'https://fodbold.dk/hold/8456/Manchester-City/';
    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })
  

  context('PC view team info team page', () => {
    it('C1 - Check team name and logo [TP]', () => {
        cy.visit(url);
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
        po.check_team_name_and_logo_header()
    });
    it("C2 - Checks the properties of team info [TP]",()=>{
        po.check_team_info_properties()
    })
    it("C3 - Check the form icons [TP]",()=>{
      po.check_form_icons()
    })
    it("C4 - Check the event info [TP]",()=>{
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
      po.check_event_info()
    })

  });
});