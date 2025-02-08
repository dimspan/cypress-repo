import 'cypress-real-events/support';

export class enetgraphics_data_h2h_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.playerHeader = '.ep_ig_serch_title'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'

        //player fields
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        this.homePlayerName = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.playerTypeFieldText = ["Grigor Dimitrov", "Novak Djokovic"]
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content'
        this.dropdDownListFirstEl = '.v-list-item__mask'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.typedText = ["Grand Slam","Hard","Bulgarian"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.eventsNameHeaders = '.ep_ig_stat_header'
        this.eventsNameHeadersExpText = 'Голям шлем'
        this.noDataMessage = '.v-list-item__title'
        this.fistElementInLoop = 5
        this.lastElementInLoop = 8
        this.tourTempDropdownIndex = 5
        this.langDropdownIndex = 7
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    playerFields(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.checkParticipantNameEqlParticipantTypedNameFromAnArray(this.eventTypeField,this.playerTypeFieldText,this.searchListFirstPLayer,this.playerName)
        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for player...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(1).click().type("Novak Djokovic")
        cy.get(this.playerHeader).eq(1).click()
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //click again in the type field and select something from the drop-down
        cy.get(this.eventTypeField).eq(1).click()
        cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(1).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql("Novak Djokovic ")
        })
    }

    dataDropDowns(){ 
        //check the font size drop down list and select one option
        cy.dropDownLitWithFirstOptionFromAray(this.fistElementInLoop,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.dropdDownListFirstEl,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownListClosing(this.fistElementInLoop,this.lastElementInLoop,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //grand slam and language
        cy.get(this.eventsNameHeaders).eq(0).invoke('text').then((nameHeader)=> {
            expect(nameHeader).contain(this.eventsNameHeadersExpText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(this.tourTempDropdownIndex).click().type('Wrong test')
        cy.get(this.noDataMessage).eq(0).invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(this.langDropdownIndex).click({force: true} ).type('English') 
        cy.get(this.dropdDownListFirstEl).click()
    }

    //for tennis singles player last result
    playerField(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.checkParticipantNameEqlParticipantTypedName(this.eventTypeField,this.playerTypeFieldText,this.searchListFirstPLayer,this.playerName)
        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for player...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.homePlayerTypeFieldXButton).click()
        cy.get(this.eventTypeField).click().type("Novak Djokovic")
        cy.get(this.playerHeader).click()
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //click again in the type field and select something from the drop-down
        cy.get(this.eventTypeField).click()
        cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql("Novak Djokovic ")
        })
    }
}

export class enetgraphics_data_single_event_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.eventHeader = '.ep_ig_event_search'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'
        this.eventTypeFieldXButton = '.ep_ig_close_search_input'

        //event field
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        // this.homePlayerName = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.eventTypedName = "Grigor Dimitrov-Novak Djokovic"
        this.textTypedInEventField = "Grigor Dimitrov-Novak Djokovic "
        this.homePlayerName = '#home-name'
        this.awayPlayerName = '#away-name'
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.dropdDownListFirstEl = '.v-list-item__mask'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.typedText = ["ATP","2024","Hong Kong Tennis Open","Andrey Rublev-Emil Ruusuvuori","Bulgarian"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.statHeaders = '.ep_ig_label_class'
        this.statHeaderExpText = 'Асове'
        this.noDataMessage = '.v-list-item__title'
        this.fistElementInLoop = 5
        this.tourTempDropdownIndex = 5
        this.langDropdownIndex = 6  
        this.languageTypedIndex = 4  
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    eventField(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            cy.get(this.homePlayerName).invoke('text').then((homeName)=>{
                let trimmedHomeName = homeName.trim()
                expect(trimmedText).contain(trimmedHomeName)
            })

            cy.get(this.awayPlayerName).invoke('text').then((awayName)=>{
                let trimmedAwayName = awayName.trim()
                expect(trimmedText).contain(trimmedAwayName)
            })

        })        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for event...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        cy.get(this.eventTypeFieldXButton).click()
        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(0).click().type(this.eventTypedName)
        cy.get(this.eventHeader).eq(0).click()
        cy.get(this.tourTemplateDropdownList).should('not.exist')
        //click again in the type field and select something from the drop-down
        // cy.get('.ep_ig_event_input_search').eq(0).click()
        // cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(0).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql(this.textTypedInEventField)
        })

        //delete everything from the event type field
        cy.get(this.eventTypeFieldXButton).click()
    }

    dataDropDowns(){ 
        //check the font size drop down list and select one option
        cy.dropDownLitWithFirstOptionFromAray(this.fistElementInLoop,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.dropdDownListFirstEl,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        // cy.checkDropdownDataListClosing(5,8,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //grand slam and language
        cy.get(this.statHeaders).eq(0).invoke('text').then((statHeader)=> {
            expect(statHeader).contain(this.statHeaderExpText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(this.tourTempDropdownIndex).click().type('Wrong test')
        cy.get(this.noDataMessage).eq(0).invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(this.langDropdownIndex).click().type('English') 
        cy.get(this.dropdDownListFirstEl).click({force: true} )
    }
}

export class enetgraphics_data_single_player_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.eventHeader = '.ep_ig_event_search'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'
        this.eventTypeFieldXButton = '.ep_ig_close_search_input'

        //event field
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        this.eventTypedName = "Iga Swiatek"
        this.homePlayerName = '#away-name'
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.dropdDownListFirstEl = '.v-list-item__mask'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.typedText = ["WTA Women","2024","Bulgarian"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.statHeaders = '.ep_ig_label_class'
        this.homePlayerExpTranslationText = 'Ига Швьонтек'
        this.noDataMessage = '.v-list-item__title'
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.get('body').then(($body) => {
            if ($body.find(this.eventHeader).length > 0) {
                cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')            
            }
        });
        // cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    eventField(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            cy.get(this.homePlayerName).invoke('text').then((homeName)=>{
                let trimmedHomeName = homeName.trim()
                expect(trimmedText).contain(trimmedHomeName)
            })

        })        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for player...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        cy.get(this.eventTypeFieldXButton).click()
        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(0).click().type(this.eventTypedName)
        cy.get(this.eventHeader).eq(0).click()
        cy.get(this.tourTemplateDropdownList).should('not.exist')
        //click again in the type field and select something from the drop-down
        // cy.get('.ep_ig_event_input_search').eq(0).click()
        // cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(0).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql("Iga Swiatek ")
        })

        //delete everything from the event type field
        cy.get(this.eventTypeFieldXButton).click()
    }

    dataDropDowns(){ 
        //enter a name and select the needed player
        cy.get(this.eventTypeField).eq(0).type(this.eventTypedName)
        cy.get('.ep_ig_player_name').click()

        //check the font size drop down list and select one option
        cy.dropDownLitWithFirstOptionFromAray(4,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.dropdDownListFirstEl,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownDataListClosing(4,6,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //wta women and language
        cy.get(this.homePlayerName).eq(0).invoke('text').then((homePlayerName)=> {
            expect(homePlayerName).contain(this.homePlayerExpTranslationText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(5).click().type('Wrong test')
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(6).click().type('English') 
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').click()
    }
}

export class enetgraphics_data_football_player_event_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.eventHeader = '.ep_ig_event_search'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'
        this.eventTypeFieldXButton = '.ep_ig_close_search_input'
        this.versusName = '.ig_lbl_versus'

        //event field
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        this.eventTypedName = "Manchester United-Liverpool"
        this.homePlayerName = '#away-name'
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.typedText = ["premier league","2022/2023","Premier League","Manchester United-Liverpool","Virgil van Dijk","Bulgarian"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.statHeaders = '.ep_ig_label_class'
        this.homePlayerExpTranslationText = 'Върджил ван Дайк'
        this.noDataMessage = '.v-list-item__title'
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    eventField(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            cy.get(this.versusName).invoke('text').then((versusTeamName)=>{
                let trimmedVersusName = versusTeamName.trim()
                let cleanedText = trimmedVersusName.replace('vs ', ''); // This regex removes all non-word characters except spaces
                expect(trimmedText).contain(cleanedText)
            })

        })        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for event...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        cy.get(this.eventTypeFieldXButton).click()
        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(0).click().type(this.eventTypedName)
        cy.get(this.eventHeader).eq(0).click()
        cy.get(this.tourTemplateDropdownList).should('not.exist')
        //click again in the type field and select something from the drop-down
        // cy.get('.ep_ig_event_input_search').eq(0).click()
        // cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(0).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql("Manchester United-Liverpool ")
        })

        //delete everything from the event type field
        cy.get(this.eventTypeFieldXButton).click()
    }

    dataDropDowns(){ 
        //enter a name and select the needed player
        cy.get(this.eventTypeField).eq(0).type(this.eventTypedName)
        cy.get('.ep_ig_stage_flag_and_event_wrapper').eq(0).click({force: true})

        //check the font size drop down list and select one option
        cy.dropDownLitWithFirstOptionFromAray(4,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.tourTemplateDropdownList,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownDataListClosing(4,6,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //wta women and language
        cy.get(this.homePlayerName).eq(0).invoke('text').then((homePlayerName)=> {
            expect(homePlayerName).contain(this.homePlayerExpTranslationText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(5).click().type('Wrong test')
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(6).click().type('English') 
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').click()
    }
}

export class enetgraphics_data_iceHockey_player_event_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.eventHeader = '.ep_ig_event_search'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'
        this.eventTypeFieldXButton = '.ep_ig_close_search_input'
        this.versusName = '.ig_lbl_versus'

        //event field
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        this.eventTypedName = "New York Rangers-Tampa Bay Lightning"
        this.homeTeamName = '#team_1'
        this.awayTeamName = '#team_2'
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']
        this.eventTypeFieldExpText = "New York Rangers-Tampa Bay Lightning "

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.dropdDownListFirstEl = '.v-list-item__mask'
        this.homeParticipantName = '#team_title_1'
        this.typedText = ["premier league","2022/2023","Premier League","Manchester United-Liverpool","Virgil van Dijk","Bulgarian"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.statHeaders = '.ep_ig_label_class'
        this.homePartExpTranslationText = 'Ню Йорк Рейнджърс'
        this.noDataMessage = '.v-list-item__title'
        this.fistElementInLoop = 4
        this.langDropdownIndex = 6

    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    eventField(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            cy.get(this.homeTeamName).invoke('text').then((homeName)=>{
                let trimmedHomeName = homeName.trim()
                expect(trimmedText).contain(trimmedHomeName)
            })

            cy.get(this.awayTeamName).invoke('text').then((awayName)=>{
                let trimmedAwayName = awayName.trim()
                expect(trimmedText).contain(trimmedAwayName)
            })

        })          
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for event...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        cy.get(this.eventTypeFieldXButton).click()
        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(0).click().type(this.eventTypedName)
        cy.get(this.eventHeader).eq(0).click()
        cy.get(this.tourTemplateDropdownList).should('not.exist')
        //click again in the type field and select something from the drop-down
        // cy.get('.ep_ig_event_input_search').eq(0).click()
        // cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(0).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql(this.eventTypeFieldExpText)
        })

        //delete everything from the event type field
        cy.get(this.eventTypeFieldXButton).click()
    }

    dataDropDowns(){ 
        //enter a name and select the needed player
        cy.get(this.eventTypeField).eq(0).type(this.eventTypedName)
        cy.get('.ep_ig_stage_flag_and_event_wrapper').eq(0).click({force: true})

        //check the font size drop down list and select one option
        cy.dropDownLitWithFirstOptionFromAray(this.fistElementInLoop,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.dropdDownListFirstEl,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownDataListClosing(5,7,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //wta women and language
        cy.get(this.homeParticipantName).eq(0).invoke('text').then((homePartName)=> {
            expect(homePartName).contain(this.homePartExpTranslationText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(5).click().type('Wrong test')
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(this.langDropdownIndex).click({force: true}).type('English') 
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').click()
    }
}

export class enetgraphics_data_team_h2h_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.playerHeader = '.ep_ig_serch_title'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'

        //player fields
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        this.homePlayerName = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.playerTypeFieldText = ["Tampa Bay Lightning", "New York Rangers"]
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.dropdDownListFirstEl = '.v-list-item__mask'
        this.typedText = ["NHL (USA)","Bulgarian","dd.mm.yyyy"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.eventsNameHeaders = '.ep_ig_stat_header'
        this.textToCheckLanguage = '.ep_ig_event-league'
        this.eventsNameHeadersExpText = 'НХЛ'
        this.noDataMessage = '.v-list-item__title'
        this.fistElementInLoop = 5
        this.tourTempDropdownIndex = 5
        this.langDropdownIndex = 6
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    teamFields(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.checkParticipantNameEqlParticipantTypedNameFromAnArray(this.eventTypeField,this.playerTypeFieldText,this.searchListFirstPLayer,this.playerName)
        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for team...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(1).click().type("New York Rangers")
        cy.get(this.playerHeader).eq(1).click()
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //click again in the type field and select something from the drop-down
        cy.get(this.eventTypeField).eq(1).click()
        cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(1).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql("New York Rangers ")
        })
    }

    dataDropDowns(){ 
        //check the font size drop down list and select one option
        cy.dropDownLitWithFirstOptionFromAray(this.fistElementInLoop,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.dropdDownListFirstEl,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        // cy.checkDropdownListClosing(5,8,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //grand slam and language
        cy.get(this.textToCheckLanguage).eq(0).invoke('text').then((nameText)=> {
            expect(nameText).contain(this.eventsNameHeadersExpText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(this.tourTempDropdownIndex).click().type('Wrong test')
        cy.get(this.noDataMessage).eq(0).invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(this.langDropdownIndex).click({force: true}).type('English') 
        cy.get(this.tourTemplateDropdownList).eq(1).click()
    }
}

export class ls_top_11_po{
    constructor(){   
        //all texts
        this.dataHeader = '.ep_ig_data_title.epi-down:eq(2)'
        this.eventHeader = '.ep_ig_event_search'
        this.dataOptionsHeader = '.v-label.v-label--active.theme--light'
        this.eventTypeField = '.ep_ig_event_input_search_wrapper'
        this.eventTypeFieldXButton = '.ep_ig_close_search_input'

        //event field
        this.homePlayerTypeFieldXButton = '.ep_ig_close_search_input'
        this.searchListFirstPLayer = '.ep_ig_event_wrapper:eq(0)'
        this.eventTypedName = "Iga Swiatek"
        this.homePlayerName = '#away-name'
        this.playerName = ['.ep_ig_home_name.ep_ig_edditable_field_container','.ep_ig_away_name.ep_ig_edditable_field_container']

        //data drop downs
        this.tournamentTemplateDropdown = '.v-input__slot'
        this.tourTemplateDropdownList = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.dropdDownListFirstElEvent = '.ep_ig_event-item-name'
        this.dropdDownListFirstElPlayer = '.ep_ig_player-item-name'
        this.tourTemplateListFirstElement = '.v-list-item.v-list-item--link.theme--light'
        this.typedText = ["WTA Women","2024","Bulgarian"]
        this.layoutHeaderText = '.ep_ig_data_title.epi-down:eq(1)'
        this.statHeaders = '.ep_ig_label_class'
        this.homePlayerExpTranslationText = 'Ига Швьонтек'
        this.noDataMessage = '.v-list-item__title'
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataHeader,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.get('body').then(($body) => {
            if ($body.find(this.eventHeader).length > 0) {
                cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')            
            }
        });
        // cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventHeader,'Inter, sans-serif','14px','700','0px','static','auto')
        //Data options header - like tournament template, surface, language, etc.
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.dataOptionsHeader,'Inter, sans-serif','14px','700','0px','absolute','0px')
    }

    eventField(){ 
        //check if the names typed in the field are the same as the ones from the editable section
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            cy.get(this.homePlayerName).invoke('text').then((homeName)=>{
                let trimmedHomeName = homeName.trim()
                expect(trimmedText).contain(trimmedHomeName)
            })

        })        
        //check the text in the players type field when there is no name 
        cy.get(this.eventTypeField).each((element, index) => {
            cy.get(this.homePlayerTypeFieldXButton).eq(0).click()
            cy.textIs(element,'Search for player...')
        })
        
        //the serach list should not appear when checked with wrong name
        cy.get(this.eventTypeField).eq(0).click().type("Wrong test")
        cy.get(this.searchListFirstPLayer).should('not.exist')
        //check by clicking over the typing field if the already typed text is removed
        cy.get(this.eventTypeField).eq(0).invoke('text').then((typedText)=>{
            let trimmedText = typedText.trim()
            expect(trimmedText).eql("Wrong test")
        })

        cy.get(this.eventTypeFieldXButton).click()
        //check if the dropdown search list is disappearing by clicking somewhere else
        cy.get(this.eventTypeField).eq(0).click().type(this.eventTypedName)
        cy.get(this.eventHeader).eq(0).click()
        cy.get(this.tourTemplateDropdownList).should('not.exist')
        //click again in the type field and select something from the drop-down
        // cy.get('.ep_ig_event_input_search').eq(0).click()
        // cy.get(this.searchListFirstPLayer).click()
        cy.get(this.eventTypeField).eq(0).invoke('text').then((text)=>{
            let trimmedText = text
            expect(trimmedText).eql("Iga Swiatek ")
        })

        //delete everything from the event type field
        cy.get(this.eventTypeFieldXButton).click()
    }

    dataDropDowns(){ 
        //enter a name and select the needed player
        // cy.get(this.eventTypeField).eq(0).type(this.eventTypedName)
        // cy.get('.ep_ig_player_name').click()

        //check the font size drop down list and select one option
        cy.twoDropDownListsWithFirstOptionFromAray(7,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.dropdDownListFirstElEvent,this.dropdDownListFirstElPlayer,this.typedText)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        // cy.checkDropdownDataListClosing(4,6,this.tournamentTemplateDropdown,this.tourTemplateDropdownList,this.layoutHeaderText)

        //check when selecting certain values if they are changing in the editable section
        //wta women and language
        cy.get(this.homePlayerName).eq(0).invoke('text').then((homePlayerName)=> {
            expect(homePlayerName).contain(this.homePlayerExpTranslationText)
        })

        //check with negative test
        cy.get(this.tournamentTemplateDropdown).eq(5).click().type('Wrong test')
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').invoke('text').then((noData)=>{
            let trimmedText = noData.trim()
            expect(trimmedText).eql('No data available')
        })
        
        //reset the language to English
        cy.get(this.tournamentTemplateDropdown).eq(6).click().type('English') 
        cy.get('.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content').click()
    }
}