export class league_page_livescore_results_po{
    constructor(){
        
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.livescoreWidgetKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)"
        this.nextMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"
        this.livescoreWidget = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.livescoreWidgetContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_name.wff_responsive_text"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"
        this.livescoreMobile = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_small"   
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"
        this.ls_nextmatch_container_teampage = ".col-12.col-sm-6.col-md-6.col-lg-6.plm-cell.escc-overview.es_widget_container_right.overview.es_widget_container_right"
        this.lastmatch_kampe_teampage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
        this.nextmatch_kampe_teampage = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small"
        this.acceptButton = "#ensSaveAll"
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
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_tournament_header_container.wff_single.wff_group_by_round.wff_tournament_header_container_default_version'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 10
        this.livescoreResultsWidget = '.wff_widget.wff_widget_FW81BF82A701BE7D33.wff_widget_wide'
        this.livescoreResultsMobile = '.wff_widget.wff_widget_FW81BF82A701BE7D33.wff_widget_small'
        this.leagueHeader = '.esc_template_title'
        this.livescoreResultsTab = '.esm_resultater_li'
        this.eventStatus = '.wff_status_value.wff_capitalize_text_transform'

        
    }

    livescore_results_exists(){
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
        .find(this.topLeaguesNames).eq(2).click();

        cy.get(this.livescoreResultsTab).should('exist').click()

        cy.get(this.livescoreResultsWidget).should('exist')

        cy.get(this.leagueHeader).should('exist')
    }

    livescore_results_all_matches(){
        cy.get(this.eventStatusWrapper).eq(0).click()
            cy.get(this.statusTooltip).should('exist')
            cy.get(this.contentHeaderTooltip)
                .invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                })

            cy.get(this.statusInTooltip).should('not.be.empty')
            cy.get(this.eventStatusWrapper).eq(0).click()
                    
            //console.log(eventStatusWrapper)
            for(let i=0; i<this.counter; i++){
                cy.get(this.livescoreResultsWidget)
                .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                        const filteredText = text.trim()
                        //    let statusAndTournament = filteredText.split("\n")
                        //cy.scrollTo('bottom')
                        //cy.scrollToBottomWithLazyLoading();
                        // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                        // lastElement.scrollIntoView();
                        
                        expect(this.filteredText).to.match(/^[a-zA-Z]+$/)
                        
                    })
            }   
            cy.get('.wff_status_value.wff_capitalize_text_transform')
                .should("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","margin-right","0px")
                    // .and("have.css","position","absolute")
                    .and("have.css","position","static")
                    // .and("have.css","left","0px") 
                    .and("have.css","left","auto")         
                
                // //check team names
            cy.get(this.livescoreResultsWidget).find(this.teamNames)
                    .should("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                    .and("have.css","color","rgb(0, 0, 0)")
                
                //when header is collapsed the events should not exist
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
                .find(this.eventWrapper).should("not.exist")
            cy.get(this.eventGroupingHeader).click()
                //check the headers 
            cy.get(this.livescoreResultsWidget).find(this.headersTransform)
                .should("have.css","font-size","14px")

    }

    livescore_results_all_matches_mobile(){
        cy.get(this.eventStatusWrapper).eq(0).click()
            cy.get(this.statusTooltip).should('exist')
            cy.get(this.contentHeaderTooltip)
                .invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                })

            cy.get(this.statusInTooltip).should('not.be.empty')
            cy.get(this.eventStatusWrapper).eq(0).click()
                    
            //console.log(eventStatusWrapper)
            for(let i=0; i<this.counter; i++){
                cy.get(this.livescoreResultsMobile)
                .find(this.eventStatus).eq(i).invoke("text").then((text)=>{
                        const filteredText = text.trim()
                        //    let statusAndTournament = filteredText.split("\n")
                        //cy.scrollTo('bottom')
                        //cy.scrollToBottomWithLazyLoading();
                        // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                        // lastElement.scrollIntoView();
                        
                        expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        
                    })
            }   
            cy.get('.wff_status_value.wff_capitalize_text_transform')
                .should("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","margin-right","0px")
                    // .and("have.css","position","absolute")
                    .and("have.css","position","static")
                    // .and("have.css","left","0px") 
                    .and("have.css","left","auto")         
                
                // //check team names
            cy.get(this.livescoreResultsMobile).find(this.teamNames)
                    .should("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                    .and("have.css","color","rgb(0, 0, 0)")
                
                //when header is collapsed the events should not exist
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
                .find(this.eventWrapper).should("not.exist")
            cy.get(this.eventGroupingHeader).click()
                //check the headers 
            cy.get(this.livescoreResultsMobile).find(this.headersTransform)
                .should("have.css","font-size","14px")

    }

}   

export class livescore_results_other_sports_po{
    constructor(){
        
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.livescoreWidgetKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)"
        this.nextMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"
        this.livescoreWidget = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.livescoreWidgetContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_name.wff_responsive_text"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"
        this.livescoreMobile = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_small"   
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"
        this.ls_nextmatch_container_teampage = ".col-12.col-sm-6.col-md-6.col-lg-6.plm-cell.escc-overview.es_widget_container_right.overview.es_widget_container_right"
        this.lastmatch_kampe_teampage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
        this.nextmatch_kampe_teampage = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small"
        this.acceptButton = "#ensSaveAll"
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
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_tournament_header_container.wff_single.wff_group_by_round.wff_tournament_header_container_default_version'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 10
        this.livescoreResultsWidget = '.wff_widget.wff_widget_FW81BF82A701BE7D33.wff_widget_wide'
        this.livescoreResultsMobile = '.wff_widget.wff_widget_FW81BF82A701BE7D33.wff_widget_small'
        this.leagueHeader = '.esc_template_title'
        this.livescoreResultsTab = '.esm_resultater_li'
        this.eventStatus = '.wff_status_value.wff_capitalize_text_transform'
        this.scopeHeader = '.wff_period_heading'
        this.scopeHeaderArray = ['1P', '2P', '3P', 'OT', 'P', 'S']
        this.leagueNum = 3
        
    }

    livescore_results_exists(){
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

        cy.get(this.livescoreResultsTab).should('exist').click()

        cy.get(this.livescoreResultsWidget).should('exist')

        cy.get(this.leagueHeader).should('exist')
    }

    livescore_results_all_matches(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_icon_container.icon-no_information_container");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //checking the event statuses
                for(let i=0; i<this.counter; i++){
                    cy.wait(2000)
                    cy.get(this.livescoreResultsWidget)
                    .find(this.eventStatus).eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            
                            
                            const regexPatterns = [
                                /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                /[A-Za-z]+/               // Slut - for finished events
                                // Add more regex patterns here if needed
                            ];

                            const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));
                                //console.log(matchesPattern)
                            expect(matchesPattern).to.be.true;
                            
                        })

                        

                }   
                
                    cy.get(this.eventStatus)
                            .should("have.css","font-family",'"Open Sans", sans-serif')
                                .and("have.css","margin-right","0px")
                                // .and("have.css","position","absolute")
                                .and("have.css","position","static")
                                // .and("have.css","left","0px") 
                                .and("have.css","left","auto")  

                        //check the scope headers
                        cy.textEqualToWithArray(this.livescoreResultsWidget,this.scopeHeader,this.scopeHeaderArray)
                            
                        //check zebra rows
                        cy.get('.wff_event_row_container.wff_row_0').should("have.css","color","rgb(0, 0, 0)")
                        cy.get('.wff_event_row_container.wff_row_1').should("have.css","background-color","rgb(248, 248, 248)")
                            
                            // //check team names
                        cy.get(this.livescoreResultsWidget).find(this.teamNames)
                                .should("have.css","font-size","14px")
                                .and("have.css","font-style","normal")
                                .and("have.css","color","rgb(0, 0, 0)")

                    //when header is collapsed the events should not exist
                    cy.get(this.eventGroupingHeader).click()
                    cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                    cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                    cy.get(this.livescoreResultsWidget).find(this.headersTransform)
                        .should("have.css","font-size","14px")
            }
        })
        
        

    }

    livescore_results_all_matches_mobile(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_icon_container.icon-no_information_container");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //checking the event statuses
                for(let i=0; i<this.counter; i++){
                    cy.wait(2000)
                    cy.get(this.livescoreResultsMobile)
                    .find(this.eventStatus).eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            
                            // expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        
                            const regexPatterns = [
                                /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                /[A-Za-z]+/               // Slut - for finished events
                                // Add more regex patterns here if needed
                            ];

                            const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));
                                //console.log(matchesPattern)
                            expect(matchesPattern).to.be.true;
                            
                        
                            
                        })

                }   
                
                cy.get(this.eventStatus)
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                        .and("have.css","margin-right","0px")
                        // .and("have.css","position","absolute")
                        .and("have.css","position","static")
                        // .and("have.css","left","0px") 
                        .and("have.css","left","auto")    
                        
                //check the scope headers
                cy.textEqualToWithArray(this.livescoreResultsMobile,this.scopeHeader,this.scopeHeaderArray)

                //check zebra rows
                cy.get('.wff_event_row_container.wff_row_0').should("have.css","color","rgb(0, 0, 0)")
                cy.get('.wff_event_row_container.wff_row_1').should("have.css","background-color","rgb(248, 248, 248)")
                    
                    //check team names
                cy.get(this.livescoreResultsMobile).find(this.teamNames)
                        .should("have.css","font-size","14px")
                        .and("have.css","font-style","normal")
                        .and("have.css","color","rgb(0, 0, 0)")    

                    //when header is collapsed the events should not exist
                cy.get(this.eventGroupingHeader).click()
                cy.get(this.eventGroupingHeader)
                    .find(this.eventWrapper).should("not.exist")
                cy.get(this.eventGroupingHeader).click()
                    //check the headers 
                cy.get(this.livescoreResultsMobile).find(this.headersTransform)
                    .should("have.css","font-size","14px")
            }
        })
            

    }

}   

export class team_page_livescore_results_po{
    constructor(){
        
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.livescoreWidgetKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)"
        this.nextMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"
        this.livescoreWidget = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.livescoreWidgetContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_name.wff_responsive_text"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"
        this.livescoreMobile = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_small"   
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"
        this.ls_nextmatch_container_teampage = ".col-12.col-sm-6.col-md-6.col-lg-6.plm-cell.escc-overview.es_widget_container_right.overview.es_widget_container_right"
        this.lastmatch_kampe_teampage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
        this.nextmatch_kampe_teampage = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small"
        this.acceptButton = "#ensSaveAll"
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
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_tournament_header_container.wff_single.wff_group_by_round.wff_tournament_header_container_default_version'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 10
        this.livescoreResultsWidget = '.wff_widget.wff_widget_FW9905637D40C61F88.wff_widget_wide'
        this.livescoreResultsMobile = '.wff_widget.wff_widget_FW9905637D40C61F88.wff_widget_small'
        this.leagueHeader = '.esc_template_title'
        this.livescoreResultsTab = '.esm_seneste_kampe_li'
        this.eventStatus = '.wff_status_value.wff_capitalize_text_transform'
        this.leagueNum = 0
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        
    }

    livescore_results_exists(){
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
        cy.get(this.firstTeam).find('.wff_participant_link').click()

        cy.get(this.livescoreResultsTab).should('exist').click()

        cy.get(this.livescoreResultsWidget).should('exist')

        // cy.get(this.leagueHeader).should('exist')
    }

    livescore_results_all_matches(){
                    
            //check event statuses and design
            for(let i=0; i<this.counter; i++){
                cy.get(this.livescoreResultsWidget)
                .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                        const filteredText = text.trim()
                        //    let statusAndTournament = filteredText.split("\n")
                        //cy.scrollTo('bottom')
                        //cy.scrollToBottomWithLazyLoading();
                        // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                        // lastElement.scrollIntoView();
                        
                        expect(this.filteredText).to.match(/^[a-zA-Z]+$/)
                        
                    })
            }   
            cy.get(this.eventStatus)
                .should("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","margin-right","0px")
                    // .and("have.css","position","absolute")
                    .and("have.css","position","static")
                    // .and("have.css","left","0px") 
                    .and("have.css","left","auto")         
                
                // //check team names
            cy.get(this.livescoreResultsWidget).find(this.teamNames)
                    .should("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                    .and("have.css","color","rgb(0, 0, 0)")

            //check zebra rows
            cy.get('.wff_event_row_container.wff_row_0').should("have.css","color","rgb(0, 0, 0)")
            cy.get('.wff_event_row_container.wff_row_1').should("have.css","background-color","rgb(248, 248, 248)")

    }

    livescore_results_all_matches_mobile(){
                    
            //check event statuses and design
            for(let i=0; i<this.counter; i++){
                cy.get(this.livescoreResultsMobile)
                .find(this.eventStatus).eq(i).invoke("text").then((text)=>{
                        const filteredText = text.trim()
                        //    let statusAndTournament = filteredText.split("\n")
                        //cy.scrollTo('bottom')
                        //cy.scrollToBottomWithLazyLoading();
                        // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                        // lastElement.scrollIntoView();
                        
                        expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        
                    })
            }   
            cy.get(this.eventStatus)
                .should("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","margin-right","0px")
                    // .and("have.css","position","absolute")
                    .and("have.css","position","static")
                    // .and("have.css","left","0px") 
                    .and("have.css","left","auto")         
                
                // //check team names
            cy.get(this.livescoreResultsMobile).find(this.teamNames)
                    .should("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                    .and("have.css","color","rgb(0, 0, 0)")

            //check zebra rows
            cy.get('.wff_event_row_container.wff_row_0').should("have.css","color","rgb(0, 0, 0)")
            cy.get('.wff_event_row_container.wff_row_1').should("have.css","background-color","rgb(248, 248, 248)")
    }

}   