import {pitch_quick_po} from "../../PageObject/fodboldDK/Team page/pitch_quick_stats.po"
let po = new pitch_quick_po
let url = null;

describe('', () => {
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
  const retryConfig = {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  };

  context('PC view pitch quick stats team page', () => {
    it('C1 - Check pitch properties ', () => {
        cy.visit(url);
        po.check_widget()
    })
    it("C2 - Check the slider button of pitch quick stats ",()=>{
        po.check_slider()
    })
    it("C3 - Check boxes of pitch quick sttats",()=>{
        po.check_boxes()
    })
    it("C4 - Check the data values of pitch quick stats ",()=>{
      po.check_data()
    })
    it("C5 - Check average data value of pitch quick stats ",()=>{
      po.check_avrg_data()
    })


  });
});