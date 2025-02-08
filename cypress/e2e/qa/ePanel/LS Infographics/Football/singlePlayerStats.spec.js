import { homePage_po } from "../../../PageObject/ePanel/homePage.po"
import { football_infograph_po } from "../../../PageObject/ePanel/LS infographics/Football/football_infograph.po";


let hopo = new homePage_po();
let po = new football_infograph_po();
let url = null;

describe('Test the design and functionalities of infograph LS football Player event stats',
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


  context('PC view tests infograph Football Player event stats', () => {
    // it('C1 - [FG] Visit the URL and login infograph Player ev stats', () => {
    //   cy.visit(url);
    //   hopo.loginForm();
    // });
    // it('C2 - [FG] Get to the Pl ev stats template',()=>{
    //     hopo.infographics()
    //     po.openSinglePlayerStats()
    // })

    // it('C3 - [FG] Check the design of pl ev stats template',()=>{
    //   po.singlesPlayerCareerDesign()
    // })
    
    // it('C4 - [FG] Upload image and edit components in pl ev stats',()=>{
    //     po.scaleCheck()
    
    //   })  
    // it('C5 - [FG] Change infograph data in singles pl ev stats',()=>{
    //     po.changeDataPlayerCareerStats()
    //   })

    // it('C6 - [FG] Check if draft is working pl ev stats',()=>{
    //   po.draftWorkSingleCareerStats()
    // })
    
    // it('C7 - [FG] Change different component pl ev stats properties',()=>{
    //   po.changeComponentsPropertiesSinglesPlayerStats()
    // })
    // it('C8 - [FG]Change different texts player eve stats',()=>{ /// needs repair
    //   po.changeTextsSinglesPlayerCareer()
    // })
    // it('C9 - [FG] Reset everything',()=>{
    //   po.resetSettingsSinglesCareerStats()
    // })
    // it("C10 - [FG] Check visibility of different elements",()=>{
    //   po.tennisPlayerSingleEvStatsMovableEditorWindow()
    // })
    // it("C11 - [FG] Check the search functionalities ",()=>{
    //   po.searchEventFunctionalities()
    // })
  });
});