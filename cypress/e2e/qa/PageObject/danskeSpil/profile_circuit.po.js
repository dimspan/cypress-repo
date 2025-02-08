export class profile_circuit_po{
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
        this.sportOption = '.motorsports'
        this.leagueNum = 0
        this.profileCircuitWidget = '.wff_widget.wff_widget_FW3C885D98971027D1.wff_widget_wide'
        this.profileCircuitMobile = '.wff_widget.wff_widget_FW3C885D98971027D1.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root"
        this.seasonCalendarButton = '.esm_season_calendar_li'
        this.eventNameHeader = '.wff_object_name_root.wff_secondary_fnt.wff_secondary_fs.wff_secondary_bold'
        this.statsHeader = '.wff_table_header_cell'
        this.participantCount = 40
        this.participantCountMobile = 20
        this.participantAfterShowAllount = 100
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.searchCountry = '.wff_country_search_bar_button'
        this.firstOption = '.wff_country_list_item:eq(0)'
        this.clearALlButton = '.wff_button_wrapper_root.wff_button_clear_selection'
        this.gpEventLink = '.wff_event_info:eq(4)'
        this.horizontalStats = '.wff_horizontal_stat'
        this.horizontalStatsWrapper = '.wff_event_information_horizontal'
        this.statHeaderWithTooltips = '.wff_label_text.wff_has_tooltip'
        this.tooltipTextClass = ".wff_tooltip_root_container"
        this.expectedText = ['Startgrid', 'Omgange', 'Pitstop', 'Point']
        this.fastestLap = '.wff_horizontal_stat_value'
        this.profileCircuitButton = '.esm_circuit_profile_li'
        this.statsName = '.wff_label_text.wff_venue_profile_section_stat_label'
        this.statsValues = '.wff_venue_profile_section_stat'
        this.participantFlag = '.wff_flag_and_logo_container:eq(1)'
        this.eventFlag = '.wff_flag_and_logo_container:eq(0)'
        this.lapHeaders = '.wff_venue_profile_data_section_header'
        this.circuitImage = '.wff_track_img'
    }

    profile_circuit_exists(){
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
        cy.get(this.seasonCalendarButton)
            .should("exist").click();

        cy.get(this.gpEventLink).click()

        cy.get(this.profileCircuitButton).click()

        cy.get(this.profileCircuitWidget).should('exist')
    }

    check_all_texts(){

         //checks the design of the headers
        //event name header
        cy.get(this.eventNameHeader)
            .should("have.css","position","static")
            .and("have.css","font-weight","400")
            .and("have.css", "font-family", "Roboto, sans-serif")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(255, 255, 255)")

        //event country flag 
        cy.get(this.participantFlag).should('exist')
        cy.get('img[src="https://es-img.enetscores.com/flags/4_3/144.svg"]').eq(0).should('exist')

        // stats names styles
        cy.get(this.statsName)
            .should("have.css","position","static")
            .and("have.css","font-weight","400")
            .and("have.css", "font-family", "Roboto, sans-serif")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(0, 0, 0)")

        // stats values styles
        cy.get(this.statsValues)
            .should("have.css","position","static")
            .and("have.css","font-weight","400")
            .and("have.css", "font-family", "Roboto, sans-serif")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(0, 0, 0)")

        //laps headers
        cy.get(this.lapHeaders)
        .should("have.css","position","static")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","12px")
        .and("have.css","color","rgb(255, 255, 255)")
     
        //participants country flag 
        cy.get(this.participantFlag).should('exist')
        cy.get('img[src="https://es-img.enetscores.com/flags/4_3/8.svg"]').eq(0).should('exist')

        //circuit image
        cy.get(this.circuitImage).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/tracks/5114.svg')
        
    }

    check_all_texts_mobile(){  
        
         //checks the design of the headers
            //event name header
            cy.get(this.eventNameHeader)
                .should("have.css","position","static")
                .and("have.css","font-weight","400")
                .and("have.css", "font-family", "Roboto, sans-serif")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(255, 255, 255)")

            //event country flag 
            cy.get(this.participantFlag).should('exist')
            cy.get('img[src="https://es-img.enetscores.com/flags/4_3/144.svg"]').eq(0).should('exist')

            // stats names styles
            cy.get(this.statsName)
                .should("have.css","position","static")
                .and("have.css","font-weight","400")
                .and("have.css", "font-family", "Roboto, sans-serif")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

            // stats values styles
            cy.get(this.statsValues)
                .should("have.css","position","static")
                .and("have.css","font-weight","400")
                .and("have.css", "font-family", "Roboto, sans-serif")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

            //laps headers
            cy.get(this.lapHeaders)
            .should("have.css","position","static")
            .should("have.css","font-weight","400")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(255, 255, 255)")
        
            //participants country flag 
            cy.get(this.participantFlag).should('exist')
            cy.get('img[src="https://es-img.enetscores.com/flags/4_3/8.svg"]').eq(0).should('exist')

            //circuit image
            cy.get(this.circuitImage).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/tracks/5114.svg')
    }

}   