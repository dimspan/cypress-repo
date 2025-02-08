export class player_career_po{
    constructor(){
        this.widget_component = ".wff_widget.wff_widget_FW3AA5A01FD7C80387.wff_widget_wide"
        this.site_header = ".esmx-title.esm_comp.esm_career.es_widget_container-title"
        this.header_class = ".wff_label_text"
        this.text_wrapper = ".wff_label_text_wrapper"
        this.array_with_headers = ["Sæson","","K","Min"]//the second element is empty because of the weird widget's structure at the moment
        this.k_header = ".wff_table_header_cell.wff_player_career_stat_box.wff_stat_matches_played"
        this.tooltip_class = ".wff_tooltip_root"
        this.min_header = ".wff_table_header_cell.wff_player_career_stat_box.wff_stat_min_played"
        this.icon_assists = ".wff_icon_assists"
        this.icon_goal = ".wff_icon_soccer_goal_black"
        this.icon_arrow = ".wff_icon_arrow"
        this.logo_class = ".wff_flag_and_logo_container.wff_national_team"
        this.club_logo = ".wff_flag_logo_img"
        this.matches_values = ".wff_played"
        this.min_values = ".wff_min"
        this.assists_values = ".wff_assists"
        this.goals_values = ".wff_goals"
        this.array = [this.matches_values,this.min_values,this.assists_values,this.goals_values]
    }
    check_site_component_header(){
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
        cy.get(this.text_wrapper)
        .should("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        .and("have.css","margin","0px")
        .and("have.css","color","rgb(0, 0, 0)")        
    }
    check_headers_values(){
        cy.get(this.text_wrapper).each((element,index)=>{
            if(index == 1){
                console.log("skip 1")
            }else if (index >3){
                console.log("skip the last element")
            }
            else{
                cy.wrap(element).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    console.log(trimmed_text)
                    cy.expect(trimmed_text).to.eq(this.array_with_headers[index])
                })
            }
           
        })
    }
    check_tooltips(){
        cy.get(this.widget_component).within(()=>{
            //k
            cy.get(this.k_header).trigger('mouseover')
            cy.get(this.tooltip_class).should("be.visible")            
            cy.checkHeaders(this.tooltip_class,"Kampe spillet")
            //Min
            cy.get(this.min_header).trigger("mouseover")
            cy.get(this.tooltip_class).should("be.visible")
            cy.checkHeaders(this.tooltip_class,"Minutter")
            //icon assists
            cy.get(this.icon_assists).trigger("mouseover")
            cy.get(this.tooltip_class).should("be.visible")
            cy.checkHeaders(this.tooltip_class,"Assists")
            //icon goals
            cy.get(this.icon_goal).trigger("mouseover")
            cy.get(this.tooltip_class).should("be.visible")
            cy.checkHeaders(this.tooltip_class,"Mål")            
        })       
    }
    open_headers(){
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
        cy.get(this.club_logo)
        .should("be.visible")
        .and("have.css","height","20px")
        .and("have.css","width","20px")
        .and("have.css","aspect-ratio","auto 20 / 20")
        cy.get(this.icon_arrow)
        .should("be.visible")
        .and("have.css","height","20px")
        .and("have.css","width","20px")
        .and("have.css","aspect-ratio","auto")
        

    }
    check_font_styles(){
        cy.get(this.widget_component).within(()=>{
            //matches
            cy.get(this.matches_values)
            .should("be.visible")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            //min
            cy.get(this.min_values)
            .should("be.visible")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            //assists 
            cy.get(this.assists_values)
            .should("be.visible")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            //goals 
            cy.get(this.goals_values)
            .should("be.visible")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")

        })
    }
    check_if_all_values_are_displayed(){//checks if the values are - or numer
        for (var i = 0; i < this.array.length;i++){
            cy.get(this.array[i]).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.satisfy((val)=>{
                    return val === '-' || (!isNaN(parseFloat(val)) && parseFloat(val) >= -10000 && parseFloat(val) <= 10000);
                })
            // })should((input)=>{
            //     const value = input.val()
            //     expect(value).to.satisfy((val)=>{
            //         return val === '-' || (!isNaN(parseFloat(val)) && parseFloat(val) >= -1000 && parseFloat(val) <= 10000);
            //     })
            })
        }
    }
}
