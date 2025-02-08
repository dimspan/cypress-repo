import {season_calendar_po} from "../../../PageObject/danskeSpil/season_calendar.po"
let po = new season_calendar_po
let url = null;

describe('[F1]Season calendar tests on front page', () => {
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
   

  context('[F1]Tests Season calendar on front page', () => {

    it('[F1][C1] Season calendar  widget exists', () => {
      cy.visit(url);
      po.season_calendar_exists();
    });
 
    it('[F1][C2] Season calendar all the texts', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('[F1][C3] Season calendar all the texts on mobile', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.check_all_texts_mobile();
    });

    it('[F1][C4] check links on event name', () => {
      // cy.visit(url);
      po.checkIfEventsNameHasLink();
    });

  });

});