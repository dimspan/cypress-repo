export class ice_hockey_player_info_po{
    constructor(){
        this.widget_code = ".wff_widget.wff_widget_FW490883B33F5B4AC7.wff_widget_medium"
        this.flag_logo_container = ".wff_flag_and_logo_container"
        this.player_name = ".wff_participant_name.wff_responsive_text"
        this.country_club_class = ".wff_player_country_club"
        this.info_category = ".wff_info_category"
        this.info_value =".wff_info_value"
        this.expected_stats_array = ["Name","Age","Nationality","Club","Position","Club shirt number"]
        this.expected_data_array = ["Igor Shesterkin","28 (30/12/1995)","Russia","New York Rangers","Goaltender","31"]
        this.background_class = ".icon-background-player-info"
        this.zebra_rows_class = ".wff_info_row.wff_zebra_row"
        this.national_flag = ".wff_flag_and_logo_container.wff_national_team"
        this.club_logo = ".wff_flag_and_logo_container:eq(1)"

    }
    check_player_name_and_logo(){
        cy.get(this.widget_code)
        .should("be.visible")
        cy.get(this.widget_code).within(()=>{
            //check the logo
            cy.get(this.flag_logo_container)
            .should("have.attr","style","min-width: 40px; width: 40px; height: 40px;")
            .and("have.css","min-width","40px")
            .and("have.css","width","40px")
            .and("have.css","height","40px")
            .and("have.css","margin-right","10px")

            //check the player name
            cy.checkTextSize(this.player_name,20)
            cy.get(this.player_name)
            .should("have.css","font-weight","700")
            .and("have.css","display","block")
            .and("have.css","text-align","center")
            .and("have.css","white-space","normal")
            .and("have.css","text-align-last","center")
            .and("have.css","outline","rgb(255, 255, 255) none 0px")
            

            //check the team name
            cy.get(this.country_club_class).should("be.visible")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","12px")
            .and("have.css","margin","2px 0px 0px")
            .and("have.css","color","rgb(255, 255, 255)")
            
            
        })
    }
    check_data(){
        cy.get(this.widget_code).within(()=>{
            //check static data
        cy.get(this.info_category).each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                console.log(index)                
                cy.expect(trimmed_text).to.eq(this.expected_stats_array[index])
            })
        })
        //check values
        cy.get(this.info_value).each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.eq(this.expected_data_array[index])
            })
        })
        //check static data
        cy.get(this.info_category)
        .should("have.css","font-weight","400")
        .and("have.css","align-items","center")
        .and("have.css","text-transform","capitalize")
        .and("have.css","font-size","14px")

        //check values
        cy.get(this.info_value)
        .should("have.css","font-weight","400")
        .and("have.css","align-items","center")
        .and("have.css","text-transform","none")
        .and("have.css","font-size","14px")
        })
        
    }
    check_background_image(){
        cy.get(this.widget_code).within(()=>{
            cy.get(this.background_class)
            .should("have.css","border-radius","10px")
            .and("have.css","width","541.65625px")
            .and("have.css","height","120px")
            .and("have.css","background-size","cover")
            .and("have.css","display","flex")
            .and("have.css","flex-direction","column")
            .and("have.css","justify-content","center")
            .and("have.css","background-position","50% 50%")
        })
       

    }
    check_zebra_rows(){
        cy.get(this.widget_code).within(()=>{
            cy.get(this.zebra_rows_class)
            .should("have.css","border","0px none rgb(255, 255, 255)")
            .and("have.css","border-radius","4px")
            .and("have.css","height","50px")
            .and("have.css","flex","0 0 auto")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","space-between")
    
            cy.get(this.zebra_rows_class).eq(0)
            .should("have.css","background-color","rgb(248, 248, 248)")        
            cy.get(this.zebra_rows_class).eq(1)
            .should("have.css","background-color","rgb(255, 255, 255)")
        })
       
    }
    check_flags(){
        cy.get(this.widget_code).within(()=>{
            //national flag
            cy.get(this.national_flag)
            .should("have.css","width","20px")
            .and("have.css","height","20px")
            .and("be.visible")
            //team logo
            cy.get(this.club_logo)
            .should("have.css","width","20px")
            .and("have.css","height","20px")
            .and("be.visible")
        })
        
        

        
        


    }

}