export class ice_hockey_team_info_po{
    constructor(){
        this.main_team_logo = ".wff_flag_logo_img"
        this.team_name_header = ".es_team_name"
        this.array_with_categories = ["Name","Country","Coach","National League","Played matches","Won Matches","Form"]
        this.category = ".wff_info_category"
        this.oddRow = ".wff_info_row.wff_row_0"
        this.evenRow = ".wff_info_row.wff_row_1"
        this.flag_logo = ".wff_flag_logo_img"
        this.medium_view_team_info = ".wff_widget.wff_widget_FW0D87358E6F5759AF.wff_widget_large"
        this.flag_logo_container = ".wff_flag_and_logo_container.wff_national_team"
        this.form_class = ".wff_form"
        this.form_win = ".wff_form_ball.wff_form_w"
        this.form_draw = ".wff_form_ball.wff_form_d"
        this.form_lose = ".wff_form_ball.wff_form_l"
        this.form_fixture = ".wff_form_ball.wff_form_fxtr"
        this.label_text = ".wff_label_text"
        this.event_info_tooltip = ".wff_widget.wff_team_info_event_info.wff_widget_FW0D87358E6F5759AF.wff_widget_small.wff_event_info_visible"
        this.ei_stage = ".wff_tournamen_container"
        this.ei_header = ".wff_event_info_header"
        this.ei_venue = ".wff_event_venue_attendance"
        this.score_box = ".wff_event_result_single_row_wrapper"
        this.ei_status = ".wff_event_start_time_status_container.wff_responsive_text.wff_status_finished"
        this.team_name = ".wff_participant_name.wff_responsive_text" //team name in the left
        this.group_name = ".wff_group_name"
        this.value_country = ".wff_info_value.country"
        
    }
check_team_and_tournament_name(){
    try{
        cy.get(this.medium_view_team_info).within(()=>{
            //main team logo in the left
            cy.get(this.team_name).invoke("width").then((width)=>{
                // const WidthNumber = width.replace('px', '');
                let roundedWidthNumber = Math.floor(parseFloat(width))
                cy.wrap(roundedWidthNumber).should("eq",151)
            })
          
            cy.get(this.team_name)
            .should("have.css","height","28px")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","font-family","Roboto, sans-serif")
            cy.WeightSize(this.team_name,"24px","700")

            cy.get(this.group_name) 
            .should("have.css","font-size","14px")
            .and("have.css","font-weight","700")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","font-family","Roboto, sans-serif")
        })
        
    }catch(error){
        console.error("An error occurred:",error.message)
        throw Error
    }
    
}
check_team_info_properties(){
    try{
        cy.get(this.medium_view_team_info).within(()=>{
               // checks the font - size
        cy.get(this.category)
        .each((element,index)=>{
            cy.wrap(element)
            .should("have.css","font-size","14px")
            .and("have.css","font-weight","400")
            .and("have.css","font-family","Roboto, sans-serif")        
        })
        // Checks the zebra rows
        cy.get(this.oddRow)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","background-color","rgb(255, 255, 255)")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","border-color","rgb(255, 255, 255)")
            .and("have.css","border-radius","4px")
        })
        cy.get(this.evenRow)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","background-color","rgb(248, 248, 248)")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","border-color","rgb(255, 255, 255)")
            .and("have.css","border-radius","4px")
        })

        // Check flag's size 
        cy.get(this.flag_logo_container)
        .find(this.flag_logo)
        .should("have.css","width","20px")
        .and("have.css","height","20px")
        .and("have.css","border", "1px solid rgb(204, 204, 204)")
        .and("have.css","aspect-ratio","auto 20 / 20")
        })
     
    }catch(error){
        console.error("An error occurred", error.message)
        throw Error
    }
   

    
}
check_form_icons(){
    try{
        
        //form fixture
    cy.get(this.medium_view_team_info).within(()=>{
        //no fixtures now
        // cy.get(this.form_fixture)
        // .should("have.css","width","20px")
        // .and("have.css","height","20px")    
        // .and("have.css","font-weight","400")
        // .and("have.css","align-items","center")
        // .and("have.css","justify-content","center")
        // // Check the font-size in the circles
        // cy.get(this.label_text)
        // .each((element,index)=>{
        //     cy.wrap(element)
        //     .should("have.css","font-size","12px")
        // })
        // check the form win  
        cy.get(this.form_win)
        .should("have.css","width","20px")
        .and("have.css","height","20px")    
        .and("have.css","font-weight","400")
        .and("have.css","align-items","center")
        .and("have.css","justify-content","center")    
    })
  
    }
    catch(error){
        console.error("An error occured:",error.message)
        throw Error
    }
                     
}
check_event_info(){
    try{
        //Win form
        cy.get(this.medium_view_team_info).within(()=>{
            cy.get(this.form_win).eq(0).trigger("mouseover").wait(1000)
            cy.get(this.event_info_tooltip)
            .should("exist")

            cy.get(this.ei_stage)
            .should("have.css","font","12px Roboto, sans-serif")
            //check the header
            cy.get(this.ei_header)
            .should("have.css","padding","0px")
            .and("have.css","font-size","12px")
            //check the venue
            cy.get(this.ei_venue)
            .should("have.css","text-transform","capitalize")
            .and("have.css","padding-top","10px")
            //check the flags
            cy.get(this.event_info_tooltip)
            .find(this.flag_logo)
            .should("have.css","width","20px")
            .and("have.css","height","20px")
            // check the score box
            cy.get(this.event_info_tooltip)
            .find(this.score_box)
            .should("have.css","width","122px")
            .and("have.css","height","26px")
            if(this.score_box != ".wff_event_result_single_row_link"){ // this is done because it's been used in the standings and team info widget and there's a little difference between both widgets. This is a class, taken from standings
                cy.get(this.event_info_tooltip)
                .find(this.score_box)
                .should("have.css","color","rgb(0, 0, 0)")
                .and("have.css","background-color","rgba(255, 255, 255, 0.9)")
            }
        
            // check the status
            cy.get(this.event_info_tooltip)
            .find(this.ei_status)
            .should("have.attr","style","width: 100%;")
            .and("have.css","margin-top","-3px")
        }) 
    
    }catch(e){
        console.error("An error occured:",error.message)
        throw Error
    }
}    
check_info_categories(){
    cy.get(this.medium_view_team_info).within(()=>{       
        cy.get(this.category).each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                console.log(index)
                let trimmed_text = text.trim()
                cy.wrap(trimmed_text).should("eq",this.array_with_categories[index])
            })
        })
    })
}
check_info_values(){
    cy.get(this.medium_view_team_info).within(()=>{
        //name
        cy.textIs(this.value_country + ":eq(0)","Boston Bruins")
        //country
        cy.textIs(this.value_country + ":eq(1)","USA")
        //Coach 
        cy.textIs(this.value_country +  ":eq(2)","Jim Montgomery")
        //national league
        cy.textIs(this.value_country + ":eq(3)","NHL")
        //played matches
        cy.get(this.value_country).eq(4)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            //assert the number of played matches is a number greater than 0
            cy.wrap(parseInt(trimmed_text)).should('be.gt',0)

        })
        cy.get(this.value_country).eq(5)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            //assert the number of played matches is a number greater than 0
            cy.wrap(parseInt(trimmed_text)).should('be.gt',0)
            
        })

    })
}
}
                
        
       
            