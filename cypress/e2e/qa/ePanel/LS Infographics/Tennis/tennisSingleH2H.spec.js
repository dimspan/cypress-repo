import { homePage_po } from "../../../PageObject/ePanel/homePage.po";
import { infograph_po } from "../../../PageObject/ePanel/LS infographics/Tennis/infograph.po";
let hopo = new homePage_po;
let po = new infograph_po;
let url = null;

describe('Test the design and functionalities of Tennis singles LS',
{
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
() =>{

    before(() => {
        cy.clearCookies()
                    cy.clearLocalStorage()
                    cy.window().then((win) => {
                        win.location.reload(true)
                      })
                    cy.wait(1000)                
        url = 'https://epanel.enetsites.com/login'    
    });
    beforeEach(()=>{
        cy.viewport(1400,1100)
    })

    
        context('PC view tests H2H LS', () =>{    

            it('C1 - Visit the url and login for H2H' , () => {                       
                cy.visit(url);                
                hopo.loginForm();               
            })

            it('C2 - Get to the H2H template',()=>{
                hopo.infographics()
                po.openH2Htemplate()
                cy.wait(1000)
            })           

            it('C3 - Upload image and edit components',()=>{
                po.scaleCheck()
            })
            
            it('C4 - Check the design of H2H',()=>{
                po.h2hTemplateDesign()
            })
            
            it('C5 - Change infograph data',()=>{
                po.changeDataH2h()
            })
            it('C6 - Check if draft is working',()=>{
                po.draftWorkH2H()
            })
            it('C7 - Change different component properties',()=>{
                po.changeComponentsPropertiesH2H()
            })
            it('C8 - Change different texts',()=>{
                po.changeTextsH2H()
            })
            it('C9 - Reset everything',()=>{
                po.resetSettingsH2H()
            })
            it("C10 -[SPS] Check the search functionalities [SPS]",()=>{
                po.searchTwoPlayersFunctionalities()
            })
            it('C11 - Check editor window',()=>{
                po.h2hMovableEditorWindow()
            })
            // it('C11 - H2H - Test format 3:2',()=>{
            //     po.testformat_3_2()
            // })
            // it('C12 - H2H - Test format 1:1',()=>{
            //     po.testformat_1_1()
            // })
        })
            
           
                        
})       
        