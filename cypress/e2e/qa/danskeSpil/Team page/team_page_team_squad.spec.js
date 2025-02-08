import {team_squad_po} from "../../PageObject/danskeSpil/team_squad.po"
let po = new team_squad_po
let url = null;

describe('Team squad tests on team page - Soccer', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
                
    url = 'https://danskespil.enetscores.com/';
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
   

  context('Tests Team squad  on team page - Soccer', () => {

    it('C1 - team squad  widget exists - Soccer', () => {
      cy.visit(url);
      po.team_squad_exists();
    });
 
    it('C2 - team squad all the texts - Soccer', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - team squad all the texts on mobile - Soccer', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - team squad tooltips texts - Soccer', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    // it('C5 - event info pop-up on form icons - Soccer', () => {
    //   // cy.visit(url);
    //   po.check_form_popup();
    // });

    // it('C6 - check dropdowns - Soccer', () => {
    //   // cy.visit(url);
    //   po.check_dropdowns();
    // });

  });

});