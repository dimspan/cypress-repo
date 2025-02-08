export class statistics_stilling_po{
    constructor(){
        this.malHeader = "h3:eq(0)"
        this.header = "h3:eq("
        this.teamHeaderArray = ["Mål","Målforsøg","Skud på mål","Frispark begået","Gule kort","Røde kort"]
        this.playerHeaderArray = ["Mål","Målforsøg","Assists","Frispark begået","Gule kort","Røde kort"]
        this.switch = ".es_team_player_switch_wrapper"
        this.switchContainer = ".team_player_switch"
        this.bars = ".es_std_bar_size"
        this.firstBar = ".es_std_bar_size:eq(0)"
        this.firstContainer = ".es_std_row:eq(0)"
        this.showAll = ".es-show-all:eq(0)"
        this.participant_name = ".es_td_participant_name"
        this.goals_bars_team = ".es_std_cmp.esc_std_cmp.esc_has_bars.es_goals_scored.er_switch_team.esm_comp.esm_statistics.es_comp_el"
        this.attempts_bars_team = ".es_std_cmp.esc_std_cmp.esc_has_bars.esc_no_data.es_total_shots.er_switch_player.esm_statistics.esm_comp.es_comp_el"
        this.statistics_button = ".es_menu_long_text:eq(3)"
        this.premier_league_button = ".esm_47:eq(0)"
    }
    checkTeamHeaders(){
     
        //checks the heeaders of team stats
        for (var i = 0; i<(this.teamHeaderArray).length; i++){
            cy.get(this.header + i + ")").should("have.text",this.teamHeaderArray[i])
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","font","700 20px Roboto")
            .and("have.css", "margin","0px 0px 60px")
        }
        //switch from team to player stats 
        
    }checkPlayerHeaders(){
        cy.get(this.switch)
        .find(this.switchContainer).click() 
        for (var i = 6; i<12; i++){
            cy.get(this.header + i + ")").should("have.text",this.playerHeaderArray[i-6])
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","font","700 20px Roboto")
            .and("have.css", "margin","0px 0px 60px")
        }
    }checkTeamBars(){
        cy.get(this.switch)
        .find(this.switchContainer).click()
        cy.get(this.bars).should("have.length",60)
        cy.get(this.firstBar).should("have.css","background-color","rgb(73, 185, 102)")
        //check if the team bars are visible 
        // for(var i =0;  i<30; i++){
            cy.get(this.bars).should("exist").and("be.visible")
            cy.borderRadius_Position_Bottom_Left(this.bars,"10px","absolute","0px","0px")   
            
        // }
        

    }checkPlayerBars(){
        
        cy.get(this.switch)
       .find(this.switchContainer).click()
        //check if the player bars are visible
        cy.get(this.bars).should("exist").and("be.visible")
        cy.borderRadius_Position_Bottom_Left(this.bars,"10px","absolute","0px","0px")          

    }
    checkShowLess(){
        cy.get(this.showAll).click()
        
    }
   check_if_everything_has_data() {
        cy.contains("Ingen statistik endnu").should("not.exist")  
        cy.get(this.switch)
        .find(this.switchContainer)
        .click()
        cy.contains("Ingen statistik endnu").should("not.exist")
      
        
    }
    team_page_stats_tab(){// go to stats tab in team page
        cy.get(this.statistics_button).click()
        .wait(1000)
        cy.get(this.premier_league_button).click()
        .wait(1000)
    }
          
    

}