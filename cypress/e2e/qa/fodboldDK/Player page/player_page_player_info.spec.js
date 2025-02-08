import { player_info_po } from "../../PageObject/fodboldDK/Player page/player_info.po";
let po = new player_info_po
let url = null;

describe('Test the player info player page', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/spiller/737066/Gonzalo-Montiel/overblik/';
    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })
  const retryConfig = {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  };

  context('PC view player info player page', () => {
    it('C1 - Check player name and logo [TP]', () => {
      cy.visit(url)
      po.check_player_name_and_logo()
    });
    it("C2 - Check data properties",()=>{
      po.check_data()
    })
    it("C3 - Check background image",()=>{
      po.check_background_image()
    })
    it("C4 - Check zebra rows",()=>{
      po.check_zebra_rows()
    })
    it("C5 - Check the flags",()=>{
      po.check_flags()
    })
  });
});