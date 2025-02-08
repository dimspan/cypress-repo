export class icehockey_lineups_po{
    constructor(){
        this.lineups_code = ".wff_widget.wff_widget_FWE7DD1DE9FF1C2491.wff_widget_large"
        this.home_team_container = ".wff_lineups_participant_wrapper.wff_team_8302" // ID of Sevilla
        this.away_team_container = ".wff_lineups_participant_wrapper.wff_team_8686" // ID of Rome
        this.participant_link = ".wff_participant_link"
        this.coach_row = ".wff_participant.wff_responsive_text_no_display.wff_lineup_pt_coach.wff_participant_row_0"
        this.flag_logo = ".wff_flag_and_logo_container.wff_national_team"
        this.substitution_out_icon = ".icon-soccer_substitution_out"
        this.yellow_card_icon = ".icon-soccer_yellow_card"
        this.own_goal_icon = ".icon-soccer_own_goal"
        this.penalty_shootout_scored = ".icon-soccer_shootout_penalty"
        this.penalty_shootout_missed = ".icon-soccer_shootout_penalty_missed"
        this.substitution_in_icon = ".icon-soccer_substitution_in"
        this.suspended_icon = ".icon-suspended"
        this.injured_icon = ".icon-injured"
        this.team_rating_6_7 = ".wff_team_rating.wff_rating_6_7"
        this.player_rating_5_6 = ".wff_participant_rating.wff_rating_5_6"
        this.player_rating_6_7 = ".wff_participant_rating.wff_rating_6_7"
        this.player_rating_7_8 = ".wff_participant_rating.wff_rating_7_8"
        this.player_rating_8_9 = ".wff_participant_rating.wff_rating_8_9"   
        this.expandedArrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsedArrow = ".wff_icon_container.icon-collapsed_arrow_container"
        this.header_class = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.player_class = ".wff_participant_link"
        this.player_shirt_number = '.wff_participant_rank_root.wff_small'
        this.mom_icon = ".icon-mom" //man of the match
        this.tooltip = ".wff_tooltip_root"
        this.elapsed_in_tooltip = ".wff_tooltip_elapsed"
        this.man_of_the_match_text = ".wff_tooltip_participant_text"
        this.flag_logo_img = ".wff_flag_logo_img"
        this.home_team = ".wff_participant_name.wff_responsive_text:eq(0)"
        this.away_team = ".wff_participant_name.wff_responsive_text:eq(25)"
        this.participant_name =".wff_participant_name.wff_responsive_text" 
        this.array_headers = ["1st Line","2nd Line","3rd Line","4th Line","Substitutes","Unavailable Players","Coach","1st Line","2nd Line","3rd Line","4th Line","Substitutes","Unavailable Players","Coach"]
        this.stats_headers = ".wff_label_text.wff_responsive_text.wff_label_header"
        this.first_team_stats = ".wff_label_text.wff_team_1"
        this.second_team_stats = ".wff_label_text.wff_team_2"
        this.tooltip_text = ".wff_tooltip_text"
    }
    check_links(){
        cy.checkRequestOfLinks(this.lineups_code,this.participant_link,200) //check links of players

        //coaches shouldn't have a link
        cy.get(this.lineups_code).within(()=>{
            cy.get(this.coach_row).should((element)=>{
                const hasSubClass = element.find(this.participant_link).length > 0;
                if(hasSubClass == false){
                    expect(hasSubClass).to.be.false
                }
                else{
                    throw Error
                }
                
            })
        })
    }
    check_visual_elements(){ // add collapse expand arrows
        cy.get(this.lineups_code).within(()=>{
            //check flags
            // cy.flag_logo_style(this.flag_logo,"20px","20px","0px none rgb(0, 0, 0)") //player flags 
            cy.flag_logo_style(this.flag_logo_img,"20px","20px","0px none rgb(0, 0, 0)") //all flags
           
        })
    }
    check_ratings(){
        
        cy.get(this.lineups_code).within(()=>{
            //team
            cy.lineups_ratings(this.team_rating_6_7,"rgb(251, 207, 33)")
          
            //players with rating above 
            cy.lineups_ratings(this.player_rating_5_6,"rgb(251, 149, 33)")
          
            //player with rating above 6
            cy.lineups_ratings(this.player_rating_6_7,"rgb(251, 207, 33)")
        
            //players with rating above 7
            cy.lineups_ratings(this.player_rating_7_8,"rgb(154, 230, 0)")
       
            //players with rating above 8 
            cy.lineups_ratings(this.player_rating_8_9,"rgb(0, 194, 92)")           

        })
    }
    expand_collapse_sections(){
        cy.get(this.lineups_code).within(()=>{   
            //collapse         
            cy.get(this.header_class).each((element,index)=>{
                cy.wrap(element).click()                
            })
            cy.get(this.participant_name).should("have.length",2)            
            .and("be.visible")       
            //expand
            cy.get(this.header_class).each((element,index)=>{
                cy.wrap(element).click()                
            })
            cy.get(this.participant_name).should("have.length",49)            
            .and("be.visible")   
        })
        

        
    }
    check_headers(){
        cy.get(this.lineups_code).within(()=>{
            cy.WeightSize(this.header_class,"14px","700")
            //element headers
            cy.get(this.header_class).each((element,index)=>{
            
                cy.wrap(element).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    // console.log(index)
                    cy.wrap(trimmed_text).should("eq",this.array_headers[index])
                })
            })
            //stats headers G A P
            let newcounter = 0
            cy.WeightSize(this.stats_headers,"14px","700")
            // cy.get(this.stats_headers).eq(0).invoke("text")               
            })
            cy.textEqualTo(this.lineups_code+":eq(0)",this.stats_headers+":eq(0)","G")
            cy.textEqualTo(this.lineups_code+":eq(0)",this.stats_headers+":eq(1)","A")
            cy.textEqualTo(this.lineups_code+":eq(0)",this.stats_headers+":eq(2)","P")

    }
    check_texts(){        
        cy.get(this.lineups_code).within(()=>{          
            //home away team headers text
            cy.WeightSize(this.home_team,"14px","700")
            cy.WeightSize(this.away_team,"14px","700")
            for(var i = 1; i <49; i++){
                if( i !=25){
                    cy.get(this.participant_name).eq(i)
                    .should("have.css","font-weight","400")
                    .and("have.css","font-size","14px")
                    .and("have.css","color","rgb(0, 0, 0)")
                    .and("have.css","font-family","Roboto, sans-serif")
                }
      
            }
        })
    }
    check_tooltips(){
        cy.get(this.lineups_code).within(()=>{
            cy.get(this.first_team_stats).each((element,index)=>{
                cy.wrap(element).trigger("mouseover")
                cy.get(this.tooltip).should("be.visible")
                .and("have.css","padding","10px")
                .and("have.css","border-radius","10px")
                .and("have.css","border","1px solid rgb(229, 229, 229)")
                .and("have.css","background-color","rgb(0, 0, 0)")
                .and("have.css","color","rgb(255, 255, 255)")
                .trigger("mouseleave")
            })
            cy.get(this.second_team_stats).each((element,index)=>{
                cy.wrap(element).trigger("mouseover")
                cy.get(this.tooltip).should("be.visible")
                .and("have.css","padding","10px")
                .and("have.css","border-radius","10px")
                .and("have.css","border","1px solid rgb(229, 229, 229)")
                .and("have.css","background-color","rgb(0, 0, 0)")
                .and("have.css","color","rgb(255, 255, 255)")
                .trigger("mouseleave")
            })
            //check one tooltip with multiple elements
            cy.get(this.first_team_stats).eq(1).trigger("mouseover")
            cy.get(this.tooltip).within(()=>{
                cy.WeightSize(this.elapsed_in_tooltip,"14px","600")
                cy.get(this.elapsed_in_tooltip).should("have.length","4")
                .and("have.css","font-family","Roboto, sans-serif")

                cy.WeightSize(this.tooltip_text,"14px","400")
                cy.get(this.tooltip_text).should("have.css","font-family","Roboto, sans-serif")
                .and("have.length",4)              
            })
            
            


            

        })
    }
    check_data_text(){
        cy.get(this.lineups_code).within(()=>{
            cy.WeightSize(this.first_team_stats,"14px","400")
            cy.get(this.first_team_stats).should("have.css","font-family","Roboto, sans-serif")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","cursor","pointer")

            cy.WeightSize(this.second_team_stats,"14px","400")
            cy.get(this.second_team_stats).should("have.css","font-family","Roboto, sans-serif")
            .and("have.css","color","rgb(0, 0, 0)")            
            .and("have.css","cursor","pointer")
        })
    }
}