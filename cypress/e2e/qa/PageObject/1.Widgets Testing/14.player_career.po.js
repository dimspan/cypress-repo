export class ice_hockey_player_career_po{
    constructor(){
        this.widget_component = ".wff_widget.wff_widget_FW883134370A218ABF.wff_widget_large"
        this.site_header = ".esmx-title.esm_comp.esm_career.es_widget_container-title"
        this.header_class = ".wff_label_text"
        this.text_wrapper = ".wff_label_text_wrapper"
        this.array_with_headers = ["Season","Club","Tournament","MP","MPG","Assists","Goals"]//the second element is empty because of the weird widget's structure at the moment
        this.matches_played = ".wff_table_header_cell.wff_player_career_stat_box:eq(0)"
        this.tooltip_class = ".wff_tooltip_root"
        this.min_header = ".wff_table_header_cell.wff_player_career_stat_box:eq(1)"
        this.icon_assists = ".wff_table_header_cell.wff_player_career_stat_box:eq(2)"
        this.icon_goal = ".wff_table_header_cell.wff_player_career_stat_box.wff_player_career_goals"
        this.icon_arrow = ".wff_icon_arrow"
        this.logo_class = ".wff_flag_and_logo_container.wff_national_team"
        this.club_logo = ".wff_flag_logo_img"
        this.matches_values = ".wff_played"
        this.min_values = ".wff_mpg"
        this.assists_values = ".wff_assists"
        this.goals_values = ".wff_goals"
        this.array = [this.matches_values,this.min_values,this.assists_values]
        this.tooltip_text = ".wff_tooltip_participant_text"
        this.team_names = ".wff_participant_name.wff_responsive_text"
        this.season = ".wff_tournament_season"
        this.goals_array_data =["8","12","-","1","5","5","1","6","3","9","1","16","-","12","3"]
    }
    check_site_component_header(){//only for sites
        cy.get(this.site_header).invoke("text").then((text)=>{
            cy.wrap(text).should("eq","Karriere")
        })
        cy.get(this.site_header)
        .should("have.css","font-weight","700")
        .and("have.css","font-size","20px")
        .and("have.css","margin","0px 0px 10px")
        .and("have.css","color","rgb(0, 0, 0)")
    }
    check_widget_headers(){
        cy.get(this.widget_component).within(()=>{
            cy.get(this.text_wrapper)
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","margin","0px")
            .and("have.css","color","rgb(0, 0, 0)")     
        })
           
    }
    check_headers_values(){
        cy.get(this.widget_component).within(()=>{
            cy.get(this.text_wrapper).each((element,index)=>{
                // if(index == 1){
                //     console.log("skip 1")
                // }else if (index >3){
                //     console.log("skip the last element")
                // }
                // else{
                    cy.wrap(element).invoke("text").then((text)=>{
                        let trimmed_text = text.trim()
                        console.log(trimmed_text)
                        cy.expect(trimmed_text).to.eq(this.array_with_headers[index])
                    })
                // }
               
            })
        })
     
    }
    check_tooltips(){
        cy.get(this.widget_component).within(()=>{
            //matches played
            cy.get(this.matches_played).trigger('mouseover')
            cy.get(this.tooltip_class).should("be.visible") 
            .and("have.css","align-items","normal")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","background-color","rgb(0, 0, 0)")
            .and("have.css","color","rgb(255, 255, 255)")
            cy.get(this.tooltip_text)
            .should("be.visible")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            cy.checkHeaders(this.tooltip_class,"Matches Played")

            //Min
            cy.get(this.min_header).trigger("mouseover")
            cy.get(this.tooltip_class).should("be.visible") 
            .and("have.css","align-items","normal")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","background-color","rgb(0, 0, 0)")
            .and("have.css","color","rgb(255, 255, 255)")
            cy.get(this.tooltip_text)
            .should("be.visible")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            cy.checkHeaders(this.tooltip_class,"Minutes Per Game")

            //assists
            cy.get(this.icon_assists).trigger("mouseover")            
            cy.get(this.tooltip_class).should("be.visible") 
            .and("have.css","align-items","normal")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","background-color","rgb(0, 0, 0)")
            .and("have.css","color","rgb(255, 255, 255)")
            cy.get(this.tooltip_text)
            .should("be.visible")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            cy.checkHeaders(this.tooltip_class,"Assists")
            //icon goals
            cy.get(this.icon_goal).trigger("mouseover")
            cy.get(this.tooltip_class).should("be.visible") 
            .and("have.css","align-items","normal")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","background-color","rgb(0, 0, 0)")
            .and("have.css","color","rgb(255, 255, 255)")
            cy.get(this.tooltip_text)
            .should("be.visible")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            cy.checkHeaders(this.tooltip_class,"Goals")            
        })       
    }
    open_headers(){ //not applicable for ice hockey
        cy.get(this.widget_component).within(()=>{
            cy.get(this.icon_arrow).each((element,index)=>{
                cy.wrap(element).click()
                cy.get(".wff_stage_name.wff_responsive_text.wff_uppercase_text_transform")
                .should("be.visible")
                //check the flags of everything in the sections
                cy.get(this.logo_class).should("have.css","width","20px")
                .and("have.css","height","20px")
                .and("have.css","aspect-ratio","auto")
            })
        })
    }
    check_visual_elements(){
        cy.get(this.widget_component).within(()=>{
            cy.get(this.club_logo)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")
            .and("have.css","aspect-ratio","auto 20 / 20")
            // cy.get(this.icon_arrow) not applicable for ice hockey
            // .should("be.visible")
            // .and("have.css","height","20px")
            // .and("have.css","width","20px")
            // .and("have.css","aspect-ratio","auto")
        })
        
        

    }
    check_font_styles(){
        cy.get(this.widget_component).within(()=>{
            //matches
            cy.get(this.matches_values)
            .should("be.visible")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            .and("have.css","font-family","Roboto, sans-serif")
            //min
            cy.get(this.min_values)
            .should("be.visible")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            .and("have.css","font-family","Roboto, sans-serif")
            //assists 
            cy.get(this.assists_values)
            .should("be.visible")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            .and("have.css","font-family","Roboto, sans-serif")
            //goals 
            cy.get(this.goals_values)
            .should("be.visible")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            .and("have.css","font-family","Roboto, sans-serif")
            //team names
            cy.get(this.team_names)
            .should("be.visible")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            .and("have.css","font-family","Roboto, sans-serif")
            //season
            cy.get(this.season)
            .should("be.visible")
            .and("have.css","font-weight","400")
            .and("have.css","font-size","14px")
            .and("have.css","font-family","Roboto, sans-serif")
            cy.get(this.season).each((element,index)=>{
                cy.wrap(element)
                .invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text)
                    .should('satisfy', value => {
                      return /^\d{2}\/\d{2}$/.test(value) || /^\d{4}$/.test(value); // this is to match 22/23 or 2022
                    });
                })
            })
            
        })
    }
    check_if_all_values_are_displayed(){
        cy.get(this.widget_component).within(()=>{
            for (var i = 0; i < this.array.length;i++){
                cy.get(this.array[i]).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.expect(trimmed_text).to.satisfy((val)=>{
                        console.log(trimmed_text)
                        return trimmed_text === '-' || (!isNaN(parseFloat(val)) && parseFloat(val) >= -10000 && parseFloat(val) <= 10000);
                    })
                    cy.get(this.goals_values).each((element,index)=>{
                        cy.wrap(element).invoke("text").then((text)=>{
                            let trimmed_text = text.trim()
                            cy.wrap(trimmed_text).should("eq",this.goals_array_data[index])
                        })
                    })
                })
            }
        })//checks if the values are - or numer
     
    }
}
