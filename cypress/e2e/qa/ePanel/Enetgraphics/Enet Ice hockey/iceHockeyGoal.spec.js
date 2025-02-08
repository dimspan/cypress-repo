import { enetgraphics_styles_po } from "../../../PageObject/ePanel/All infographics/checkStylesAndProperties.po";
import { enet_player_stats_po } from "../../../PageObject/ePanel/All infographics/checkEditableSection.po";
import {enetgraphics_images_po } from "../../../PageObject/ePanel/All infographics/checkImagesSection.po"
import { enetgraphics_data_iceHockey_player_event_po } from "../../../PageObject/ePanel/All infographics/checkDataSection.po"
import {enetgraphics_statistics_po} from "../../../PageObject/ePanel/All infographics/checkStatisticsSection.po"


let datapo = new enetgraphics_data_iceHockey_player_event_po;
let po = new enetgraphics_styles_po;
let evpo = new enet_player_stats_po;
let impo = new enetgraphics_images_po;
let stpo = new enetgraphics_statistics_po;

let url = null;

describe('[IH]Test the design and functionalities of EG iceHockeyGoal ',
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

        po.selectedTemplate = ' EG Ice Hockey Goal '
        po.firstPlayerName = po.secondPlayerName
        po.firstTeam = '#home-participant'
        po.secondTeam = '#away-participant'
        po.firstTeamScore = '#event-result-home-scored'
        po.secondTeamScore = '#event-result-away'
        po.title = '#goal'
        datapo.homeTeamName = '#home-participant'
        datapo.awayTeamName = '#away-participant'
        datapo.typedText = ["All","Mark Stone","Bulgarian","dd.mm.yyyy"]
        // datapo.fistElementInLoop = 5
        datapo.langDropdownIndex = 7
        datapo.eventTypedName = "Los Angeles Kings-Vegas Golden Knights"
        datapo.homeParticipantName = '#home-participant'
        datapo.homePartExpTranslationText = 'Лос Анджелис Кингс'
        datapo.eventTypeFieldExpText = 'Los Angeles Kings-Vegas Golden Knights '
        evpo.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)',
        '.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)','.ep_ig_edditable_component:eq(6)',
        '.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)','.ep_ig_edditable_component:eq(12)']
        evpo.highlightedEditableAreasCount = 13
        evpo.editableElementsCount = 13
        impo.scalePopUpContainer = '.ep_ig_cropper_zoom_container.right_image'

        context('[IH]PC view tests Goal', () =>{    

            it('[IH]C1 - Visit the url and login to ePanel' , () => {                       
                cy.visit(url);                
                po.loginForm();               
            })

            it('[IH]C2 - Get to the EG Ice Hockey Goal template',()=>{
                po.openExactGraphic()
                // cy.wait(1000)
                po.allSideSectionExpCol()
            })
           
            it('[IH]C3 - Check the design of the texts in the selected template',()=>{
                po.iceHockeyGoalTemplDesign()
            })

            it('[IH]C4 - Check the design of the buttons texts',()=>{
                evpo.buttonTextsStyles()
            })
            
            it('[IH]C5 - Check "reset settings to default" button function',()=>{
                evpo.resetSettingsToDefault()
            })

            it('[IH]C6 - Check "highlight editable areas" button function',()=>{
                evpo.highlightEditableAreas()
            })

            it('[IH]C7 - Check "save custom template" button function',()=>{
                evpo.saveCustomTemplateButton()
                evpo.checkIfNewTemplateExists()
                
            })

            it('[IH]C8 - Check "save custom template as" button function',()=>{
                po.openExactGraphic()
                evpo.saveCustomTemplateAsButton()
            })

            it('[IH]C9 - Check "export" button function and pop-up',()=>{
                //po.openSingleH2HResults()
                evpo.exportButtonAndPopUp()
            })

            it('[IH]C10 - Check when there is a change if it is one only element only',()=>{
                
                evpo.checkIfChangesAreOnlyOnOneElement()
            })

            it('[IH]C11 - Check font size and text decoration functions',()=>{
                evpo.fontSizeTestDecorationAllElements()
            })

            it('[IH]C12 - Check the draggable elements in the text decoration pop-up',()=>{
                cy.wait(1000)
                evpo.fontSizeTestDecorationDragableElements()
            })

            it('[IH]C13 - Check the images section text styles',()=>{
                impo.textsStylesByDesign()
            })

            it('[IH]C14 - Check the image library button and functions',()=>{
                impo.checkImageLibrabryButtonPopUp()
            })

            it('[IH]C15 - Check the scale pop-up functions',()=>{
                impo.checkScalePopUp()
            })

            it('[IH]C16 - Check the remove background toggle and tooltip',()=>{
                impo.removeBackgroundToggle()
            })

            it('[IH]C17 - Check the Data section all texts',()=>{
                datapo.textsStylesByDesign()
            })

            it('[IH]C18 - Check the event type field',()=>{
                datapo.eventField()
                
            })

            it('[IH]C19 - Check all the data drop downs',()=>{
                datapo.dataDropDowns()
                
            })

            // // it('[IH]C20 - Check the events stats from the stats dropdowns',()=>{
            // //     stpo.checkStatsDropdowns()
                
            // // })

            it('[IH]C21 - Delete all the created custom templates',()=>{
                evpo.deleteDrafts()
                
            })

            
        })
            
})       
        