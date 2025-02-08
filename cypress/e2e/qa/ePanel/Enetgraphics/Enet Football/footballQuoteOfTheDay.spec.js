import { enetgraphics_styles_po } from "../../../PageObject/ePanel/All infographics/checkStylesAndProperties.po";
import { enet_player_stats_po } from "../../../PageObject/ePanel/All infographics/checkEditableSection.po";
import {enetgraphics_images_po } from "../../../PageObject/ePanel/All infographics/checkImagesSection.po"
import { enetgraphics_data_football_player_event_po } from "../../../PageObject/ePanel/All infographics/checkDataSection.po"
import {enetgraphics_statistics_po} from "../../../PageObject/ePanel/All infographics/checkStatisticsSection.po"


let datapo = new enetgraphics_data_football_player_event_po;
let po = new enetgraphics_styles_po;
let evpo = new enet_player_stats_po;
let impo = new enetgraphics_images_po;
let stpo = new enetgraphics_statistics_po;

let url = null;

describe('[FB]Test the design and functionalities of EG QuoteOfTheDay ',
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

        po.selectedTemplate = ' EG Quote Of The Day '
        po.firstPlayerName = po.secondPlayerName
        evpo.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)']
        evpo.highlightedEditableAreasCount = 2
        evpo.editableElementsCount = 2

        context('[FB]PC view tests EG Quote of the day', () =>{    

            it('[FB]C1 - Visit the url and login to ePanel' , () => {                       
                cy.visit(url);                
                po.loginForm();               
            })

            it('[FB]C2 - Get to the EG Quote of the day template',()=>{
                po.openExactGraphic()
                // cy.wait(1000)
                po.allSideSectionExpCol()
            })
           
            it('[FB]C3 - Check the design of the texts in the selected template',()=>{
                po.footballQuoteOfTheDayTemplDesign()
            })

            it('[FB]C4 - Check the design of the buttons texts',()=>{
                evpo.buttonTextsStyles()
            })
            
            it('[FB]C5 - Check "reset settings to default" button function',()=>{
                evpo.resetSettingsToDefault()
            })

            it('[FB]C6 - Check "highlight editable areas" button function',()=>{
                evpo.highlightEditableAreas()
            })

            it('[FB]C7 - Check "save custom template" button function',()=>{
                evpo.saveCustomTemplateButton()
                evpo.checkIfNewTemplateExists()
                
            })

            it('[FB]C8 - Check "save custom template as" button function',()=>{
                po.openExactGraphic()
                evpo.saveCustomTemplateAsButton()
            })

            it('[FB]C9 - Check "export" button function and pop-up',()=>{
                //po.openSingleH2HResults()
                evpo.exportButtonAndPopUp()
            })

            it('[FB]C10 - Check when there is a change if it is one only element only',()=>{
                
                evpo.checkIfChangesAreOnlyOnOneElement()
            })

            it('[FB]C11 - Check font size and text decoration functions',()=>{
                evpo.fontSizeTestDecorationAllElements()
            })

            it('[FB]C12 - Check the draggable elements in the text decoration pop-up',()=>{
                cy.wait(1000)
                evpo.fontSizeTestDecorationDragableElements()
            })

            it('[FB]C13 - Check the images section text styles',()=>{
                impo.textsStylesByDesign()
            })

            it('[FB]C14 - Check the image library button and functions',()=>{
                impo.checkImageLibrabryButtonPopUp()
            })

            // it('[FB]C15 - Check the scale pop-up functions',()=>{
            //     impo.checkScalePopUp()
            // })

            it('[FB]C16 - Check the remove background toggle and tooltip',()=>{
                impo.removeBackgroundToggle()
            })

            // it('[FB]C17 - Check the Data section all texts',()=>{
            //     datapo.textsStylesByDesign()
            // })

            // it('[FB]C18 - Check the players type fields',()=>{
            //     datapo.eventField()
                
            // })

            // // it('[FB]C19 - Check all the data drop downs',()=>{
            // //     datapo.dataDropDowns()
                
            // // })

            // // // // it('[FB]C20 - Check the events stats from the stats dropdowns',()=>{
            // // // //     stpo.checkStatsDropdowns()
                
            // // // // })

            it('[FB]C21 - Delete all the created custom templates',()=>{
                evpo.deleteDrafts()
                
            })

            
        })
            
})       
        