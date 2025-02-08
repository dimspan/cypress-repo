import {event_result_po} from "../../../PageObject/danskeSpil/event_result_motorsports.po"
let po = new event_result_po
let url = null;

describe('[F1]Event result tests on event page', () => {
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
   

  context('[F1]Tests Event result on event page', () => {

    it('[F1][C1]Event result  widget exists', () => {
      cy.visit(url);
      po.event_result_exists();
    });
 
    // it('[F1][C2]Event result all the texts', () => {
    //   // cy.visit(url);
    //   po.check_all_texts();
    // });

    // it('[F1][C3]Event result all the texts on mobile', () => {
    //   // cy.visit(url);
    //   cy.viewport(320,1100)
    //   po.check_all_texts_mobile();
    // });

    it('[F1][C4]check the stats headers tooltips', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

  });

});