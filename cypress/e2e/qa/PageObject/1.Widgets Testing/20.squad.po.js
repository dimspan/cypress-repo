export class squad_po{
    constructor(){
       this.header = ".esmx-title.esm_comp.esm_squad.es_widget_container-title"
       this.hold_tab = ".esm_squad"
       this.header_container_widget = ".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize"
       this.data_element = '[data-v-0208e866]'
       this.widget_wide = ".wff_widget.wff_widget_FW9B719E4038021D02.wff_widget_wide"
       this.participant = ".wff_participant_name.wff_responsive_text"
       this.team_squad_table = ".wff_team_squad_table_body"
       this.first_section = ".wff_squad_table_wrapper:eq(0)"
       this.coach_participant = ".wff_participant.wff_responsive_text_no_display.wff_coach"
       this.player_class = ".wff_participant_name.wff_responsive_text"
       this.player_link = ".wff_participant_link"
       this.flag_class = ".wff_flag_logo_img"
       this.stats_headers_class = ".wff_table_header_cell.wff_squad_stats_box"
       this.tooltip_class = ".wff_tooltip_participant_text"//".wff_tooltip_root"
       this.array_with_stats = ["Kampe spillet","Alder","Clean sheets","Mål imod","Indskiftning","Udskiftning","Gule kort","Røde kort"]
    }
    check_header_properties(){
        cy.get(this.hold_tab).eq(0).click()
        cy.get(this.header).invoke('text').then((text)=>{
            let trimmed_text = text.trim()
            cy.expect(trimmed_text).to.eql("Spillertrup")
        })

        // check font-size and font -weight
        cy.get(this.header)
        .should("have.css","margin","0px 0px 10px")
        .and("have.css","font-weight", '700')
        .and("have.css","font-size", "20px")
    }   
    check_widget_headers(){
        cy.get(this.header_container_widget)
        .should("have.css","right","0px")
        .and("have.css","position","relative")
        .and("have.css","font-size","14px")
        // malmaend
        cy.get(".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize").contains('Målmænd')
        .should("have.css","font-weight",'700')
         	
        // Forsvarere
        cy.get(".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize").contains('Forsvar')
        .should("have.css","font-weight","700")
        
        // Midtbanespillere
        cy.get(".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize").contains("Midtbane")
        .should("have.css","font-weight","700")

        	
        // Angribere
        cy.get(".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize").contains("Angreb")
        .should("have.css","font-weight","700")

        // Træner
        cy.get(".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize").contains("Træner")
        .should("have.css","font-weight","700")

    }
    check_widget_links(){
        // manager shouldn't contain link
        let manager = cy.get(".wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize").contains("Træner")
        cy.notContainLinks(this.team_squad_table,this.coach_participant,"https://fodbold.dk/hold/8456/Manchester+City/spillertrup")

        //players should coontain link
        // let first_player = cy.get(this.player_class).eq(0)
        cy.checkLinks(this.player_class,this.player_link,"https://fodbold.dk/spiller/533127/Zack+Steffen/overblik/")
        cy.go(-1)            
    }
    check_flags(){
        cy.get(this.flag_class)
        .should("have.css","border","1px solid rgb(204, 204, 204)")
        .and("have.css","width","18px")
        .and("have.css","height","18px")
    }
    check_tooltip(){
        cy.get(this.stats_headers_class)
        .each((element,index)=>{
            cy.wrap(element).trigger("mouseover")
            cy.get(this.tooltip_class).should("be.visible")
            
            // for (var i = 0; i < continue_while; i++){
                cy.get(this.tooltip_class).invoke("text").then((text)=>{
                   let trimmed_text = text.trim()
                //    console.log(i)
                if(index > 7){
                    index = 0 
                }else{
                    console.log(index)
                    cy.expect(trimmed_text).to.equal(this.array_with_stats[index])
                }   
                })
            // }

        })
    }

      

}