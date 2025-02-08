export class TI_fodbolddk_po{
    constructor(){
        this.main_team_logo = ".es_logo_item"
        this.team_name_header = ".es_team_name"
        this.array_with_categories = ["Træner","Turnering","Spillede kampe","Vundne kampe","Mål","Clean sheets","Form"]
        this.category = ".wff_info_category"
        this.oddRow = ".wff_info_row.wff_row_0"
        this.evenRow = ".wff_info_row.wff_row_1"
        this.flag_logo = ".wff_flag_logo_img"
        this.medium_view_team_info = ".wff_widget.wff_widget_FWDEFF3C37667BDFBD.wff_widget_medium"
        this.flag_logo_container = ".wff_flag_and_logo_container.wff_national_team"
        this.form_class = ".wff_form"
        this.form_win = ".wff_form_ball.wff_form_w"
        this.form_draw = ".wff_form_ball.wff_form_d"
        this.form_lose = ".wff_form_ball.wff_form_l"
        this.form_fixture = ".wff_form_ball.wff_form_fxtr"
        this.label_text = ".wff_label_text"
        this.event_info_tooltip = ".wff_widget.wff_team_info_event_info.wff_widget_FWDEFF3C37667BDFBD.wff_widget_small.wff_event_info_visible"
        this.ei_stage = ".wff_stage_name.wff_responsive_text.wff_responsive_text.wff_capitalize_text_transform"
        this.ei_header = ".wff_event_info_header"
        this.ei_venue = ".wff_event_venue_attendance"
        this.score_box = ".wff_event_result_single_row_wrapper"
        this.ei_status = ".wff_event_start_time_status_container.wff_responsive_text.wff_status_finished"
    }
check_team_name_and_logo_header(){
    try{
        cy.get(this.main_team_logo)
        .should("have.css","width","30px")
        .and("have.css","height","30px")
        cy.get(this.team_name_header) 
        .should("have.css","font-size","20px")
        .and("have.css","font-weight","700")
    }catch(error){
        console.error("An error occurred:",error.message)
        throw Error
    }
    
}
check_team_info_properties(){
    try{
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
    }catch(error){
        console.error("An error occurred", error.message)
        throw Error
    }
   

    
}
check_form_icons(){
    try{
        //form fixture
    cy.get(this.medium_view_team_info)
    .find(this.form_fixture)
    .should("have.css","width","20px")
    .and("have.css","height","20px")    
    .and("have.css","font-weight","400")
    .and("have.css","align-items","center")
    .and("have.css","justify-content","center")
    // Check the font-size in the circles
    cy.get(this.medium_view_team_info)
    .find(this.label_text)
    .each((element,index)=>{
        cy.wrap(element)
        .should("have.css","font-size","12px")
    })
    // check the form win  
    cy.get(this.medium_view_team_info)                        
    .find(this.form_win)
    .should("have.css","width","20px")
    .and("have.css","height","20px")    
    .and("have.css","font-weight","400")
    .and("have.css","align-items","center")
    .and("have.css","justify-content","center")      
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
            cy.get(this.form_win).eq(0).click({force:true})
            .wait(500)
            cy.get(this.event_info_tooltip)
            .should("exist")

            cy.get(this.ei_stage)
            .should("have.css","font","12px Roboto")
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
            .should("have.css","width","60px")
            .and("have.css","height","26px")
            if(this.score_box != ".wff_event_result_single_row_link"){ // this is done because it's been used in the standings and team info widget and there's a little difference between both widgets. This is a class, taken from standings
                cy.get(this.event_info_tooltip)
                .find(this.score_box)
                .should("have.css","color","rgb(0, 0, 0)")
                .and("have.css","background-color","rgba(255, 255, 255, 0.9)")
            }
        
            // check the status
            // cy.get(this.event_info_tooltip)
            // .find(this.ei_status)
            // .should("have.attr","style","width: 100%;")
            // .and("have.css","margin-top","-3px")
        }) 
    
    }catch(e){
        console.error("An error occured:",error.message)
        throw Error
    }
}    
check_event_info_in_standings(){
    try{
        //Win form
        cy.get(this.medium_view_team_info).within(()=>{
            cy.get(this.form_fixture).eq(0).click({force:true}).wait(1000)
            cy.get(this.event_info_tooltip)
            .should("exist")

            cy.get(this.ei_stage)
            .should("have.css","font","12px Roboto")
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
            .should("have.css","width","62px")
            .and("have.css","height","28px")
            if(this.score_box != ".wff_event_result_single_row_link"){ // this is done because it's been used in the standings and team info widget and there's a little difference between both widgets. This is a class, taken from standings
                cy.get(this.event_info_tooltip)
                .find(this.score_box)
                .should("have.css","color","rgb(0, 0, 0)")
                .and("have.css","background-color","rgb(255, 255, 255)")
            }
        
            // check the status
            // cy.get(this.event_info_tooltip)
            // .find(this.ei_status)
            // .should("have.attr","style","width: 100%;")
            // .and("have.css","margin-top","-3px")
        }) 
    
    }catch(e){
        console.error("An error occured:",error.message)
        throw Error
    }
}
}
                
        
       
            