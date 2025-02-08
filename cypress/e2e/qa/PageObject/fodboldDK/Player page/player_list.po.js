

export class player_list_po{
    constructor(){
        this.top_spillere_header = ".players-list-title"
        this.player_names = ".player-name"
        this.player_flag = ".player-flag-logo"
        this.logo_item = ".logo-item"
    }
    check_visual_elements(){
        //header
        cy.WeightSize(this.top_spillere_header,"20px","700")
        cy.Margin_Border_Padding_Height_Radius_Color(this.top_spillere_header,"0px","0px","0px","0px none rgb(0, 0, 0)","24px","rgb(0, 0, 0)")
        //player names
        cy.get(this.player_names)
        .should("have.css","color","rgb(0, 0, 0)")
        .and("have.css","line-height","normal")
        .and("have.css","font-weight","400")
        .and("have.css","cursor","pointer")
        //logo
        
        cy.get(this.logo_item)
        .should("be.visible")
        cy.get(this.logo_item).invoke("attr","src").then((src)=>{
            cy.wrap(src).should("not.eq","https://es-img.enetscores.com/logos/0m")            
        })
        //check Hojlund's logo (src is set to check for man utd's logo)
        cy.get(this.player_names).eq(0)
        .invoke("text").then((text)=>{
            const trimmed_text = text.trim()
            console.log(trimmed_text)
            if(trimmed_text === "R. Højlund"){
                cy.get(this.logo_item).eq(0).should("have.attr","src","https://es-img.enetscores.com/logos/10260m")
            }
            else{
                throw Error
            }
          
        })

    }
   
}