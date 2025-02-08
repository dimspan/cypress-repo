export class player_page_tabs_switch_po {
    constructor(){
        this.klub_tab = ".esm_club_li"
        this.premier_league = ".esm_20720"
        this.career_button = ".esm_career_li"
        this.kampbutton = ".esm_match_li"
        this.lineupsbutton = ".esm_lineups_li"
        this.formations_button = ".esm_formations_li"
        this.event_stats_button = ".esm_hold_statistik_li"
        this.player_statistics_button = ".esm_spiller_statistik_li"
        this.h2h = ".esm_h2h_li"
    }
    get_to_klub(){
        cy.get(this.klub_tab).click()
    }
    get_to_premier_league(){
        cy.get(this.premier_league).click()
        
    }
    get_to_karriere(){
        cy.get(this.career_button).click()
    }
    get_to_kamp_matchpage(){
        cy.get(this.kampbutton).click()
    }
    get_to_opstillinger(){
        cy.get(this.lineupsbutton).click()
    }
    get_to_formationer(){
        cy.get(this.formations_button).click()
    }
    get_to_event_stats(){
        cy.get(this.event_stats_button).click()
    }
    get_to_player_statistics(){
        cy.get(this.player_statistics_button).click()
    }
    get_to_h2h(){
        cy.get(this.h2h).click()
    }
        

}