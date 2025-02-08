
export class season_calendar_po{
    constructor(){
        
        this.seasonButton = ".esm_livescore_li"
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.motorsports'
        this.seasonCalendarWidget = '.wff_widget.wff_widget_FWAE8CB04B981AA8BD.wff_widget_wide'
        this.seasonCalendarMobile = '.wff_widget.wff_widget_FWAE8CB04B981AA8BD.wff_widget_small'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.seasonCalendarButton = '.esm_season_calendar_li'
        this.tournamentHeader = '.wff_grouping_header_value.wff_uppercase_text_transform'
        this.tournamentLogo = '.wff_flag_and_logo_container'
        this.trackImage = '.wff_track_image_container'
        this.eventName = '.wff_event_name'
        this.eventKODate = '.wff_event_start_time'
        this.eventKOTime = '.wff_status_value.wff_uppercase_text_transform'
        this.eventRow = '.wff_event_info'
        this.eventResultWidget = '.wff_widget.wff_widget_FW55CEB3E48C015103.wff_widget_wide'
        this.eventResultMobile = '.wff_widget.wff_widget_FW55CEB3E48C015103.wff_widget_small'


    }

    season_calendar_exists(){
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

        cy.get(this.seasonCalendarWidget).should('exist')

        //cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){
        //tournaments name header
        cy.get(this.tournamentHeader)
            .should("have.length",24)  
            .and("have.css","position","static")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","10px")
            .and("have.css","color","rgb(255, 255, 255)")

        //tournament logo in header
        cy.get(this.tournamentLogo).should("exist")
        
        //track image exists
        cy.get(this.trackImage).should("exist")

        //event name styles
        cy.get(this.eventName)
            .should("have.css","position","static")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","12px")
            //.and("have.css","color","rgb(0, 0, 0)")

        cy.get(this.eventName).invoke('css', 'color').should('be.oneOf', ["rgb(0, 0, 0)", 'rgb(174, 174, 174)']);

        cy.get(this.eventKODate).each((element,index)=>{
                cy.wrap(element).should("have.css","font-weight","400")
                .and("have.css","font-size","12px")
                

                cy.wrap(element).invoke("text").should('match', /[0-9]*\.[0-9]+/)
            })

        cy.get(this.eventKOTime).each((element,index)=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    const filteredText = text.trim()
                    
                    const regexPatterns = [
                        /[0-9]+:[0-9]+/,          // 17:00 - not started event - soccer
                        /[A-Za-z]+/                 // Aflyst - soccer
                        
                        // Add more regex patterns here if needed
                    ];

                    const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));

                    expect(matchesPattern).to.be.true;
                    
                })
        })


    }

    check_all_texts_mobile(){  
        //tournaments name header
        cy.get(this.tournamentHeader)
            .should("have.length",24)  
            .and("have.css","position","static")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","10px")
            .and("have.css","color","rgb(255, 255, 255)")

        //tournament logo in header
        cy.get(this.tournamentLogo).should("exist")
        
        //track image exists
        cy.get(this.trackImage).should("exist")

        //event name styles
        cy.get(this.eventName)
            .should("have.css","position","static")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","12px")
            //.and("have.css","color","rgb(0, 0, 0)")

        cy.get(this.eventName).invoke('css', 'color').should('be.oneOf', ["rgb(0, 0, 0)", 'rgb(174, 174, 174)']);

        cy.get(this.eventKODate).each((element,index)=>{
                cy.wrap(element).should("have.css","font-weight","400")
                .and("have.css","font-size","12px")
                

                cy.wrap(element).invoke("text").should('match', /[0-9]*\.[0-9]+/)
            })

        cy.get(this.eventKOTime).each((element,index)=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    const filteredText = text.trim()
                    
                    const regexPatterns = [
                        /[0-9]+:[0-9]+/,          // 17:00 - not started event - soccer
                        /[A-Za-z]+/                 // Aflyst - soccer
                        
                        // Add more regex patterns here if needed
                    ];

                    const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));

                    expect(matchesPattern).to.be.true;
                    
                })
        })
    }

    checkIfEventsNameHasLink(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    
        cy.get(this.eventRow).eq(0).click();
    
        cy.get(this.eventResultWidget).should('exist')
    }
}   