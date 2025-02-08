export class player_pitch_stats_po{
    constructor(){
        this.medium_widget = "[id=wff_quick_stats_generic_soccer_FW0A6E0338286A9DA3]"
        this.pitch_container = ".wff_pitch_stats_container"
        this.slider_button = ".wff_slider_button_root"
        this.first_offensive_stat =".wff_label_text.wff_pitch_stat_name:eq(0)"
        this.box = ".wff_pitch_stat_box_body"
        this.stats_value = ".wff_pitch_stat_value"
        this.average_value = ".wff_pitch_stat_value_per_game"
    }

    check_widget(){
        cy.get(this.medium_widget)
        .should("exist").and("be.visible")
        //check bacground
        cy.get(this.medium_widget)
        .find(this.pitch_container)
        .should("have.css","background")
        .and("include",'rgba(0, 0, 0, 0) url("https://es-bimg.enetscores.com/img/quick_stats_generic/pitch_stats_bg.webp") no-repeat scroll 50% 50% / cover padding-box border-box')
        //check the boxes

    }
    check_slider(){
        //not clicked
        cy.get(this.medium_widget)
        .find(this.slider_button).should("have.attr","aria-pressed","false")
        cy.get(this.medium_widget)
        .find(this.first_offensive_stat).should("have.attr","aria-label","Assists")
        //check the text in the aria-label
        cy.get(this.medium_widget)
        .find(this.first_offensive_stat).invoke("text").then((text)=>{
            const cut_text = text.trim()
            cy.wrap(cut_text).should("equal","Assists")
        })
        //click the slider
        cy.get(this.medium_widget)
        .find(this.slider_button)
        .click()
        cy.get(this.medium_widget)
        .find(this.first_offensive_stat)
        .should("have.attr","aria-label","Luftdueller vundet")
        //check the text in the aria-label
        cy.get(this.medium_widget)
        .find(this.first_offensive_stat).invoke("text").then((text)=>{
            const cut_text = text.trim()
            cy.wrap(cut_text).should("equal","Luftdueller vundet")
        })
        


       
    }
    check_boxes(){
        //defensive
        cy.get(this.box)
        .should("have.css","height","50px")
        .and("have.css","width","200px")
        //switch to offensive 
        cy.get(this.slider_button)
        .click()
        //offensive
        cy.get(this.box)
        .should("have.css","height","50px")
        .and("have.css","width","200px")
    }
    check_data(){
        //check the offensive stats
        cy.textNotEqualTo(this.medium_widget,this.stats_value,"0")      
        //click the button to switch to deffensive
        cy.get(this.slider_button)
        .click()
        //check the defensive stats
        cy.textNotEqualTo(this.medium_widget,this.stats_value,"0") 
    }
    check_avrg_data(){
        //defensive
        cy.textMatches(this.medium_widget,this.average_value,/Pr\. kamp \d\.\d\d/)  
        //switch to offensive
        cy.get(this.slider_button)
        .click()
        //offensive
        cy.textMatches(this.medium_widget,this.average_value,/Pr\. kamp \d\.\d\d/)

    }
}