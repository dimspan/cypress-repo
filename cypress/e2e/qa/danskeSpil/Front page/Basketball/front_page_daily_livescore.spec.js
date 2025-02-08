import {daily_livescore_po} from "../../../PageObject/danskeSpil/daily_livescore.po"
let po = new daily_livescore_po
let url = null;

describe('Livescore tests on basketball front page', () => {
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
   
  // po.lastMatches = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide"
  // po.ls_lastmatch_container_teampage = ".esm_comp.esm_livescore"
  po.sportOption = '.basketball'
  po.livescoreWidget = '.wff_widget.wff_widget_FW332B679A3AA9D1FE.wff_widget_wide'
  po.livescoreMobile = '.wff_widget.wff_widget_FW332B679A3AA9D1FE.wff_widget_small'
  po.finishedEventsStatus = '.wff_event_row_wrapper.wff_double.wff_event_status_finished'
  po.inProgressEventsStatus = '.wff_event_row_wrapper.wff_double.wff_event_status_inprogress'


  context('Tests livescore on basketball front page', () => {

    it('C1 - Check livescore widget exist - basketball', () => {
      cy.visit(url);
      //po.counter = 1
      po.daily_livescore_exists()
    });

    it('C2 - Check livescore widget exist - basketball', () => {
      //cy.visit(url);
      po.counter = 1
      po.livescore_all_matches()
    });

    it('C3 - Check livescore widget exist on mobile - basketball', () => {
      cy.viewport(320,1100)
      po.counter = 1
      po.livescore_all_matches_mobile()
      
    });
 
    it('C4 - Check all live matches on livescore widget - basketball', () => {
      
      po.livescore_live_matches();
    });

    it('C5 - Check all finished matches on livescore widget - basketball', () => {
      //cy.visit(url);
      po.counter = 1
      po.livescore_finished_matches()
      
    });

    // it('C5 - Check if the team names have links - basketball', () => {
    //   cy.visit(url);
      
    //   po.checkIfTeamNameHasLink()
    // });

  });

});