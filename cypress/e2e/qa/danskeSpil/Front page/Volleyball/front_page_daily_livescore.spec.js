import {daily_livescore_po} from "../../../PageObject/danskeSpil/daily_livescore.po"
let po = new daily_livescore_po
let url = null;

describe('Livescore tests on volleyball front page', () => {
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
   

  po.sportOption = '.volleyball'
  po.livescoreWidget = '.wff_widget.wff_widget_FW332B679A3AA9D1FE.wff_widget_wide'
  po.livescoreMobile = '.wff_widget.wff_widget_FW332B679A3AA9D1FE.wff_widget_small'
  po.inProgressEventsStatus = '.wff_event_row_wrapper.wff_double.wff_event_status_inprogress'
  po.finishedEventsStatus = '.wff_event_row_wrapper.wff_double.wff_event_status_finished'

  context('Tests livescore on volleyball front page', () => {

    it('C1 - Check livescore widget exist - volleyball', () => {
      cy.visit(url);
      //po.counter = 1
      po.daily_livescore_exists()
    });

    it('C2 - Check livescore all texts - volleyball', () => {
      //cy.visit(url);
      po.counter = 1
      po.livescore_all_matches()
    });

    it('C3 - Check livescore all texts on mobile - volleyball', () => {
      cy.viewport(320,1100)
      po.counter = 1
      po.livescore_all_matches_mobile()
      
    });

    it('C4 - Check all live matches on livescore widget - volleyball', () => {
      po.counter = 1
      po.livescore_live_matches();
    });

    it('C5 - Check all finished matches on livescore widget - volleyball', () => {
      //cy.visit(url);
      po.counter = 1
      po.livescore_finished_matches()
    })

  });

});