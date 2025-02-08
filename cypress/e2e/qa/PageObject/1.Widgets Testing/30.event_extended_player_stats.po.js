export class ice_hockey_player_ext_stats_po{
    constructor(){
        this.stats_code = '[id="wff_extended_stats_generic_icehockey_FWA5D573C290AC6B8A"]'
        this.flag_container = ".wff_flag_and_logo_container"
        this.sorting_arrows_no_active = ".icon-no_sort"
        this.sorting_arrows_active_highest = ".icon-sort_highest"
        this.sorting_arrows_active_lowest = ".icon-sort_lowest"
        this.active_tab = ".wff_extended_stats_team_filter_button.wff_event_filter.wff_active_team_filter_btn"
        this.kamp_active_tab_label = ".wff_label_text.wff_event_filter_label"
        this.home_tab = ".wff_extended_stats_team_filter_button.wff_home_team_filter"
        this.away_tab = ".wff_extended_stats_team_filter_button.wff_away_team_filter"
        this.inactive_tab_label = ".wff_participant_name.wff_responsive_text"
        this.dropdown = ".wff_data_selector_root.wff_ext_stats_category_selector"
        this.dropdown_arrow = ".icon-expanded_arrow"
        this.collapsed_arrow = ".icon-collapsed_arrow"
        this.selector_list = ".wff_data_selector_list"
        this.label_text = ".wff_label_text"
        this.array_with_headers = ["Forwards","Defencemen","Goalkeepers"]
            
       
       this.array_with_tooltip_values = ["Goals","Assists","Points","Hits","+/-","Shots","Penalty minutes","Time on ice"]
        this.array_with_tooltip_values_goalie = ["Shots against","Goalkeeper saves","Saving percentage","Saves powerplay","Saves shorthanded","Time on ice"]
   
        this.header_class = ".wff_label_text.wff_has_tooltip"
        this.data_selector = ".wff_data_selector_text"
        this.option = ".wff_table_header_cell_wrapper"
        this.show_more_arrow = ".icon-collapsed_arrow"
        this.show_less_arrow = ".wff_collapsed_arrow_wrapper.wff_disable_click"
        this.show_all_wrapper = ".wff_show_all_label_wrapper"
        this.participant_link = ".wff_participant.wff_responsive_text.wff_player_and_team"
        this.home_tab = ".wff_extended_stats_team_filter_button.wff_home_team_filter"
        this.home_active_tab = ".wff_extended_stats_team_filter_button.wff_home_team_filter.wff_active_team_filter_btn"
        this.away_tab = ".wff_extended_stats_team_filter_button.wff_away_team_filter"
        this.away_active_tab = ".wff_extended_stats_team_filter_button.wff_away_team_filter.wff_active_team_filter_btn"
        this.tooltip_root = ".wff_tooltip_root"
        this.white_row = ".wff_table_body_row.wff_icehockey.wff_game_type_normal.wff_row_0"
        this.dark_row = ".wff_table_body_row.wff_icehockey.wff_game_type_normal.wff_row_1"
        this.label_with_tooltip = ".wff_label_text.wff_has_tooltip"
    }
    check_visual_elements(){
        cy.get(this.stats_code).within(()=>{
            //flags
            cy.minWidthAndWidth(this.flag_container,"20px","20px","20px","0px 5px 0px 0px")
   
            //sorting arrows
            //not active
            cy.backgroundImage(this.sorting_arrows_no_active,"8px","10px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/no_sort.svg")')
         
            // highest 
            cy.get(this.sorting_arrows_active_highest).each((element,index)=>{
                cy.wrap(element).scrollIntoView()
            })
            cy.backgroundImage(this.sorting_arrows_active_highest,"8px","10px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/sort_highest.svg")')

            //lowest

            cy.get(this.sorting_arrows_active_highest).each((element,index)=>{
              cy.wrap(element).click()
              cy.backgroundImage(this.sorting_arrows_active_lowest,"8px","10px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/sort_lowest.svg")')
            })
            

            //show more/less arrows
            cy.heightWidthTransform(this.show_more_arrow,"10px","6px","none")
 
            cy.get(this.show_less_arrow)
            .should("have.css","display","flex")
            .and("be.visible")
            .and("have.css","cursor","pointer")
            //zebra rows
            cy.get(this.white_row)
            .should("have.css","background-color","rgb(255, 255, 255)")
            cy.get(this.dark_row)
            .should("have.css","background-color","rgb(248, 248, 248)")
            
        })
    }
    check_tabs(){
        //kamp active tab
        cy.get(this.stats_code).within(()=>{
            //active tab
            cy.activeTab(this.active_tab,"center","30px","0px 5px","1px solid rgb(229, 229, 229)","5px","pointer","160px","30px")
  
            // label of the active tab
            cy.WeightSize(this.kamp_active_tab_label,"14px","700")
            cy.get(this.kamp_active_tab_label)            
            .should("be.visible")            
            .and("have.css","display","flex")

            //home tab
            cy.get(this.home_tab)
            cy.activeTab(this.home_tab,"center","30px","0px 5px","1px solid rgb(229, 229, 229)","5px","pointer","160px")   
            
            //away tab
            cy.activeTab(this.away_tab,"center","30px","0px 5px","1px solid rgb(229, 229, 229)","5px","pointer","160px","30px")
       
            //inactive labels
            cy.alignItems_display_fWeight_overflow_whiteSpace_textOverflow(this.inactive_tab_label,"block","normal","400","hidden","nowrap","ellipsis")
            cy.get(this.inactive_tab_label)
            // .should("have.css","font-weight","400")
            // .and("be.visible")
            // .and("have.css","font-size","14px")
            // .and("have.css","display","block")
            // .and("have.css","overflow","hidden")
            // .and("have.css","white-space","nowrap")
            // .and("have.css","text-overflow","ellipsis")
            .should("have.css","color","rgb(149, 149, 149)")
        })
    }
    check_dropdown(){
        cy.get(this.stats_code).within(()=>{
            cy.dropdownProperties(this.dropdown,"flex","170px","30px","0px","5px","10px","1px solid rgb(229, 229, 229)")
      
            //check arrow
            cy.backgroundImage(this.dropdown_arrow,"10px","5px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/arrow-down.svg")')
            cy.get(this.dropdown_arrow)
            .should("have.css","background-position","50% 50%",)
            .and("have.css","margin-left","5px")    
            
            //click and expand the menu
            cy.get(this.dropdown)
            .click()
            .wait(500)
            // arrow 
            cy.get(".wff_icon_container")
            .find(this.collapsed_arrow)             
            .should("have.css","background-image",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/arrow-down.svg")')
            .and("have.css","background-position","50% 50%")
            .and("have.css","width","10px")
            .and("have.css","height","5px")
            .and("have.css","margin-left","5px")
            .and("have.css","transform","matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)")
            // .should("have.attr","aria-label","icon-collapsed_arrow")
            cy.get(this.selector_list)
            .should("be.visible")
            .and("have.css","width","170px")
            .and("have.css","align-items","flex-start")
            .and("have.css","left","0px")
            .and("have.css","margin","0px")
            .and("have.css","padding","5px 0px")
            .and("have.css","border","1px solid rgb(229, 229, 229)")
            .and("have.css","border-radius","10px")
            .and("have.css","z-index","2")

        })
    }
    check_headers(){
        cy.get(this.stats_code).within(()=>{
            cy.get(this.label_text)
            .should("have.css","font-size","14px")
            .and("have.css","font-weight","700")
            .and("have.css","justify-content","normal")
            .and("have.css","position","static")            
                //check different headers 
            
                    // cy.get(this.data_selector).click()            
                    // cy.get(this.option).eq(i).click()
                cy.get(".wff_table_header_cell.wff_participant.wff_fixed_col").each((element,index)=>{
                    cy.wrap(element)
                    .find(this.label_text)
                    .invoke("text").then((text)=>{
                        let text_from_the_menu = text.trim()
                            // console.log(text_from_the_menu)
                        // console.log(i)
                        cy.expect(text_from_the_menu).to.eq(this.array_with_headers[index]) 
            
                    }) 
                })
               
                      
                           
                                               
                        
                    } 
           
    )
}
        // })
    
    check_show_less_all_func(){
        cy.get(this.stats_code).within(()=>{
            cy.get(this.show_all_wrapper)
            .click()
            cy.get(this.participant_link)
            .should("have.length","34")
            cy.get(this.show_all_wrapper).click()
            cy.get(this.participant_link).should("have.length","10")
        })
    }
    switch_tabs_functionality(){
        cy.get(this.stats_code).within(()=>{
            cy.get(this.home_tab)
            .click()
            cy.get(this.home_active_tab)
            .should("exist")
            .and("have.css","font-weight","700")
            cy.get(this.show_more_arrow).click({multiple: true})
            cy.get(this.participant_link).should("have.length","18")
            .and("have.css","font-weight")
            cy.get(this.away_tab).click()
            cy.get(this.away_active_tab)
            .should("exist")
            .and("have.css","font-weight","700")
            cy.get(this.show_more_arrow).click({multiple:true})
            cy.get(this.participant_link).should("have.length","18")
        })
    }
    check_tooltips(){
        cy.get(this.stats_code).within(()=>{
            cy.get(".wff_table_header_cell.wff_participant.wff_fixed_col").click({multiple:true}) //this closes all tooltips
            // cy.get(this.header_class)
            // for (var i = 0; i < 3; i++){
                // cy.get(this.data_selector).click()            
                // cy.get(this.option).eq(i).click()
                for(var i = 0; i<3; i++){
                    if( i < 2){
                        cy.get(".wff_extended_stats_table_container.wff_table_overflowing").eq(i).within(()=>{
                            cy.get(this.header_class).invoke("text").then((text)=>{
                                let text_from_the_menu = text.trim()
                                console.log(text_from_the_menu)
                            })
                                cy.get(this.header_class)
                                .each((element,index)=>{
            
                                    cy.wrap(element).trigger("mouseover").wait(500)
                                    cy.get(this.tooltip_root)
                                    .invoke("text").then((headerText)=>{
                                        let trim_header_text = headerText.trim()
                                        console.log(trim_header_text)
                                        cy.expect(trim_header_text).to.eq(this.array_with_tooltip_values[index])        
                                        cy.get(this.tooltip_root)
                                        .should("be.visible")
                                        .and("have.css","min-height","30px")
                                        .and("have.css","height","46px")
                                        .and("have.css","font-size","14px")
                                        .and("have.css","padding","8px 4px")
                                        .and("have.css","bottom","30px")                            
                                        .and("have.css","white-space","break-spaces")
                                    })
                                   
                                                       
                                })
                            
                        })
                    }else{
                        cy.get(".wff_extended_stats_table_container.wff_table_overflowing").eq(i).within(()=>{
                            cy.get(this.header_class).invoke("text").then((text)=>{
                                let text_from_the_menu = text.trim()
                                console.log(text_from_the_menu)
                            })
                                cy.get(this.header_class)
                                .each((element,index)=>{
            
                                    cy.wrap(element).trigger("mouseover").wait(500)
                                    cy.get(this.tooltip_root)
                                    .invoke("text").then((headerText)=>{
                                        let trim_header_text = headerText.trim()
                                        console.log(trim_header_text)
                                        cy.expect(trim_header_text).to.eq(this.array_with_tooltip_values_goalie[index])        
                                        cy.get(this.tooltip_root)
                                        .should("be.visible")
                                        .and("have.css","min-height","30px")
                                        .and("have.css","height","46px")
                                        .and("have.css","font-size","14px")
                                        .and("have.css","padding","8px 4px")
                                        .and("have.css","bottom","30px")                            
                                        .and("have.css","white-space","break-spaces")
                                    })
                                   
                                                       
                                })
                            
                        })
                    }
               
                }
                
                })
              
}
}
