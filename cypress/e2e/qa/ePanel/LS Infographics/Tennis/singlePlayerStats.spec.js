import { homePage_po } from "../../../PageObject/ePanel/homePage.po";
import { infograph_po } from "../../../PageObject/ePanel/LS infographics/Tennis/infograph.po"

let hopo = new homePage_po();
let po = new infograph_po();
let url = null;

describe('Test the design and functionalities of LS tennis single Player stats',
{
  // retries: {
  //   runMode: 2,
  //   openMode: 1,
  // },
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


  context('Tennis single Player stats', () => {
    it('C1 - Visit the URL and login infograph single Player stats', () => {
      cy.visit(url);
      hopo.loginForm();
    });
    it('C2 - Get to the singlePlayer stats template',()=>{
        hopo.infographics()
        po.openSinglePlayerStats()
    })

    it('C3 - Check the design of Single player career stats template',()=>{
      po.singlesPlayerCareerDesign()
    })
    
    it('C4 - Upload image and edit components in player career stats',()=>{
        po.scaleCheckPlayerCareerStats()
      })  
    it('C5 - Change infograph data in singles player career stats',()=>{
        po.changeDataPlayerCareerStats()
      })

    it('C6 - Check if draft is working player career stats',()=>{
      po.draftWorkSingleCareerStats()
    })
    
    it('C7 - Change different component player career stats properties',()=>{
      po.changeComponentsPropertiesSinglesPlayerStats()
    })
    it('C8 - Change different texts',()=>{
      po.changeTextsSinglesPlayerCareer()
    })
    it('C9 - Reset everything',()=>{
      po.resetSettingsSinglesCareerStats()
    })
    it("C10 - Check visibility of different elements",()=>{
      po.tennisPlayerSingleEvStatsMovableEditorWindow()
  })
  });
});