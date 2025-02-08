import { homePage_po } from "../../../PageObject/ePanel/homePage.po";
import { infograph_po } from "../../../PageObject/ePanel/LS infographics/Tennis/infograph.po"

let hopo = new homePage_po();
let po = new infograph_po();
let url = null;

describe('Test the design and functionalities of infograph LS Tennis event stats',
{
  retries: {
    runMode: 2,
    openMode: 1,
  },
},
() => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://epanel.enetsites.com/login';
    // cy.viewport(1400, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1400,1100)
  })


  context('PC view tests infograph event stats', () => {
    it('C1 - Visit the URL and login infograph event stats', () => {
      cy.visit(url);
      hopo.loginForm();
    });
    it('C2 - Get to the Singles event stats template',()=>{
        hopo.infographics()
        po.openSinglesEventStats()
    })
    it('C3 - Check the design of Single event stats template',()=>{
        po.singlesEventStatsDesign()
    })
    it('C4 - Upload image and edit components in singles event stats',()=>{
      po.scaleCheckSingleEventStats()
    })  
    it('C5 - Change infograph data in singles event stats',()=>{
      po.changeDataSinglesEvStats()
    })
    it('C6 - Check if draft is working singles event stats',()=>{
      po.draftWorkSinglesEventStats()
    })
    it('C7 - Change different component properties',()=>{
      po.changeComponentsPropertiesSinglesEventStats()
    })
    it('C8 - Change different texts',()=>{
      po.changeTextsSinglesEventStats()
    })
    it('C9 - Reset everything',()=>{
      po.resetSettingsSinglesEventStats()
    })
    it("C10 - Check visibility of different elements",()=>{
        po.tennisSinglesEvStatsMovableEditorWindow()
    })
  });
});