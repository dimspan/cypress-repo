export class event_quick_stats_po{
    constructor(){
        this.event_stats_code = '[id="wff_event_stats_generic_soccer_FWB038707C8D6DE979"]'
        this.icon_container = ".wff_icon_container"
        this.boxes = ".wff_event_details_stats_group.wff_alternative_stats_value_color"
        this.data_values = ".wff_event_details_stats_value"
        this.array = ["Boldbesiddelse", "Forsøg på mål","Skud på mål","Skud forbi mål","Hjørnespark","Indlæg","Begåede frispark",
        "Offside","Gule kort","Røde kort"]
        this.label_text = ".wff_label_text" //stats values        
    }
    check_visual_elements(){
        cy.get(this.event_stats_code).within(()=>{

            //check icon containers
            cy.height_width_bgSize(this.icon_container,"20px","20px","auto")
       
            //check boxes
            cy.padding_border_marginBottom_grid(this.boxes,"10px 0px 10px 10px","rgba(255, 255, 255, 0.8)","rgb(0, 0, 0)","1px solid rgb(242, 242, 242)","10px","10px","35px 35px")
        })
    }
    check_font_styles(){
        
        cy.get(this.event_stats_code).within(()=>{
            //check data values
            cy.bgColor_fWeight_fSize_color_border(this.data_values,"700","20px","rgb(0, 0, 0)","rgb(255, 255, 255)","0px none rgb(0, 0, 0)")
   
            //check the stats name
            cy.loopThroughElements(this.label_text,this.array,0)
            cy.WeightSize(this.label_text,"12px","700")
   
        })
    }
}