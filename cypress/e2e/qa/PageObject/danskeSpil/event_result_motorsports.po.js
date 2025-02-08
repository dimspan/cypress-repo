export class event_result_po{
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
        this.eventResultWidget = '.wff_widget.wff_widget_FW55CEB3E48C015103.wff_widget_wide'
        this.eventResultMobile = '.wff_widget.wff_widget_FW55CEB3E48C015103.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root"
        this.seasonCalendarButton = '.esm_season_calendar_li'
        this.eventNameHeader = '.wff_event_name_root'
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

    }

    event_result_exists(){
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

        cy.get(this.eventResultWidget).should('exist')
    }

    check_all_texts(){

         //checks the design of the headers
        //event name header
        cy.get(this.eventNameHeader)
            .should("have.css","position","relative")
            .should("have.css","font-weight","600")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(255, 255, 255)")

        //fastest lap value
        cy.get(this.fastestLap)
            .should("have.css","position","static")
            .should("have.css","font-weight","400")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(176, 38, 206)")

        //stats headers
        cy.get(this.statsHeader)
        .should("have.css","position","relative")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","10px")
        .and("have.css","color","rgb(255, 255, 255)")
     
        // the participants styles and count
        cy.get(this.eventResultWidget)
            .find(this.participantClass)
            .should("have.length",this.participantCount)
            .and("have.css","font-weight","400")
            .and("have.css","font-family",'Roboto, sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")

        //horizontal stats texts
        cy.get(this.horizontalStats)
        // .should("have.css","position","relative")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","12px")
        .and("have.css","color","rgb(0, 0, 0)")

        

        // Get the horizontal scroll position
        // cy.get(this.horizontalStatsWrapper).then(($element) => {
        //     const initialScrollLeft = $element[0].scrollLeft;
        //     //console.log(initialScrollLeft)
        
        //     // or scroll to the right end
        //     cy.get(this.horizontalStatsWrapper).scrollTo('right');       

        //     // Check if the scroll position has changed
        //     cy.get(this.horizontalStatsWrapper).should(($elementAfterScroll) => {
        //         //console.log($elementAfterScroll[0].scrollLeft)
        //         expect($elementAfterScroll[0].scrollLeft).not.to.eq(initialScrollLeft);
        //     });
        // });
        cy.checkHorizontalScroll(this.horizontalStatsWrapper)
    }

    check_all_texts_mobile(){  
        
         //checks the design of the headers
        //event name header
        cy.get(this.eventNameHeader)
            // .should("have.css","position","relative")
            .should("have.css","font-weight","600")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(255, 255, 255)")

        //fastest lap value
        cy.get(this.fastestLap)
            .should("have.css","position","static")
            .should("have.css","font-weight","400")
            .and("have.css","font-size","12px")
            .and("have.css","color","rgb(176, 38, 206)")

        //stats headers
        cy.get(this.statsHeader)
        // .should("have.css","position","relative")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","10px")
        .and("have.css","color","rgb(255, 255, 255)")
     
        // the participants styles and count
        cy.get(this.eventResultMobile)
            .find(this.participantClass)
            .should("have.length",this.participantCountMobile)
            .and("have.css","font-weight","400")
            .and("have.css","font-family",'Roboto, sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")

        //horizontal stats texts
        cy.get(this.horizontalStats)
        // .should("have.css","position","relative")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","12px")
        .and("have.css","color","rgb(0, 0, 0)")

        

        // Get the horizontal scroll position
        // cy.get(this.horizontalStatsWrapper).then(($element) => {
        //     const initialScrollLeft = $element[0].scrollLeft;
        //     console.log(initialScrollLeft)
        
        //     // or scroll to the right end
        //     cy.get(this.horizontalStatsWrapper).scrollTo('right');       

        //     // Check if the scroll position has changed
        //     cy.get(this.horizontalStatsWrapper).should(($elementAfterScroll) => {
        //         console.log($elementAfterScroll[0].scrollLeft)
        //         expect($elementAfterScroll[0].scrollLeft).not.to.eq(initialScrollLeft);
        //     });
        // });
        cy.checkHorizontalScroll(this.horizontalStatsWrapper)
    }

    check_tooltips(){
        //checks the tooltips
        //kampeSpillet
        // cy.get(this.teamSquadWidget).find(this.kampeSpilletHeader).eq(0).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")

        cy.get(this.eventResultWidget)
            .find(this.statHeaderWithTooltips)
            .each((element,index)=>{
                cy.wrap(element).trigger("mouseover");
                cy.get(this.tooltipTextClass).invoke("text").then((text)=>{
                    
                    let trimmedText = text.trim()
                    cy.expect(this.expectedText).to.include(trimmedText)
                })
            })

    }
}   