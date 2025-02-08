import { enetgraphics_styles_po } from "../../../PageObject/ePanel/All infographics/checkStylesAndProperties.po";
import { enet_event_stats_po } from "../../../PageObject/ePanel/All infographics/checkEditableSection.po";
import {enetgraphics_images_po } from "../../../PageObject/ePanel/All infographics/checkImagesSection.po"
import { enetgraphics_data_single_event_po } from "../../../PageObject/ePanel/All infographics/checkDataSection.po"
import {enetgraphics_statistics_po} from "../../../PageObject/ePanel/All infographics/checkStatisticsSection.po"


let datapo = new enetgraphics_data_single_event_po;
let po = new enetgraphics_styles_po;
let evpo = new enet_event_stats_po;
let impo = new enetgraphics_images_po;
let stpo = new enetgraphics_statistics_po;

let url = null;

describe('Test the design and functionalities of LS Ice hockey eventStats',
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

        po.selectedTemplate = ' LS Ice Hockey Event Stats '
        evpo.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)','.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)',
        '.ep_ig_edditable_component:eq(6)','.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)','.ep_ig_edditable_component:eq(12)','.ep_ig_edditable_component:eq(13)','.ep_ig_edditable_component:eq(14)','.ep_ig_edditable_component:eq(15)','.ep_ig_edditable_component:eq(16)',
        '.ep_ig_edditable_component:eq(17)','.ep_ig_edditable_component:eq(18)','.ep_ig_edditable_component:eq(19)','.ep_ig_edditable_component:eq(20)','.ep_ig_edditable_component:eq(21)']
        evpo.highlightedEditableAreasCount = 22
        evpo.editableElementsCount = 22
        datapo.eventTypedName = "Boston Bruins-New York Rangers"
        datapo.textTypedInEventField = "Boston Bruins-New York Rangers "
        datapo.typedText = ["Period 1","NHL Preseason (USA)","2023/2024","Czech","dd.mm.yy"]
        datapo.fistElementInLoop = 6
        datapo.tourTempDropdownIndex = 6
        datapo.langDropdownIndex = 9
        datapo.languageTypedIndex = 3
        datapo.statHeaderExpText = "Střely"

        context('PC view tests LS Event Stats', () =>{    

            it('C1 - Visit the url and login to ePanel' , () => {                       
                cy.visit(url);                
                po.loginForm();               
            })

            it('C2 - Get to the LS Ice hockey Event Stats template',()=>{
                po.openExactGraphic()
                // cy.wait(1000)
                // po.allSideSectionExpCol()
            })
           
            it('C3 - Check the design of the texts in the selected template',()=>{
                po.lsSingleEventStatsTemplateDesign()
            })

            it('C4 - Check the design of the buttons texts',()=>{
                evpo.buttonTextsStyles()
            })
            
            it('C5 - Check "reset settings to default" button function',()=>{
                evpo.resetSettingsToDefault()
            })

            it('C6 - Check "highlight editable areas" button function',()=>{
                evpo.highlightEditableAreas()
            })

            it('C7 - Check "save custom template" button function',()=>{
                evpo.saveCustomTemplateButton()
                evpo.checkIfNewTemplateExists()
                
            })

            it('C8 - Check "save custom template as" button function',()=>{
                po.openExactGraphic()
                evpo.saveCustomTemplateAsButton()
            })

            it('C9 - Check "export" button function and pop-up',()=>{
                //po.openSingleH2HResults()
                evpo.exportButtonAndPopUp()
            })

            it('C10 - Check when there is a change if it is one only element only',()=>{
                //po.openSingleH2HResults()
                evpo.checkIfChangesAreOnlyOnOneElement()
            })

            it('C11 - Check font size and text decoration functions',()=>{
                evpo.fontSizeTestDecorationAllElements()
            })

            it('C12 - Check the draggable elements in the text decoration pop-up',()=>{
                evpo.fontSizeTestDecorationDragableElements()
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

            it('C18 - Check the players type fields',()=>{
                datapo.eventField()
                
            })

            it('C19 - Check all the data drop downs',()=>{
                datapo.dataDropDowns()
                
            })

            // // it('C20 - Check the events stats from the stats dropdowns',()=>{
            // //     stpo.checkStatsDropdowns()
                
            // // })

            it('C21 - Delete all the created custom templates',()=>{
                evpo.deleteDrafts()
                
            })

            
        })
            
})       
        