import {event_info_po} from "../../../PageObject/danskeSpil/event_info.po"
let po = new event_info_po
let url = null;

describe('Event info tests on event page - Handball', () => {
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
   
  
  po.leagueNum = 0
  po.sportsMenu = '.esc_menu_sports_active_element'
  po.stillingerButton = ".esm_stillinger_li"
  po.sportOption = '.handball'
  po.genderLeagues = '.gender-leagues.col-12.col-sm-6'
  po.topLeaguesContainer = po.genderLeagues 
  po.topLeaguesNames = '.all-leagues-item'
  //po.scoreBox = '.wff_period_result_container.wff_score'

  context('Tests Event info  on event page - Handball', () => {

    it('C1 - Event info  widget exists - Handball', () => {
      cy.visit(url);
      po.event_info_exists();
    });
 
    it('C2 - Event info finished events texts - Handball', () => {
      // cy.visit(url);
      po.check_all_texts_finished_events();
    });

    it('C3 - Event info finished events texts on mobile - Handball', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile_finished_events();
    });

    it('C4 - Event info not started events texts - Handball', () => {
      // cy.visit(url);
      po.check_all_texts_notstarted_events();
    });

    // it('C5 - event info pop-up on form icons - Handball', () => {
    //   // cy.visit(url);
    //   po.check_form_popup();
    // });

    // it('C6 - check dropdowns - Handball', () => {
    //   // cy.visit(url);
    //   po.check_dropdowns();
    // });

  });

});