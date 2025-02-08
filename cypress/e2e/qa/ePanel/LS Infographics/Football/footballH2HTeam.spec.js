import { enetgraphics_styles_po } from "../../../PageObject/ePanel/All infographics/checkStylesAndProperties.po";
import { enet_h2h_results_po } from "../../../PageObject/ePanel/All infographics/checkEditableSection.po";
import {enetgraphics_images_po } from "../../../PageObject/ePanel/All infographics/checkImagesSection.po"
import { enetgraphics_data_team_h2h_po } from "../../../PageObject/ePanel/All infographics/checkDataSection.po"
import {enetgraphics_matches_po} from "../../../PageObject/ePanel/All infographics/checkMatchesSection.po"
// import { enetgraphics_images_po } from "../../../PageObject/ePanel/All infographics/checkImagesSection.po";

let datapo = new enetgraphics_data_team_h2h_po;
let po = new enetgraphics_styles_po;
let h2hpo = new enet_h2h_results_po;
let impo = new enetgraphics_images_po;
let mapo = new enetgraphics_matches_po;

let url = null;

describe('Test the design and functionalities of LS Football H2H team',
{
    retries: {
      runMode: 0,
      openMode: 0,
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

        po.selectedTemplate = ' LS Football H2H Team '
        po.title = '#head_to_head_label'
        h2hpo.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)','.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)',
        '.ep_ig_edditable_component:eq(6)','.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)','.ep_ig_edditable_component:eq(12)']
        h2hpo.highlightedEditableAreasCount = 13
        h2hpo.editableElementsCount = 13
        datapo.fistElementInLoop = 6
        datapo.textToCheckLanguage = '#home-name'
        datapo.eventsNameHeadersExpText = 'Тампа Бей Лайтнинг'
        datapo.tourTempDropdownIndex = 6
        datapo.langDropdownIndex = 7


        context('PC view tests LS Football H2H Team', () =>{    

            it('C1 - Visit the url and login to ePanel' , () => {                       
                cy.visit(url);                
                po.loginForm();               
            })

            it('C2 - Get to the LS Football H2H Team template',()=>{
                po.openExactGraphic()
                // cy.wait(1000)
                po.allSideSectionExpCol()
            })
           
            it('C3 - Check the design of the texts in the selected template',()=>{
                po.lsFootballH2HTemplateDesign()
            })

            it('C4 - Check the design of the buttons texts',()=>{
                h2hpo.buttonTextsStyles()
            })
            
            it('C5 - Check "reset settings to default" button function',()=>{
                h2hpo.resetSettingsToDefault()
            })

            it('C6 - Check "highlight editable areas" button function',()=>{
                h2hpo.highlightEditableAreas()
            })

            it('C7 - Check "save custom template" button function',()=>{
                h2hpo.saveCustomTemplateButton()
                h2hpo.checkIfNewTemplateExists()
                
            })

            it('C8 - Check "save custom template as" button function',()=>{
                po.openExactGraphic()
                h2hpo.saveCustomTemplateAsButton()
            })

            it('C9 - Check "export" button function and pop-up',()=>{
                //po.openSingleH2HResults()
                h2hpo.exportButtonAndPopUp()
            })

            it('C10 - Check when there is a change if it is one only element only',()=>{
                //po.openSingleH2HResults()
                h2hpo.checkIfChangesAreOnlyOnOneElement()
            })

            it('C11 - Check font size and text decoration functions',()=>{
                h2hpo.fontSizeTestDecorationAllElements()
            })

            it('C12 - Check the draggable elements in the text decoration pop-up',()=>{
                h2hpo.fontSizeTestDecorationDragableElements()
            })

            it('C13 - Check the images section text styles',()=>{
                impo.textsStylesByDesign()
            })

            it('C14 - Check the image library button and functions',()=>{
                impo.checkImageLibrabryButtonPopUp()
            })

            it('C15 - Check the scale pop-up functions',()=>{
                impo.checkScalePopUp()
            })

            it('C16 - Check the remove background toggle and tooltip',()=>{
                impo.removeBackgroundToggle()
            })

            it('C17 - Check the Data section all texts',()=>{
                datapo.textsStylesByDesign()
            })

            // it('C18 - Check the teams type fields',()=>{
            //     datapo.teamFields()
                
            // })

            // it('C19 - Check all the data drop downs',()=>{
            //     datapo.dataDropDowns()
                
            // })

            // it('C20 - Check the events text have participants names',()=>{
            //     mapo.textsInMatches()
                
            // })

            it('C21 - Delete all the created custom templates',()=>{
                h2hpo.deleteDrafts()
                
            })

            
        })
            
})       
        