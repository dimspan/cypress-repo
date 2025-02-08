// import { format } from 'date-fns';
export class h2h_po{
    constructor(){
        
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.livescoreWidgetContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_name.wff_responsive_text"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"
        this.ls_nextmatch_container_teampage = ".col-12.col-sm-6.col-md-6.col-lg-6.plm-cell.escc-overview.es_widget_container_right.overview.es_widget_container_right"
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
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.counter = 10
        this.leagueHeader = '.esc_template_title'
        this.eventStatus = '.wff_status_value.wff_uppercase_text_transform'
        this.h2hWidget = '.wff_widget.wff_widget_FW72EEE5B6F7916472.wff_widget_wide'
        this.h2hMobile = '.wff_widget.wff_widget_FW72EEE5B6F7916472.wff_widget_small'
        this.h2hTab = '.esm_h2h_li'
        this.leagueNum = 1
        this.resultsTab = '.esm_seneste_kampe_li'
        this.scoreBox = '.wff_event_result_single_row_wrapper'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.showAllButton = '[aria-label="Vis alle kampe"]'
        this.hideButton = '[aria-label="Skjul"]'
        this.allMatchesTab = '[aria-label="Alle kampe"]'
        this.homeTab = '[aria-label="Hjemme"]'
        this.awayTab = '[aria-label="Ude"]'
        this.allH2hEventsSection = '.wff_h2h_generic_section_data.wff_h2h'
        this.homeTeamLastMatches = '.wff_h2h_generic_section_data.wff_home'
        this.awayTeamLastMatches = '.wff_h2h_generic_section_data.wff_away'
        this.h2hHeaderText = '.wff_grouping_header_value_container.wff_capitalize_text_transform:eq(0)'
        this.homeTeamHeaderText = 'Seneste Wolverhampton'
        this.awayTeamHeaderText = 'Seneste Manchester City'
        this.homeTabHomeTeamText = "Seneste H2H Wolverhampton"
        this.awayTabAwayTeamText = 'Seneste H2H Manchester City'
        
    }

    h2h_exists(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })


        // cy.get(this.sportsMenu)
        //     .should('exist').click();
        // cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu')
        //     .find(this.sportOption).click();
        // cy.get(this.stillingerButton)
        //     .should("exist").click();
        
        // cy.get(this.topLeaguesContainer)
        // .find(this.topLeaguesNames).eq(this.leagueNum).click();

        // cy.get(this.firstTeam).find('.wff_participant_link').click()

        // cy.get(this.resultsTab).click()

        // cy.get(this.scoreBox).eq(0).should('exist').click()

        // cy.get(this.h2hTab).should('exist').click()

        cy.get(this.h2hWidget).should('exist')
    }

    h2h_all_matches(){
                    
            // check the event statuses and design
            for(let i=0; i<this.counter; i++){
                cy.get(this.h2hWidget)
                .find(this.eventStatus).eq(i).invoke("text").then((text)=>{
                        const filteredText = text.trim()
                        //    let statusAndTournament = filteredText.split("\n")
                        
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
            cy.get(this.h2hWidget).find(this.teamNames)
                    .should("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                    .and("have.css","color","rgb(0, 0, 0)")
                
                //when header is collapsed the events should not exist
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
                .find(this.eventWrapper).should("not.exist")
            cy.get(this.eventGroupingHeader).click()
                //check the headers 
            cy.get(this.h2hWidget).find(this.headersTransform)
                .should("have.css","font-size","14px")

            //check the show all/hide button function
            cy.get(this.showAllButton).eq(0).should('exist').click()
            cy.get(this.hideButton).eq(0).should('exist').click()

    }

    h2h_home_away_tabs(){
        //check when clicking the all matches tab if the right sections are appearing
        cy.get(this.allMatchesTab).should('exist').click()

        //all h2h matches section
        cy.get(this.allH2hEventsSection).should('exist')
        cy.textFromTwoElementsEqualTo(this.allH2hEventsSection,this.h2hHeaderText,"Seneste H2H")

        //home team last matches section           
        cy.get(this.homeTeamLastMatches).should('exist')
        cy.textFromTwoElementsEqualTo(this.homeTeamLastMatches,this.h2hHeaderText,this.homeTeamHeaderText)

        //away team last matches section           
        cy.get(this.awayTeamLastMatches).should('exist')
        cy.textFromTwoElementsEqualTo(this.awayTeamLastMatches,this.h2hHeaderText,this.awayTeamHeaderText)

        //check when clicking the home tab if the right sections are appearing
        cy.get(this.homeTab).should('exist').click()

        //home team h2h matches section
        cy.get(this.allH2hEventsSection).should('exist')
        cy.textFromTwoElementsEqualTo(this.allH2hEventsSection,this.h2hHeaderText,this.homeTabHomeTeamText)
        
        //home team last matches section           
        cy.get(this.homeTeamLastMatches).should('exist')
        cy.textFromTwoElementsEqualTo(this.homeTeamLastMatches,this.h2hHeaderText,this.homeTeamHeaderText)

        //check when clicking the away tab if the right sections are appearing
        cy.get(this.awayTab).should('exist').click()

        //away team h2h matches section
        cy.get(this.allH2hEventsSection).should('exist')
        cy.textFromTwoElementsEqualTo(this.allH2hEventsSection,this.h2hHeaderText,this.awayTabAwayTeamText)
        
        //away team last matches section           
        cy.get(this.awayTeamLastMatches).should('exist')
        cy.textFromTwoElementsEqualTo(this.awayTeamLastMatches,this.h2hHeaderText,this.awayTeamHeaderText)
        
        //go to all matches tab again
        cy.get(this.allMatchesTab).should('exist').click()
    }

    h2h_all_matches_mobile(){
                    
            // check the event statuses and design
            for(let i=0; i<this.counter; i++){
                cy.get(this.h2hMobile)
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
            cy.get(this.h2hMobile).find(this.teamNames)
                    .should("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                    .and("have.css","color","rgb(0, 0, 0)")
                
                //when header is collapsed the events should not exist
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
                .find(this.eventWrapper).should("not.exist")
            cy.get(this.eventGroupingHeader).click()
                //check the headers 
            cy.get(this.h2hMobile).find(this.headersTransform)
                .should("have.css","font-size","14px")

            //check the show all/hide button function
            cy.get(this.showAllButton).eq(0).should('exist').click()
            cy.get(this.hideButton).eq(0).should('exist').click()

    }

}   