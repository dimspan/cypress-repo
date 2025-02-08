import {tennis_event_info_po} from "../../../PageObject/danskeSpil/event_info.po"
let po = new tennis_event_info_po
let url = null;

describe('Event info tests on event page - Soccer', () => {
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
   
  po.eventInfoWidget = ".wff_widget.wff_widget_FW838542FA880916C2.wff_widget_wide"
  po.eventInfoMobile = ".wff_widget.wff_widget_FW838542FA880916C2.wff_widget_small"

  context('Tests Event info  on event page - Soccer', () => {

    it('C1 - Event info  widget exists - Soccer', () => {
      cy.visit("https://danskespil.enetscores.com/h2h/4342228");
      cy.get(po.eventInfoWidget).should('exist')
    });
 
    it('C2 - Event info finished events texts - Soccer', () => {
      // cy.visit(url);
      po.check_all_texts_finished_events();
    });

    it('C3 - Event info finished events texts on mobile - Soccer', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile_finished_events();
    });

    // it('C4 - Event info not started events texts - Soccer', () => {
    //   // cy.visit(url);
    //   po.check_all_texts_notstarted_events();
    // });

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