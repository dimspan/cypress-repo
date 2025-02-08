export class player_stats_po{
    constructor(){
        this.stats_code = '[id="wff_extended_stats_generic_soccer_FW0CFBB88A708C3F01"]'
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
        this.array_with_headers = {
            "Generelt":
                ["MS","VUR","xG","M","A","GK","RK","LDV","LDT"],
            "Offensiv":
                ["S","SPM","FT","NA","SML","MSM","SI","Off","BCS",],
            "Defensiv":
                ["FB","MR","OSI","VR","DF","Tack","CLR"]
       }
       this.array_with_tooltip_values = {
        "Generelt":
            ["Minutter spillet","Vurdering","Forventede mål","Mål","Assists","Gule kort","Røde kort","Luftdueller vundet","Luftdueller tabt"],
        "Offensiv":
            ["Skud","Skud på mål","Frispark trukket","Nøgleafleveringer","Scoringsmuligheder lavet","Misset scorings mulighed","Succesfulde indlæg","Offsides","Blokerede/clearede skud"],
        "Defensiv":
            ["Frispark begået","Målmandsredninger","Opsnappede indlæg","Vigtige redninger","Defensive fejl","Tacklinger","Clearinger"]
   }
       this.header_class = ".wff_label_text.wff_has_tooltip"
       this.data_selector = ".wff_data_selector_text"
       this.option = ".wff_data_selector_list_item"
       this.show_more_arrow = ".icon-collapsed_arrow"
       this.show_less_arrow = ".wff_collapsed_arrow_wrapper.wff_disable_click"
       this.show_all_wrapper = ".wff_show_all_label_wrapper"
       this.participant_link = ".wff_participant_link"
       this.home_tab = ".wff_extended_stats_team_filter_button.wff_home_team_filter"
       this.home_active_tab = ".wff_extended_stats_team_filter_button.wff_home_team_filter.wff_active_team_filter_btn"
       this.away_tab = ".wff_extended_stats_team_filter_button.wff_away_team_filter"
       this.away_active_tab = ".wff_extended_stats_team_filter_button.wff_away_team_filter.wff_active_team_filter_btn"
       this.tooltip_root = ".wff_tooltip_root"
       this.white_row = ".wff_table_body_row.wff_soccer.wff_game_type_normal.wff_row_0"
       this.dark_row = ".wff_table_body_row.wff_soccer.wff_game_type_normal.wff_row_1"
    }
    check_visual_elements(){
        cy.get(this.stats_code).within(()=>{
            //flags
            cy.minWidthAndWidth(this.flag_container,"20px","20px","20px","0px 5px 0px 0px")
   
            //sorting arrows
            //not active
            cy.backgroundImage(this.sorting_arrows_no_active,"8px","10px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/no_sort.svg")')
         
            // highest 
            cy.backgroundImage(this.sorting_arrows_active_highest,"8px","10px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/sort_highest.svg")')

            //lowest
            cy.get(this.sorting_arrows_active_highest).click()
            cy.backgroundImage(this.sorting_arrows_active_lowest,"8px","10px",'url("https://es-bimg.enetscores.com/img/extended_stats/webchunk_22/sort_lowest.svg")')

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
            // .and("have.css","transform","matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)")
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
                for (var i = 0; i < 3; i++){
                    cy.wait(250)
                    cy.get(this.data_selector).click()            
                    cy.get(this.option).eq(i).click()
                    cy.get(this.option).eq(i).invoke("text").then((text)=>{
                        let text_from_the_menu = text.trim()
                        console.log(text_from_the_menu)
                        cy.get(this.header_class)
                        .each((element,index)=>{
                            cy.wrap(element).invoke("text").then((headerText)=>{
                                let trim_header_text = headerText.trim()
                                cy.expect(trim_header_text).to.eq(this.array_with_headers[text_from_the_menu][index])        
        
                            })
                           
                                               
                        })
                    })
                }
        })
        // })
    }
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
            cy.get(this.show_more_arrow).click()
            cy.get(this.participant_link).should("have.length","17")
            .and("have.css","font-weight")
            cy.get(this.away_tab).click()
            cy.get(this.away_active_tab)
            .should("exist")
            .and("have.css","font-weight","700")
            cy.get(this.show_more_arrow).click()
            cy.get(this.participant_link).should("have.length","17")
        })
    }
    check_tooltips(){
        cy.get(this.stats_code).within(()=>{
            // cy.get(this.header_class)
            for (var i = 0; i < 3; i++){
                cy.get(this.data_selector).click()            
                cy.get(this.option).eq(i).click()
                cy.get(this.option).eq(i).invoke("text").then((text)=>{
                    let text_from_the_menu = text.trim()
                    console.log(text_from_the_menu)
                    cy.get(this.header_class)
                    .each((element,index)=>{
                        cy.wrap(element).trigger("mouseover")
                        cy.get(this.tooltip_root)
                        .invoke("text").then((headerText)=>{
                            let trim_header_text = headerText.trim()
                            cy.expect(trim_header_text).to.eq(this.array_with_tooltip_values[text_from_the_menu][index])        
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
        })
    }
}