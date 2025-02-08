import { enetgraphics_styles_po } from "../../../PageObject/ePanel/All infographics/checkStylesAndProperties.po";
import { enet_event_stats_po } from "../../../PageObject/ePanel/All infographics/checkEditableSection.po";
import {enetgraphics_images_po } from "../../../PageObject/ePanel/All infographics/checkImagesSection.po"
import { ls_top_11_po } from "../../../PageObject/ePanel/All infographics/checkDataSection.po"
import {enetgraphics_statistics_po} from "../../../PageObject/ePanel/All infographics/checkStatisticsSection.po"


let datapo = new ls_top_11_po;
let po = new enetgraphics_styles_po;
let evpo = new enet_event_stats_po;
let impo = new enetgraphics_images_po;
let stpo = new enetgraphics_statistics_po;

let url = null;

describe('Test the design and functionalities of LS Football Top 11',
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

        po.selectedTemplate = ' LS Football Top 11 '
        po.firstPlayerName = "#player-name"
        po.title = '#top-11'
        evpo.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)','.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)',
        '.ep_ig_edditable_component:eq(6)','.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)', '.ep_ig_edditable_component:eq(12)','.ep_ig_edditable_component:eq(13)','.ep_ig_edditable_component:eq(14)','.ep_ig_edditable_component:eq(15)','.ep_ig_edditable_component:eq(16)','.ep_ig_edditable_component:eq(17)','.ep_ig_edditable_component:eq(18)',
        '.ep_ig_edditable_component:eq(19)','.ep_ig_edditable_component:eq(20)','.ep_ig_edditable_component:eq(21)','.ep_ig_edditable_component:eq(22)','.ep_ig_edditable_component:eq(23)','.ep_ig_edditable_component:eq(24)','.ep_ig_edditable_component:eq(25)',
        '.ep_ig_edditable_component:eq(26)','.ep_ig_edditable_component:eq(27)','.ep_ig_edditable_component:eq(28)','.ep_ig_edditable_component:eq(29)','.ep_ig_edditable_component:eq(30)','.ep_ig_edditable_component:eq(31)','.ep_ig_edditable_component:eq(32)','.ep_ig_edditable_component:eq(33)']
        evpo.highlightedEditableAreasCount = 34
        evpo.editableElementsCount = 34
        datapo.homePlayerName = '#player-name'
        datapo.awayPlayerName = '#event-away-name'
        datapo.eventTypedName = "Boston Bruins-New York Rangers"
        datapo.textTypedInEventField = "Boston Bruins-New York Rangers "
        datapo.typedText = ["Real Madrid-Manchester City","Ederson","Real Madrid-Manchester City","Carvajal","Real Madrid-Manchester City",
            "Rudiger","Real Madrid-Manchester City","Nacho","Real Madrid-Manchester City","Mendy","Real Madrid-Manchester City","Valverde","Real Madrid-Manchester City","Kroos",
            "Real Madrid-Manchester City","Bellingham","Real Madrid-Manchester City","Vinicius","Real Madrid-Manchester City","Haaland","Real Madrid-Manchester City","Foden"]
        datapo.fistElementInLoop = 6
        datapo.tourTempDropdownIndex = 6
        datapo.langDropdownIndex = 9
        datapo.languageTypedIndex = 3
        datapo.statHeaderExpText = "Góly"
        datapo.dataHeader = '.ep_ig_data_title.epi-down:eq(1)'
        impo.scalePopUpContainer = '.ep_ig_cropper_zoom_container.right_image'
        stpo.startStatsArray = 12
        stpo.endStatsArray = 18
        stpo.statsDropdowns = '.v-select__slot'
        stpo.typedStatistic = 'Shots'

        context('PC view tests LS Football Top 11', () =>{    

            it('C1 - Visit the url and login to ePanel' , () => {                       
                cy.visit(url);                
                po.loginForm();               
            })

            it('C2 - Get to the Football Top 11 template',()=>{
                po.openExactGraphic()
                // cy.wait(1000)
                // po.allSideSectionExpCol()
            })
           
            it('C3 - Check the design of the texts in the selected template',()=>{
                po.lsFootballTop11TemplateDesign()
            })

            it('C4 - Check the design of the buttons texts',()=>{
                evpo.buttonTextsStyles()
            })
            
            // it('C5 - Check "reset settings to default" button function',()=>{
            //     evpo.resetSettingsToDefault()
            // })

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

            // it('C13 - Check the images section text styles',()=>{
            //     impo.textsStylesByDesign()
            // })

            // it('C14 - Check the image library button and functions',()=>{
            //     impo.checkImageLibrabryButtonPopUp()
            // })

            // it('C15 - Check the scale pop-up functions',()=>{
            //     impo.checkScalePopUp()
            // })

            // it('C16 - Check the remove background toggle and tooltip',()=>{
            //     impo.removeBackgroundToggle()
            // })

            // it('C17 - Check the Data section all texts',()=>{
            //     datapo.textsStylesByDesign()
            // })

            // // it('C18 - Check the players type fields',()=>{
            // //     datapo.eventField()
                
            // // })

            // it('C19 - Check all the data drop downs',()=>{
            //     datapo.dataDropDowns()
                
            // })

            // // // it('C20 - Check the events stats from the stats dropdowns',()=>{
            // // //     stpo.checkStatsDropdowns()
                
            // // // })

            it('C21 - Delete all the created custom templates',()=>{
                evpo.deleteDrafts()
                
            })

            
        })
            
})       
        