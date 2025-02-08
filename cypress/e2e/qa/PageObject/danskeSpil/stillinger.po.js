export class stillinger_po{
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
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"
        this.nextMatchesMobile = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"   
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
        this.standingsWidget = '.wff_widget.wff_widget_FW900EC9110F3F943C.wff_widget_wide.wff_standings_soccer'
    }

    checkStillingerTopLeagues(){
        //livescore Forrige kamp
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                    /* returning false here prevents Cypress from failing the test */
                    if (resizeObserverLoopErrRe.test(err.message)) {
                        return false
                    }
                })
        let counter = ""

        cy.get(this.sportsMenu)
        .should('exist').click();

        cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();

        cy.get(this.stillingerButton)
        .should("exist").click();
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames)
        .each((element,index )=>{
            
            cy.wrap(element).should("have.css","font-family",'"Open Sans"')
            .and("have.css","font-size","16px")
            // .and("have.css","position","absolute")
            .and("have.css","font-weight","400")
                   
        })
        .find(this.leagueFlag)
        .each((element,index )=>{
            cy.wrap(element).should("have.css","margin-right",'8px')
            .and("have.css","width","20px")
            // .and("have.css","position","absolute")
            .and("have.css","height","20px")
        })
    
    }

    checkStillingerAllStages(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                    /* returning false here prevents Cypress from failing the test */
                    if (resizeObserverLoopErrRe.test(err.message)) {
                        return false
                    }
                })
        let counter = ""
        
        //check the tournament stages names and flags in the headers
        cy.get(this.openedHeader)
        .each((element,index )=>{
            
            cy.wrap(element).find(this.headerCountryName).should("have.css","font-family",'"Open Sans"')
            .and("have.css","font-size","20px")
            // .and("have.css","position","absolute")
            .and("have.css","font-weight","700")

            cy.wrap(element).find(this.headerCountryFlag).should("have.css","margin-right",'10px')
            .and("have.css","width","24px")
            // .and("have.css","position","absolute")
            .and("have.css","height","24px")
                   
        })
        
        
        //when header is collapsed the events should not exist
        cy.get(this.openedHeader).find(this.stageArrowButton).click()
        cy.get(this.closedHeader).should("exist")
        cy.get(this.openedHeader).find(this.stageArrowButton).click()

        //check the headers 
        cy.get(this.leagueContainer)
        .each((league,index)=>{
            cy.get(league)
            .find(this.genderLeagues)
            .each((gender,index)=>{
                cy.get(gender)
                .find(this.allLeaguesList)
                .each((leagueName,index)=>{
                    cy.wrap(leagueName).should("have.css","font-weight","400")
                    .and("have.css","font-family",'"Open Sans"')
                    .and("have.css","font-size","16px")
                })
            })
            
            
        })
        
    }

    checkIfStageNameHasLinks(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames).eq(0).click();

        cy.get(this.standingsWidget).should('exist')
    }
}