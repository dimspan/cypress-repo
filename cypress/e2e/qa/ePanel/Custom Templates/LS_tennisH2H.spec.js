import { homePage_po } from "../../PageObject/ePanel/homePage.po";
import { infograph_po } from "../../PageObject/ePanel/LS infographics/Tennis/infograph.po";
import { enetgraphics_styles_po } from "../../PageObject/ePanel/All infographics/checkStylesAndProperties.po"
let hopo = new homePage_po;
let po = new infograph_po;
let stpo = new enetgraphics_styles_po;
let url = null;

describe('LS h2h Custom template',
{
    // retries: {
    //   runMode: 2,
    //   openMode: 1,
    // },
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

    
        context('Custom template tennis H2H LS', () =>{    

            it('C1 - Create custom template' , () => {                       
                cy.visit(url);                
                hopo.loginForm();  
                cy.visit("https://epanel.enetsites.com/infographic/infographic/1/0")         
                po.pureCustomTemplateSave();    
            })
            it('C2 - Upload image and edit components',()=>{
                cy.wait(1000)
                po.scaleCheck()
            })
            it('C3 - Check the design of H2H',()=>{
                // po.changeFormatFunction()
                po.singleH2HTemplateDesign()
            })            
            
            it('C5 - Change infograph data',()=>{
                po.changeDataH2h()
            })
            it('C7 - Change different component properties',()=>{
                po.changeComponentsPropertiesH2HCustomTemplate()
            })
            it('C8 - Change different texts',()=>{
                po.changeTextsH2H()
            })
            it('C9 - Reset everything',()=>{
                po.resetSettingsH2HCustomTemplate()
            })
            it("C10 -Check the search functionalities",()=>{
                po.searchTwoPlayersFunctionalities()
            })
            it('C11 - Check editor window',()=>{
                po.h2hMovableEditorWindow()
            })
            it("C12 - Delete all custom templates ",()=>{
                po.separateDeleteDraftFunction()
                
            })
            
        })
            
           
                        
})       
        