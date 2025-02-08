export class event_info_po{
    constructor(){
        
        this.livescoreButton = ".esm_livescore_li"
        this.stillingerButton = ".esm_stillinger_li"
        this.topLeaguesContainer = ".top-leagues.row.col-12.esc_template_list.esm_comp.esm_stillinger"
        this.topLeaguesNames = ".col-12.col-sm-6"
        this.leagueFlag = ".league-flag"
        this.stageArrowButton = ".arrow-container.es_toggle"
        this.leagueContainer = ".leagues-container.col-12.row:eq(1)"
        this.genderLeagues = '.gender-leagues.col-12.col-sm-6'
        this.womenLeagues = 'div:contains("Kvinder")'
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.esc_active.soccer'
        this.leagueNum = 1
        this.eventInfoWidget = '.wff_widget.wff_widget_FW5CECAD2D001CA4DA.wff_widget_wide'
        this.eventInfoMobile = '.wff_widget.wff_widget_FW5CECAD2D001CA4DA.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root_container"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.resultsTab = '.esm_resultater_li'
        this.scoreBox = '.wff_event_result_single_row_wrapper'
        this.stageRoundInfo = '.wff_tournamen_container'
        this.koDate = '.wff_event_date_time'
        this.eventVenue = '.wff_event_venue'
        this.eventParticipants = '.wff_participant_name_container'
        this.slutBox = '.wff_event_status'
        this.fixturesTab = '.esm_kommende_kampe_li'
        this.statusArray = ['Slut','Slut FS','Slut SS']
    }

    event_info_exists(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.get(this.sportsMenu)
            .should('exist').click();
        cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu')
            .find(this.sportOption).click();
        cy.get(this.stillingerButton)
            .should("exist").click();
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames).eq(this.leagueNum).click();

        //cy.get(this.firstTeam).find('.wff_participant_link').click()

        cy.get(this.resultsTab).click()
        //check if there are events
        cy.wait(2000)
        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_icon_container.icon-no_information_container");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //click over the score box and check if the event info widget exists
                cy.get(this.scoreBox).eq(0).should('exist').click()

                cy.get(this.eventInfoWidget).should('exist')
            }
        })

        
    }

    check_all_texts_finished_events(){

        cy.wait(2000)
        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_icon_container.icon-no_information_container");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //  KO date of the event
                cy.get(this.eventInfoWidget)
                .find(this.koDate)
                .should("have.css","font-weight","400")
                .and("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","font-size","12px")
                .and("have.css","font-style","normal")

                //  Tournament stage and round info
                cy.get(this.eventInfoWidget)
                    .find(this.stageRoundInfo)
                    .should("have.css","font-weight","400")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")

                //  Event venue
                cy.get(this.eventInfoWidget)
                    .find(this.eventVenue)
                    .should("have.css","font-weight","700")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                //  Event participants
                cy.get(this.eventInfoWidget)
                    .find(this.eventParticipants)
                    .find('.wff_participant_name.wff_responsive_text')
                    .should("have.css","font-weight","700")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","20px")
                    .and("have.css","font-style","normal")

                //check the tooltip
                cy.get(this.eventInfoWidget).find(this.slutBox).eq(0).click()
                cy.get(this.tooltip).should("exist").and("be.visible")
                //check the text
                cy.textEqualToWithArray(this.tooltip,this.tooltipTextClass,this.statusArray)
        
            }
        })

        
    }

    check_all_texts_mobile_finished_events(){  

        cy.wait(2000)
        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_icon_container.icon-no_information_container");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //check if the widget exists
                cy.get(this.eventInfoMobile).should("exist").and("be.visible")
                
                //  KO date of the event
                cy.get(this.eventInfoMobile)
                        .find(this.koDate)
                        .should("have.css","font-weight","400")
                        .and("have.css","font-family",'"Open Sans", sans-serif')
                        .and("have.css","font-size","12px")
                        .and("have.css","font-style","normal")
            
                //  Tournament stage and round info
                cy.get(this.eventInfoMobile)
                    .find(this.stageRoundInfo)
                    .should("have.css","font-weight","400")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")

                //  Event venue
                cy.get(this.eventInfoMobile)
                    .find(this.eventVenue)
                    .should("have.css","font-weight","700")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                //  Event participants
                cy.get(this.eventInfoMobile)
                    .find(this.eventParticipants)
                    .find('.wff_participant_name.wff_responsive_text')
                    .should("have.css","font-weight","600")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                //check the tooltip
                cy.get(this.eventInfoMobile).find(this.slutBox).eq(0).trigger('mouseover')
                //cy.get(this.tooltip).should("exist").and("be.visible")
                //check the text
                cy.textEqualToWithArray(this.tooltip,this.tooltipTextClass,this.statusArray)     
            }
        })
           
    }

    check_all_texts_notstarted_events(){
        cy.get(this.sportsMenu)
            .should('exist').click();
        cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu')
            .find(this.sportOption).click();
        cy.get(this.stillingerButton)
            .should("exist").click();
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames).eq(this.leagueNum).click();

        //cy.get(this.firstTeam).find('.wff_participant_link').click()

        cy.get(this.fixturesTab).click()

        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_icon_container.icon-no_information_container");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                cy.get(this.scoreBox).eq(0).should('exist').click()

                cy.get(this.eventInfoWidget).should('exist')

                //  KO date of the event
                cy.get(this.eventInfoWidget)
                        .find(this.koDate)
                        .should("have.css","font-weight","400")
                        .and("have.css","font-family",'"Open Sans", sans-serif')
                        .and("have.css","font-size","12px")
                        .and("have.css","font-style","normal")
            
                //  Tournament stage and round info
                cy.get(this.eventInfoWidget)
                    .find(this.stageRoundInfo)
                    .should("have.css","font-weight","400")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")

                //  Event venue
                cy.get(this.eventInfoWidget)
                    .find(this.eventVenue)
                    .should("have.css","font-weight","700")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                //  Event participants
                cy.get(this.eventInfoWidget)
                    .find(this.eventParticipants)
                    .find('.wff_participant_name.wff_responsive_text')
                    .should("have.css","font-weight","700")
                    .and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","20px")
                    .and("have.css","font-style","normal")

                //check the tooltip - should not be visible
                cy.get(this.tooltip).should("not.exist")
            }
        })

        
        
           
    }


}   

export class tennis_event_info_po{
    constructor(){
        
        this.livescoreButton = ".esm_livescore_li"
        this.stillingerButton = ".esm_stillinger_li"
        this.topLeaguesContainer = ".top-leagues.row.col-12.esc_template_list.esm_comp.esm_stillinger"
        this.topLeaguesNames = ".col-12.col-sm-6"
        this.leagueFlag = ".league-flag"
        this.stageArrowButton = ".arrow-container.es_toggle"
        this.leagueContainer = ".leagues-container.col-12.row:eq(1)"
        this.genderLeagues = '.gender-leagues.col-12.col-sm-6'
        this.womenLeagues = 'div:contains("Kvinder")'
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.esc_active.soccer'
        this.leagueNum = 1
        this.eventInfoWidget = '.wff_widget.wff_widget_FW5CECAD2D001CA4DA.wff_widget_wide'
        this.eventInfoMobile = '.wff_widget.wff_widget_FW5CECAD2D001CA4DA.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root_container"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.resultsTab = '.esm_resultater_li'
        this.scoreBox = '.wff_event_result_single_row_wrapper'
        this.stageRoundInfo = '.wff_tournamen_container'
        this.koDate = '.wff_event_date_time'
        this.eventVenue = '.wff_event_venue'
        this.eventParticipants = '.wff_participant_name_container'
        this.slutBox = '.wff_event_status'
        this.fixturesTab = '.esm_kommende_kampe_li'
        this.statusArray = ['Slut','Slut FS']
        this.setScore = '.wff_score_container_wrapper'
        this.playersRanking = '.wff_participant_ranking_type.wff_responsive_text'
        this.rankingIcon = '.wff_ranking_icon'
    }

    event_info_exists(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.get(this.sportsMenu)
            .should('exist').click();
        cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu')
            .find(this.sportOption).click();
        cy.get(this.stillingerButton)
            .should("exist").click();
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames).eq(this.leagueNum).click();

        //cy.get(this.firstTeam).find('.wff_participant_link').click()

        cy.get(this.resultsTab).click()

        cy.get(this.scoreBox).eq(0).should('exist').click()

        cy.get(this.eventInfoWidget).should('exist')
    }

    check_all_texts_finished_events(){

        //  KO date of the event
        cy.get(this.eventInfoWidget)
                .find(this.koDate)
                .should("have.css","font-weight","400")
                .and("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","font-size","12px")
                .and("have.css","font-style","normal")
     
        //  Tournament stage and round info
         cy.get(this.eventInfoWidget)
            .find(this.stageRoundInfo)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")

        //  Event venue
        cy.get(this.eventInfoWidget)
            .find(this.eventVenue)
            .should("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        //  Event participants
        cy.get(this.eventInfoWidget)
            .find(this.eventParticipants)
            .find('.wff_participant_name.wff_responsive_text')
            .should("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","20px")
            .and("have.css","font-style","normal")

        // set scores
        cy.get(this.eventInfoWidget)
            .find(this.setScore)
            // .find('.wff_participant_name.wff_responsive_text')
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        // ranikng under players names
        cy.get(this.eventInfoWidget)
            .find(this.playersRanking)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        //check the tooltip
        cy.get(this.eventInfoWidget).find(this.slutBox).eq(0).click()
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualToWithArray(this.tooltip,this.tooltipTextClass,this.statusArray)
           
    }

    check_all_texts_mobile_finished_events(){  
        //check if the widget exists
        cy.get(this.eventInfoMobile).should("exist").and("be.visible")
        
        //  KO date of the event
        cy.get(this.eventInfoMobile)
                .find(this.koDate)
                .should("have.css","font-weight","400")
                .and("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","font-size","12px")
                .and("have.css","font-style","normal")
     
        //  Tournament stage and round info
         cy.get(this.eventInfoMobile)
            .find(this.stageRoundInfo)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")

        //  Event venue
        cy.get(this.eventInfoMobile)
            .find(this.eventVenue)
            .should("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        //  Event participants
        cy.get(this.eventInfoMobile)
            .find(this.eventParticipants)
            .find('.wff_participant_name.wff_responsive_text')
            .should("have.css","font-weight","600")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        // set scores under the score box
        cy.get(this.eventInfoMobile)
            .find(this.setScore)
            // .find('.wff_participant_name.wff_responsive_text')
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        

        //check the tooltip
        cy.get(this.eventInfoMobile).find(this.slutBox).eq(0).trigger('mouseover')
        //cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualToWithArray(this.tooltip,this.tooltipTextClass,this.statusArray)        
    }

    check_all_texts_notstarted_events(){

        cy.get(this.eventInfoWidget).should('exist')

        //  KO date of the event
        cy.get(this.eventInfoWidget)
                .find(this.koDate)
                .should("have.css","font-weight","400")
                .and("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","font-size","12px")
                .and("have.css","font-style","normal")
     
        //  Tournament stage and round info
         cy.get(this.eventInfoWidget)
            .find(this.stageRoundInfo)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")

        //  Event venue
        cy.get(this.eventInfoWidget)
            .find(this.eventVenue)
            .should("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        //  Event participants
        cy.get(this.eventInfoWidget)
            .find(this.eventParticipants)
            .find('.wff_participant_name.wff_responsive_text')
            .should("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","20px")
            .and("have.css","font-style","normal")

        

        //check the tooltip - should not be visible
        cy.get(this.tooltip).should("exist")
        
        
    }


} 