export class formations_po{
    constructor(){
        this.formations_code = ".wff_widget.wff_widget_FW47A27F352F799EB8.wff_widget_wide"
        this.participant_shirt = ".wff_participant_shirt"
        this.team_rating = ".wff_team_rating"
        this.players_rating = ".wff_participant_rating"
        this.substitution_out_icon = ".wff_icon_container.icon-soccer_substitution_out_container.wff_stats_ball_icon.wff_icon_soccer_substitution_out"
        this.substitution_in_icon = ".wff_icon_container.icon-soccer_substitution_in_container.wff_stats_ball_icon.wff_icon_soccer_substitution_in"
        this.red_card_icon = ".wff_icon_container.icon-suspended_container.wff_stats_ball_icon.wff_icon_suspended"
        this.yellow_card_icon = ".wff_icon_container.icon-soccer_yellow_card_container.wff_stats_ball_icon.wff_icon_soccer_yellow_card"
        this.injury_icon = ".wff_icon_container.icon-injured_container.wff_stats_ball_icon.wff_icon_injured"
        this.tooltip_class = ".wff_tooltip_root_container"
        this.participant_link_class = ".wff_tooltip_par_link"
        this.shirt_number = ".wff_tooltip_shirt_number"
        this.participant_name_tooltip = ".wff_tooltip_par_name"
        this.participant_team_name = ".wff_participant_name.wff_responsive_text"
        this.team_name_formation = ".wff_team_rating_formation"
    }
    check_visual_elements(){
        //shirts
        cy.get(this.formations_code).within(()=>{
            cy.get(this.participant_shirt)
            .should("be.visible")
            .and("have.attr","style",'background-image: url("https://es-bimg.enetscores.com/img/formations/team_shirt_0.svg"); width: 96px; height: 96px; background-size: cover; background-repeat: no-repeat;')
            .and("have.css","width","50px")
            .and("have.css","height","38px")
            .and("have.css","background-size","cover")
            .and("have.css","background-repeat","no-repeat")
            .and("have.css","transform","matrix(-1, 0, 0, -1, 0, 0)")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","max-width","50px")
            .and("have.css","max-height","38px")
            .and("have.css","border-radius","0px")
            .and("have.css","margin-left","0px")

            //check ratings
            //team
            cy.get(this.team_rating)
            .should("be.visible")
            .and("have.css","font-size","12px")
            .and("have.css","justify-content","center")
            .and("have.css","align-items","center")
            .and("have.css","width","22px")
            .and("have.css","height","22px")
            //player ratings
            cy.get(this.players_rating)
            .should("be.visible")
            .and("have.css","display","flex")
            .and("have.css","border-radius","50%")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-width","22px")
            .and("have.css","max-width","22px")
            .and("have.css","width","22px")
            .and("have.css","height","22px")

            //substitutions icons
            //out
            cy.get(this.substitution_out_icon)
            .should("be.visible")
            .and("have.css","border-radius","50%")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-width","22px")
            .and("have.css","max-width","none")
            .and("have.css","width","22px")
            .and("have.css","height","22px")
            //in
            cy.get(this.substitution_in_icon)
            .should("be.visible")
            .and("have.css","border-radius","50%")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-width","22px")
            .and("have.css","max-width","none")
            .and("have.css","width","22px")
            .and("have.css","height","22px")
            //red cards
            cy.scrollTo("bottom")
            cy.get(this.red_card_icon)
            .should("be.visible")
            .and("have.css","border-radius","50%")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-width","22px")
            .and("have.css","max-width","none")
            .and("have.css","width","22px")
            .and("have.css","height","22px")
            //yellow cards
            cy.get(this.yellow_card_icon)
            .should("be.visible")
            .and("have.css","border-radius","50%")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-width","22px")
            .and("have.css","max-width","none")
            .and("have.css","width","22px")
            .and("have.css","height","22px")
            //injury icon 
            cy.get(this.injury_icon)
            .should("be.visible")
            .and("have.css","border-radius","50%")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-width","22px")
            .and("have.css","max-width","none")
            .and("have.css","width","22px")
            .and("have.css","height","22px")

        })

        


    }
    check_tooltips(){
        cy.get(this.formations_code).within(()=>{
            cy.get(this.participant_shirt).not(".wff_manager").each((element,index)=>{
                cy.wrap(element)    
                .trigger("mouseover")
                //check the tooltip 
                cy.get(this.tooltip_class)
                .should("be.visible")
                .and("have.css","padding","13px 10px")
                .and("have.css","border","1px solid rgb(229, 229, 229)")
                .and("have.css","border-radius","10px")
                .and("have.css","font-size","12px")
                .and("have.css","font-weight","400")
                .and("have.css","min-width","100%")
                .and("have.css","flex-direction","column")
                .and("have.css","justify-content","center")
                .and("have.css","align-items","center")
                .and("have.css","color","rgb(0, 0, 0)")
                .and("have.css","background-color","rgb(255, 255, 255)")
                //participant link component
                cy.get(this.participant_link_class)
                .should("be.visible")
                .and("have.css","font-size","14px")                
                .and("have.css","background-color","rgba(0, 0, 0, 0.9)")
                cy.get(".wff_label_text")
                .should("have.css","font-weight","700")
                
                //check the basics of the tooltip
                //circle with shirt number
                cy.get(this.shirt_number)
                .should("have.css","display","flex")
                .and("have.css","min-width","24px")
                .and("have.css","height","24px")
                .and("have.css","align-items","center")
                .and("have.css","justify-content","center")
                .and("have.css","border-radius","50%")
                .and("have.css","color","rgb(255, 255, 255)")
                .and("have.css","background-color","rgb(51, 51, 51)")
                
                cy.get(this.participant_name_tooltip)
                .should("have.css","font-weight","700")
                .and("have.css","font-size","14px")

                .trigger("mouseleave")
                

            })
        })
    }
    check_links(){
        cy.get(this.formations_code).within(()=>{
           
            cy.get(this.participant_shirt).not(".wff_manager").eq(0)
            .trigger('mouseover')
            cy.get(this.participant_link_class).eq(0)
                    
            .invoke("attr","href").then((href)=>{
                cy.request(href).its("status").should('eq',200)
                  
            }                     
        )  
       
    })
    
            
            
    }
    check_formations_texts(){
        cy.get(this.formations_code).within(()=>{
            cy.get(this.participant_team_name)            
            .should("have.css","font-weight","700")
            cy.get(this.team_name_formation)
            .should("have.css","color","rgb(255, 255, 255)")
            .and("have.css","font-size","14px")

        })
    }
}

