export class player_extended_po{
    constructor(){
        this.extended_stats_widget = '[id="wff_extended_stats_generic_soccer_FWE5A1A5766F126110"]'
        this.statistics_tab = ".esm_statistics"
        this.spillerstatistik_header = ".esmx-title.es_player_ext_stats.es_widget_container.esm_comp.esm_statistics-title"
        this.flags = ".wff_flag_and_logo_container"
        this.sorting_arrows = ".wff_icon_container.wff_sorting_icon_container"
        this.headers_in_the_widget = ".wff_table_header_cell_wrapper"
        this.white_row = ".wff_table_body_row.wff_soccer.wff_game_type_normal.wff_row_0"
        this.dark_row = ".wff_table_body_row.wff_soccer.wff_game_type_normal.wff_row_1"
        this.search_bar_button = ".wff_country_search_bar_button"
        this.search_bar_ddown = ".wff_search_bar_and_countries_wrapper"
        this.country = ".wff_country_list_item"
        this.selected_countries = ".wff_selected_countries_label"
        this.search_field = ".wff_country_search_bar"
        this.no_results = ".wff_no_countries_container"
        this.clear_search = ".icon-search-clear"
        this.a_section = ".wff_alphabet_order_container"
        this.participant = ".wff_participant.wff_responsive_text.wff_player_and_team"
        this.clear_selection = ".wff_button_wrapper_root.wff_button_clear_selection"
        this.filter_statsddown_container = ".wff_data_selector_root.wff_ext_stats_category_selector"
        this.select_option_to_filter = ".wff_data_selector_list_item"
        this.object = {
    "Generelt":        
        [
        " Spiller ",
        " K ",
        " KS ",
        " TM ",
        " TA ",
        " TUD ",
        " TIND ",
        " MS ",
        " LDV ",
        " LDT "
    ],
     "Mål typer" : 
    [
        " Spiller ",
        " MVS ",
        " SPM ",
        " SM ", 
        " HSM ",
        " MDF ",
        " MIF ",
        " MUF ",
        " VFM ",
        " HFM "
    ],
     "Disciplinære":
    [
        " Spiller ",
        " GK ",
        " RK ",
        " TK ",
        " FB ",
        " FT ",
        " SB ",
        " GKPK ",
        " FBPK "
    ],
    "Defensiv":
    [
        " Spiller ",
        " Tack ",
        " CLR ",
        " OSI ",
        " BS ",
        " DF "
    ], 
    "Mål Intervaller":
    [
        " Spiller ",
        " 1-15 ",
        " 16-30 ",
        " 31-45 ",
        " 46-60 ",
        " 61-75 ",
        " 76-90 "
    ],
    "Målmandsspil": 
    [
        " Spiller ",
        " Red ",
        " RPK ",
        " CS ",
        " SPR ",
        " Redningsprocent ",
        " SI ",
        " RBT ",
        " MI "
    ],
    "Skud": 
    [
        " Spiller ",
        " TS ",
        " SPM ",
        " SUM ",
        " RT ",
        " SPPK ",
        " SUPK ",
        " SPM "
    ],
    "Mål timinger": 
    [
        " Spiller ",
        " FM ",
        " SMS ",
        " TM ",
        " SM ",
        " M1H ",
        " M2H ",
        " UM ",
        " KVM "
    ],
    "Offensiv":
    [
        " Spiller ",
        " NA ",
        " Off ",
        " MPK ",
        " MPM ",
        " HB% ",
        " SI ",
        " HT "
    ]
    }                 
        
    }
    extended_stats_design(){
    
        //click on statistik tab
        cy.get(this.statistics_tab).eq(0).click()
        cy.wait(1000)
        cy.scrollTo("bottom")
        cy.get(this.extended_stats_widget).should("exist").and("be.visible")

        //check the header
        cy.get(this.spillerstatistik_header)
        .should("have.css","margin-top","30px")
        .and("have.css","margin", "30px 0px 10px")
        .and("have.css","font-size","20px")
        .and("have.css","font-weight","700")
        .and("have.css","color","rgb(0, 0, 0)")
        
        
        cy.get(this.extended_stats_widget).within(()=>{
            //check flags
            cy.get(this.flags)
            .should("have.css","width","20px")
            .and("have.css","height","20px")
            .and("have.css","aspect-ratio","auto")
            
            //check arrows
            cy.get(this.sorting_arrows)
            .should("have.css","cursor","pointer")
            .and("have.css","margin-left","4px")
            .and("be.visible")
            
            //check headers
            cy.get(this.headers_in_the_widget)
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","margin","0px")
            .and("have.css","border-radius","0px")

            //zebra rows
            cy.get(this.white_row)
            .should("have.css","background-color","rgb(255, 255, 255)")
            cy.get(this.dark_row)
            .should("have.css","background-color","rgb(248, 248, 248)")

            //check dropdowns
            //search by country
            cy.get(this.search_bar_button)
            .should("have.css","display","flex")
            .and("have.css","align-items","center")
            .and("have.css","justify-content","center")
            .and("have.css","min-height","30px")
            .and("have.css","border","1px solid rgb(229, 229, 229)")
            .and("have.css","padding","0px 10px")
            .and("have.css","border-radius","5px")
            .and("have.css","border","1px solid rgb(229, 229, 229)")            
            .and("have.css","cursor","pointer")
            cy.get(".wff_country_search_bar_container").invoke("width").then((width)=>{
                const roundedWidth = Math.floor(width)
                cy.expect(roundedWidth).to.eq(127)
            }) 
            cy.get(this.filter_statsddown_container)
            .should("have.css","display","flex")
            .and("have.css","min-width","170px")
            .and("have.css","height","30px")
            .and("have.css","padding","0px")
            .and("have.css","border-radius","5px")
            .and("have.css","margin-right","10px")



        })
        

        
    }
    search_by_country(){
        cy.get(this.extended_stats_widget).within(()=>{
            //open the ddown
            cy.get(this.search_bar_button).click()
            cy.get(this.search_bar_ddown).should("be.visible")
            //select Argentina
            cy.get(this.country).eq(0).click()
            cy.get(this.selected_countries).scrollIntoView()           
            .should("be.visible")
            .and("have.css","background-color","rgb(248, 248, 248)")
            .and("have.css","font-size","14px")
            .and("have.css","font-weight","700")

            //type invalid country "Kyrdzhali"
            cy.get(this.search_field).eq(1).click().type("Kyrdzhali")
            cy.get(this.no_results).invoke("text").then((text)=>{
                cy.expect(text).to.eq(" Ingen resultater ")
            })
            cy.get(this.clear_search).click()
            cy.get(this.a_section).should("be.visible")
            //close the dropdown by clicking outside of it 
            cy.get(this.headers_in_the_widget).eq(1).click()
            cy.get(this.search_bar_ddown).should("not.exist")
            //check if there are only two players from Argentina
            cy.get(this.participant).should("have.length",2)
            //clear the country selection 
            cy.get(this.search_bar_button).click()
            cy.get(this.search_bar_ddown).should("be.visible")
            cy.get(this.clear_selection).click()
            cy.get(this.headers_in_the_widget).eq(1).click()
            cy.get(this.search_bar_ddown).should("not.exist")
            cy.get(this.participant).should("have.length",10)  



        })
    }
    stats_filter(){        
        for (var i = 0; i < 9; i++){
            cy.get(this.filter_statsddown_container).click()            
            cy.get(this.select_option_to_filter).eq(i).click()
            cy.get(this.select_option_to_filter).eq(i).invoke("text").then((text)=>{
                let text_from_the_menu = text.trim()
                console.log(text_from_the_menu)
                cy.get(this.headers_in_the_widget)
                .each((element,index)=>{
                    cy.wrap(element).invoke("text").then((headerText)=>{
                        cy.expect(headerText).to.eq(this.object[text_from_the_menu][index])        

                    })
                    cy.wrap(element).should("have.css","font-weight","700")
                    .and("have.css","font-size","14px")
                                       
                })
            })

            
           
        
            
        }
       
    }
    }
