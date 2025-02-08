export class statistics_widget_po{
    constructor(){
        this.teamHeaderArray = ["Mål","Målforsøg","Skud på mål","Frispark begået","Gule kort","Røde kort"]
        this.header = "h2:eq("
        this.goals_scored_container = ".es_goals_scored.esm_comp.esm_statistics.es_widget_container"
        this.mal = ".esmx-title.es_goals_scored.esm_comp.esm_statistics.es_widget_container-title"
        this.total_shots_container = ".es_total_shots.esm_comp.esm_statistics.es_widget_container"
        this.malforsog = ".esmx-title.es_total_shots.esm_comp.esm_statistics.es_widget_container-title"
        this.skudpamal_container = ".es_shot_on.esm_comp.esm_statistics.es_widget_container"
        this.skud_pa_mal = ".esmx-title.es_shot_on.esm_comp.esm_statistics.es_widget_container-title"
        this.frispark_container = ".es_foul_commit.esm_comp.esm_statistics.es_widget_container"
        this.frispark_begaet = ".esmx-title.es_foul_commit.esm_comp.esm_statistics.es_widget_container-title"
        this.yellow_container = ".es_ycards.esm_comp.esm_statistics.es_widget_container"
        this.yellow_header = ".esmx-title.es_ycards.esm_comp.esm_statistics.es_widget_container-title"
        this.red_container = ".es_rcards.esm_comp.esm_statistics.es_widget_container"
        this.red_header = ".esmx-title.es_rcards.esm_comp.esm_statistics.es_widget_container-title"
        this.crown_icon = ".icon-top_box"
        this.data_in_columns = ".wff_single_stat_diagram_box_value"
        this.flag_logo = ".wff_flag_and_logo_container"
        this.icon = ".wff_icon_wrapper"
    }
    checkTeamHeaders(){
        // mal
        cy.textEqualTo(this.goals_scored_container,this.mal,this.teamHeaderArray[0])
        //Målforsøg
        cy.textEqualTo(this.total_shots_container,this.malforsog,this.teamHeaderArray[1])
        //skud pa mal
        cy.textEqualTo(this.skudpamal_container,this.skud_pa_mal,this.teamHeaderArray[2])
        //frispark begaet
        cy.textEqualTo(this.frispark_container,this.frispark_begaet,this.teamHeaderArray[3])
        //gule kort
        cy.textEqualTo(this.yellow_container,this.yellow_header,this.teamHeaderArray[4])
        //rode kort
        cy.textEqualTo(this.red_container,this.red_header,this.teamHeaderArray[5])
    }
    checkProperties(){
        //check crown icon
        cy.wait(1000)
        cy.get(this.crown_icon).should("have.css","height","13px")
        .and("have.css","width","20px")
        .and("have.css","margin-bottom","3px")

        //check flag logo 
        cy.get(this.flag_logo)
        .find(":first-child") // gets the first child of this.flag_logo
        .should("have.css","width","20px")
        .and("have.css","height","20px")

        //check icon on top of the stats
        cy.get(this.icon)
        .find(":first-child")
        .should("have.css","height","20px")        
        .and("have.css","width","20px")

        //check data 
        cy.get(this.data_in_columns).each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.not.eq("0")
            })
        })
       
    }
}
