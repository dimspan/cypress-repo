// import { format } from 'date-fns';
export class team_squad_po{
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
        this.leagueNum = 0
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.teamSquadMobile = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
    }

    team_squad_exists(){
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
        cy.get(this.teamSquadWidget).should('exist')

        //cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){

         //checks the design of the headers}
         //Position
         cy.get(this.positionHeader).each((element,index)=>{
            cy.wrap(element).find('div[data-v-d56c0f94]')
            .should("have.css","position","relative")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","text-transform","capitalize")
         })
         //stats headers
         cy.get(this.statBoxHeaders).find('div[aria-label="Kampe spillet"]').each((element,index)=>{
             cy.wrap(element).should("have.css","font-weight","700")
             .and("have.css","font-size","14px")
             .and("have.css","text-transform","capitalize")
         })

         cy.get(this.statBoxHeaders).find('div[aria-label="Alder"]').each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","text-transform","capitalize")
        })
         

     
        //  //check the legend elements
        //  cy.get(this.legendElement)
        //     .should("have.css","font-weight","400")
        //     .and("have.css","font-family",'"Open Sans", sans-serif')
        //     .and("have.css","font-size","14px")
        //     .and("have.css","font-style","normal")
     
     
        //  //count the participants
         cy.get(this.teamSquadWidget)
            .find(this.participantClass)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")
           
    }

    check_all_texts_mobile(){  
        //check if the widget exists
        cy.get(this.teamSquadMobile).should("exist").and("be.visible")
        //checks the design of the headers
         //Position
         cy.get(this.positionHeader).each((element,index)=>{
            cy.wrap(element).find('div[data-v-d56c0f94]')
            .should("have.css","position","relative")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","text-transform","capitalize")
         })
         //stats headers
         cy.get(this.statBoxHeaders).find('div[aria-label="Kampe spillet"]').each((element,index)=>{
             cy.wrap(element).should("have.css","font-weight","700")
             .and("have.css","font-size","14px")
             .and("have.css","text-transform","capitalize")
         })

         cy.get(this.statBoxHeaders).find('div[aria-label="Alder"]').each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","text-transform","capitalize")
        })
         
        
     
        //  //check the legend elements
        //  cy.get(this.legendElement)
        //     .should("have.css","font-weight","400")
        //     .and("have.css","font-family",'"Open Sans", sans-serif')
        //     .and("have.css","font-size","14px")
        //     .and("have.css","font-style","normal")
     
     
        //  //count the participants
         cy.get(this.teamSquadMobile)
            .find(this.participantClass)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")
        
        
        //checks the headers text
         
        //Alder  
        cy.get('.wff_table_header_cell.wff_squad_stats_box').find(this.alderHeader).each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmedText = text.trim()
                expect(trimmedText).to.eql('Alder')
            })
        }) 
     
        //kampe spillet
        cy.get('.wff_table_header_cell.wff_squad_stats_box').find(this.kampeSpilletHeader).each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmedText = text.trim()
                expect(trimmedText).to.eql('K')
            })
        })   
        
    }

    check_tooltips(){
        //checks the tooltips
        //kampeSpillet
        cy.get(this.teamSquadWidget).find(this.kampeSpilletHeader).eq(0).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")

        //Alder
        cy.get(this.teamSquadWidget).find(this.alderHeader).eq(0).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Alder")

        // //kampeSpillet
        // cy.get(this.teamSquadWidget).find(this.drawUafgjort).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Uafgjort")

        // //kampeSpillet
        // cy.get(this.teamSquadWidget).find(this.tabt).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Tabt")
        
        // //mal 
        // cy.get(this.teamSquadWidget).find(this.mal).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")

        // //kampeSpillet
        // cy.get(this.teamSquadWidget).find(this.diff).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Forskel")
        
        // // //point
        // cy.get(this.teamSquadWidget).find(this.points).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")
    }

    check_form_popup(){
        //checks the pop-up
        //fixture icon
        cy.get(this.standingsWidget).find(this.fixturesIcon).trigger("mouseover")
        cy.get(this.eventInfoPopUp).should("exist").and("be.visible")

        //check next event status should not exist
        cy.get(this.statusEventPopUp).should('not.exist')

        //check the team names
        cy.get(this.teamNamesPopUp)
            .find('.wff_par_name_flag_wrapper')
            //.find('.wff_participant_name wff_responsive_text')
            .should("have.css","font-family",'"Open Sans", sans-serif')
            //.and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        //check the venue name
        cy.get(this.venuePopUp)
            .should("have.css","font-family",'"Open Sans", sans-serif')
            //.and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")    

        //check the tournament info
        cy.get(this.tournamentInfoHeader)
            .should("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")      

         
        // const fixtureIconFirstTeam = Cypress.$('.wff_standings_table_row.wff_row_0').find('.wff_table_row_column.wff_standings_form').eq(0).find('.wff_table_row_column_content_wrapper').find('.wff_form_ball.wff_form_fxtr').eq(0)
        // console.log(fixtureIconFirstTeam)
        // if(fixtureIconFirstTeam > 0){
        //     cy.get(this.standingsWidget).find(fixtureIconFirstTeam).trigger("mouseover")
        // }

        for(let i=1; i<5; i++){
            cy.get(this.standingsWidget).find(this.formIcons).eq(i).trigger("mouseover")
            cy.textEqualTo('.wff_tooltip_root_container',this.statusEventPopUp,"Slut")
        }
    }

    check_dropdowns(){
        //checks the dropdowns
        //check if the selected item from the list in the dropdown is the right one
        for(let i=0; i<3; i++){
            cy.get(this.standingsWidget).find(this.homeAwayDropdown).click()
            
            cy.get(this.homeAwayDropdownList)
                .find('.wff_standing_type_selector_list_item').eq(i).invoke("text").then((text)=>{
                    let trimmedText = text.trim()
                    cy.get('.wff_standing_type_selector_list_item').eq(i).click()
                    cy.get(this.selectedOption)
                        .eq(0).invoke("text").then((text)=>{
                            let textSelected = text.trim()
                            
                            expect(trimmedText).to.eql(textSelected)
                        })
                    // expect(trimmedText).to.eql(this.selectedOption)
                })
        }

        //check when selecting different season the content of the widget is visible
        for(let i=0; i<3; i++){
            cy.get(this.standingsWidget).find(this.seasonDropdown).click()
            cy.get(this.seasonDropdownList).should('exist')
            cy.get(this.seasonDropdownList).find('.wff_tournament_selector_list_item').eq(i).click()
            cy.get('.wff_standings_generic_content.wff_standings_premier_league').should('exist')
            cy.get(this.standingsWidget).find(this.standingsHeader).click()
        }
    }
}   