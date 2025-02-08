import {daily_livescore_po} from "../../../PageObject/danskeSpil/daily_livescore.po"
let po = new daily_livescore_po
let url = null;

describe('[TN]Livescore tests on front page', () => {
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
   
  po.sportOption = '.tennis'
  po.livescoreWidget = '.wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide'
  po.livescoreMobile = '.wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_small'
  po.headersTransform = '.wff_grouping_header_value'
  po.finishedEventsStatus = '.wff_event_row_wrapper.wff_double.wff_event_status_finished'
  po.inProgressEventsStatus = '.wff_event_row_wrapper.wff_double.wff_event_status_inprogress'

  context('[TN]Tests livescore on front page', () => {

    it('[TN][C1] Check livescore widget exist', () => {
      cy.visit(url);
      //po.counter = 1
      po.daily_livescore_exists()
    });

    it('[TN][C2] Check livescore all texts ', () => {
      //cy.visit(url);
      
      po.livescore_all_matches()
    });

    it('[TN][C3] Check livescore all texts on mobile ', () => {
      cy.viewport(320,1100)
      po.livescore_all_matches_mobile()
      
    });

    it('[TN][C4] Check all live matches on livescore widget ', () => {
      po.counter = 1
      po.livescore_live_matches();
    });

    it('[TN][C5] Check all finished matches on livescore widget ', () => {
      //cy.visit(url);
      po.counter = 1
      po.livescore_finished_matches()
      
    });

    // it('C5 - Check if the team names have links ', () => {
    //   cy.visit(url);
      
    //   po.checkIfTeamNameHasLink()
    // });
    

  });

});