Cypress.Commands.add("FamilyMarginPositionLeft",(element, fontFamily, marginRight, position, left)=>{
    try{
        cy.get(element)
        .should("have.css","font-family",fontFamily)
        .and("have.css","margin-right",marginRight)               
        .and("have.css","position",position)                
        .and("have.css","left",left)  
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})

Cypress.Commands.add("FSize_FStyle_color",(element, fontSize, fontStyle, color)=>{
    try{
        cy.get(element)            
        .should("have.css","font-size",fontSize)
        .and("have.css","font-style",fontStyle)
        .and("have.css","color",color)
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})

Cypress.Commands.add("FSize_FWeight_color",(element, fontSize, fontWeight, color)=>{
    try{
        cy.get(element)            
        .should("have.css","font-size",fontSize)
        .and("have.css","font-weight",fontWeight)
        .and("have.css","color",color)
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})

Cypress.Commands.add("fontWeightSizeStyle",(element, fontSize, fontStyle, fontWeight)=>{
    try{ 
        cy.get(element)            
        .should("have.css","font-size",fontSize)
        .and("have.css","font-style",fontStyle)  
        .and("have.css","font-weight",fontWeight)        
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})
Cypress.Commands.add("WeightSize",(element, fontSize, fontWeight)=>{
    try{ 
        cy.get(element)            
        .should("have.css","font-size",fontSize)        
        .and("have.css","font-weight",fontWeight)        
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})

Cypress.Commands.add("Margin_Border_Padding_Height_Radius_Color",(element, padding, border_radius,margin,border,height,color)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","padding",padding)
        .and("have.css","border-radius",border_radius)
        .and("have.css","margin",margin)
        .and("have.css","border",border)
        .and("have.css","height",height)    
        .and("have.css","color",color)       
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})

Cypress.Commands.add("Height_Width_Border",(element, height, width, border)=>{
    try{
        cy.get(element)
        .should("be.visible")        
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","border",border)     
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})

Cypress.Commands.add("tooltip_in_livescoreRounded",(element, top, right, minwidth, maxwidth, width, zindex,borderRadius,padding,transform,justifyContent,color,backgroundColor)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","top",top)
        .and("have.css","right",right)
        .and("have.css","min-width",minwidth)
        .and("have.css","max-width",maxwidth)
    
        .and("have.css","z-index",zindex)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","padding",padding)
        .and("have.css","transform",transform)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","color",color)
        .and("have.css","background-color",backgroundColor)    
        .and("have.css","width").then(($width) => {
            const roundedWidth = Math.round(parseFloat($width))
            expect(roundedWidth).to.eq(width)
        })
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})
Cypress.Commands.add("tooltip_in_livescore",(element, top, right, minwidth, maxwidth, width, zindex,borderRadius,padding,transform,justifyContent,color,backgroundColor)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","top",top)
        .and("have.css","right",right)
        .and("have.css","min-width",minwidth)
        .and("have.css","max-width",maxwidth)
        .and("have.css","width",width)       
        .and("have.css","z-index",zindex)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","padding",padding)
        .and("have.css","transform",transform)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","color",color)
        .and("have.css","background-color",backgroundColor)    
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})
Cypress.Commands.add("VerticalFloatWrapPositionPadding",(element,fontfamily,marginright,position,left,margin,padding,border,float,fontstyle,verticalalign,wordwrap)=>{
    try{
        cy.get(element)
        .should("have.css","font-family",fontfamily)
        .and("have.css","margin-right",marginright)
        // .and("have.css","position","absolute")
        .and("have.css","position",position)
        // .and("have.css","left","0px")        
        .and("have.css","left",left)  
        .and("have.css","margin",margin)
        .and("have.css","padding",padding)
        .and("have.css","border",border)
        .and("have.css","float",float)
        .and("have.css","font-style",fontstyle)
        .and("have.css","vertical-align",verticalalign)
        .and("have.css","word-wrap",wordwrap)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("FSize_FStyle_Color_Cursor_Margin_Padding_Border_BoxShadow",(fontsize,fontstyle,color,cursor,margin,padding,border,boxshadow)=>{
    try{
        cy.get(this.teamNames)    
        .should("have.css","font-size",fontsize)
        .and("have.css","font-style",fontstyle)
        .and("have.css","color",color)
        .and("have.css","cursor",cursor)
        .and("have.css","margin",margin)
        .and("have.css","padding",padding)
        .and("have.css","border",border)
        .and("have.css","box-shadow",boxshadow)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("MarginLeft_MarginRight",(element,height,width,minWidth,marginLeft,marginRight)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","min-width",minWidth)
        .and("have.css","margin-left",marginLeft)
        .and("have.css","margin-right",marginRight)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("FFamily_marginRight_position_left",(element,ffamily,marginRight,position,left)=>{
    try{
        cy.get(element)
        .should("have.css","font-family",ffamily)
        .and("have.css","margin-right",marginRight)
        .and("have.css","position",position)
        .and("have.css","left",left)            
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("FFamily_fSize_fWeight_marginRight_position_left",(element,ffamily,fSize,fWeight,marginRight,position,left)=>{
    try{
        cy.get(element)
        .should("have.css","font-family",ffamily)
        .and("have.css","font-size",fSize)
        .and("have.css","font-weight",fWeight)
        .and("have.css","margin-right",marginRight)
        .and("have.css","position",position)
        .and("have.css","left",left)            
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("PositionWeightSizeTextTransform",(element,position,ffweight,fsize,texttransform,)=>{
    try{
        cy.get(element)
        .should("have.css","position",position)
        .and("have.css","font-weight",ffweight)
        .and("have.css","font-size",fsize)
        .and("have.css","text-transform",texttransform)   
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("MarginBorderRadiusWidthHeight",(element,borderRadius,width,height,margin)=>{
    try{
        cy.get(element)
        .should("have.css","border-radius",borderRadius)
        .and("have.css","width",width)
        .and("have.css","height",height)
        .and("have.css","margin",margin)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("minWidthAndWidth",(element,minWidth,width,height)=>{
    try{
        cy.get(element)        
        .should("have.css","min-width",minWidth)
        .and("have.css","width",width)
        .and("have.css","height",height)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("border_height_width_bgcolor",(element,border,height,width,backgroundColor)=>{
    try{
        cy.get(element)
        .should("exist")
        .and("be.visible")
        .and("have.css","border",border)
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","background-color",backgroundColor)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("bottom_radius",(element,topradius,bottomradius)=>{
    try{
        cy.get(element)
            .should("have.css","border-top-right-radius",topradius)
            .and("have.css","border-bottom-right-radius",bottomradius)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("opacity_cursor_left_top",(element,cursor,top,left,opacity)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","cursor",cursor)
        .and("have.css","top",top)
        .and("have.css","left",left)
        .and("have.css","opacity",opacity)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("opacity_cursor_left",(element,cursor,left,opacity)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","cursor",cursor)
        .and("have.css","left",left)
        .and("have.css","opacity",opacity)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("opacity_cursor_left",(element,cursor,left,opacity)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","cursor",cursor)
        .and("have.css","left",left)
        .and("have.css","opacity",opacity)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("ffWeight_ffSize_textTrans",(element,fontweight,fontsize,texttransform)=>{
    try{
        cy.get(element)
        .should("have.css","font-weight",fontweight)
        .and("have.css","font-size",fontsize)
        .and("have.css","text-transform",texttransform)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("length_fsize_fstyle",(element,length,fontsize,fontstyle)=>{
    try{
        cy.get(element)
        .should("have.length",length)
        .and("have.css","font-size",fontsize)
        .and("have.css","font-style",fontstyle)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})

Cypress.Commands.add("width_height_minwidth",(element,width,height,minWidth)=>{
    try{
        cy.get(element).should("have.css","min-width",minWidth)
        .and("have.css","width",width)
        .and("have.css","height",height)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("borderRadius_Position_Bottom_Left",(element,borderRadius,position,bottom,left)=>{
    try{
        cy.get(element).should("exist").and("be.visible")
        .and("have.css","border-radius",borderRadius)
        .and("have.css","position",position)
        .and("have.css", "bottom",bottom)
        .and("have.css", "left",left)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("flexDirection_alignItems",(element,flexDirection,alignItems)=>{
    try{
        cy.get(element)
        .should("have.css","flex-direction",flexDirection)
        .and("have.css","align-items",alignItems)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("only_height_width",(element,height,width)=>{
    try{
        cy.get(element)   
        .should("have.css","height",height)
        .and("have.css","width",width)
        .and("be.visible")
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("height_width_bgSize",(element,height,width,bgSize)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","background-size",bgSize)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("padding_border_marginBottom_grid",(element,padding,bgcolor,color,border,borderRadius,marginBottom,gridTemplateRows)=>{
    try{
        cy.get(element)
        .should("have.css","padding",padding)
        .and("have.css","background-color",bgcolor)
        .and("have.css","color",color)
        .and("have.css","border",border)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","margin-bottom",marginBottom)
        .and("have.css","grid-template-rows",gridTemplateRows)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("bgColor_fWeight_fSize_color_border",(element,fWeight,fSize,color,bgcolor,border)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","font-weight",fWeight)
        .and("have.css","font-size",fSize)
        .and("have.css","color",color)
        .and("have.css","background-color",bgcolor)
        .and("have.css","border",border)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("marginBottom_position_display",(element,marginBottom,position,display)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","margin-bottom",marginBottom)
        .and("have.css","position",position)
        .and("have.css","display",display)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("bgColor_height_bRadius",(element,bgcolor,height,borderRadius)=>{
    try{
        cy.get(element)
        .should("have.css","background-color",bgcolor)
        .and("have.css","height",height)
        .and("have.css","border-radius",borderRadius)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("alignItems_display_fWeight_overflow_whiteSpace_textOverflow",(element,display,alignItems,fontWeight,overFlow,whiteSpace,textOverflow)=>{
    try{
        cy.get(element)
        .should("have.css","display",display)
        .and("have.css","align-items",alignItems)
        .and("have.css","font-weight",fontWeight)
        .and("have.css","overflow",overFlow)
        .and("have.css","white-space",whiteSpace)
        .and("have.css","text-overflow",textOverflow)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("padding_height_alignItems_color",(element,padding,height,alignItems,color)=>{
    try{
        cy.get(element)
            .should("have.css","padding",padding)
            .and("have.css","height",height)
            .and("have.css","align-items",alignItems)
            .and("have.css","color",color)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("letterSpacing_height_display_alignItems_justifyContent_textTransform",(element,letterSpacing,height,display,alignItems,justifyContent,fontSize,fontWeight,textTransform)=>{
    try{
        cy.get(element)
        .should("have.css","letter-spacing",letterSpacing)
        .and("have.css","height",height)
        .and("have.css","display",display)
        .and("have.css","align-items",alignItems)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","font-size",fontSize)
        .and("have.css","font-weight",fontWeight)
        .and("have.css","text-transform",textTransform)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("border_borderRadius_height_margin",(element,border,borderRadius,height,margin)=>{
    try{
        cy.get(element)
        .should("have.css","border",border)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","height",height)
        .and("have.css","margin",margin)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("toggleElements",(element,position,cursor,top,left,right,bottom,transition,border,borderRadius)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","position",position)
        .and("have.css","cursor",cursor)
        .and("have.css","top",top)
        .and("have.css","left",left)
        .and("have.css","right",right)
        .and("have.css","bottom",bottom)
        .and("have.css","transition",transition)
        .and("have.css","border",border)
        .and("have.css","border-radius",borderRadius)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("toggleAlign",(element,fWeight,fSize,alignItems,marginLeft)=>{
    try{
        cy.get(element).should("be.visible")
        .and("have.css","font-weight",fWeight)
        .and("have.css","font-size",fSize)
        .and("have.css","align-items",alignItems)
        .and("have.css","margin-left",marginLeft)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("threeMarginsRight",(element,minWidth,height,width,marginRight,marginTop,marginBottom)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","min-width",minWidth)
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","margin-right",marginRight)
        .and("have.css","margin-top",marginTop)
        .and("have.css","margin-bottom",marginBottom)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("threeMarginsLeft",(element,minWidth,height,width,marginLeft,marginTop,marginBottom)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","min-width",minWidth)
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","margin-left",marginLeft)
        .and("have.css","margin-top",marginTop)
        .and("have.css","margin-bottom",marginBottom)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("heightMarginRightWidth",(element,height,width,minWidth,marginRight)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","min-width",minWidth)
        .and("have.css","margin-right",marginRight)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("scoreBoxProperties",(element,display,alignItems,justifyContent,color,bgColor,border,boxShadow,bordRadius,boxSizing,width,height)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","display",display)
        .and("have.css","align-items",alignItems)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","height",height)
        .and("have.css","color",color)
        .and("have.css","background-color",bgColor)
        .and("have.css","border",border)
        .and("have.css","box-shadow",boxShadow)
        .and("have.css","border-radius",bordRadius)
        .and("have.css","box-sizing",boxSizing)
        .and("have.css","width",width)
        
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})

Cypress.Commands.add("penaltyScore",(element,boxShadow,left,top,width,height,fSize,fWeight)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","box-shadow",boxShadow)
        .and("have.css","left",left)
        .and("have.css","top",top)
        .and("have.css","width",width)
        .and("have.css","height",height)
        .and("have.css","font-size",fSize)
        .and("have.css","font-weight",fWeight)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("statusCircle",(element,bgColor,minWidth,maxWidth,height,width,borderRadius,boxShadow,position,top,padding,letterSpacing,marginTop)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","background-color",bgColor)
        .and("have.css","min-width",minWidth)
        .and("have.css","max-width",maxWidth)
        .and("have.css","height",height)
        .and("have.css","width",width)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","box-shadow",boxShadow)
        .and("have.css","position",position)
        .and("have.css","top",top)
        .and("have.css","padding",padding)
        .and("have.css","letter-spacing",letterSpacing)
        .and("have.css","margin-top",marginTop)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("stageName",(element,textOverflow,display,overflow,fWeight,textTransform,fSize)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","text-overflow",textOverflow)
        .and("have.css","display",display)
        .and("have.css","overflow",overflow)
        .and("have.css","font-weight",fWeight)
        .and("have.css","text-transform",textTransform)
        .and("have.css","font-size",fSize)
    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("textTransBoxSize",(element,textTransform,boxSizing)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","text-transform",textTransform)
        .and("have.css","box-sizing",boxSizing)

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("teamNames",(element,overflow,maxWidth,textDecoration,color,boxSizing,fWeight,fSize)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","overflow",overflow)
        .and("have.css","max-width",maxWidth)
        .and("have.css","text-decoration",textDecoration)
        .and("have.css","color",color)
        .and("have.css","box-sizing",boxSizing)
        .and("have.css","font-weight",fWeight)
        .and("have.css","font-size",fSize)

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("zIndexPaddingDisplay",(element,zindex,display,width,position,bottom,padding,justifyContent,cursor,right,transform)=>{
    try{
        cy.get(element)
        .should("be.visible") 
        .and("have.css","z-index",zindex)
        .and("have.css","display",display)
        .and("have.css","width",width)
        .and("have.css","position",position)
        .and("have.css","bottom",bottom)
        .and("have.css","padding",padding)      
        .and("have.css","justify-content",justifyContent)
        .and("have.css","cursor",cursor)
        .and("have.css","right",right)
        .and("have.css","transform",transform)

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("zIndexPaddingDisplayRounded",(element,zindex,display,width,position,bottom,padding,justifyContent,cursor,right,transform)=>{
    try{
        cy.get(element)
        .should("be.visible") 
        .and("have.css","z-index",zindex)
        .and("have.css","display",display)
        // .and("have.css","width",width)
        .and("have.css","position",position)
        .and("have.css","bottom",bottom)
        .and("have.css","padding",padding)      
        .and("have.css","justify-content",justifyContent)
        .and("have.css","cursor",cursor)
        .and("have.css","right",right)     
        .and("have.css","width").then(($width) => {
            const roundedWidth = Math.floor(parseFloat($width))
            expect(roundedWidth).to.eq(width)
        })

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("backgroundImage",(element,width,height,backgroundImageUrl)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","width",width)
        .and("have.css","height",height)
        .and("have.css","background-image",backgroundImageUrl)

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("heightWidthTransform",(element,width,height,transform)=>{
    try{
        cy.get(element)
        .should("have.css","width",width)
        .and("have.css","height",height)
        .and("have.css","transform",transform)

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("activeTab",(element,justifyContent,height,padding,border,borderRadius,cursor,width)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","justify-content",justifyContent)
        .and("have.css","height",height)
        .and("have.css","padding",padding)
        .and("have.css","border",border)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","cursor", cursor)
        .and("have.css","width",width)
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("dropdownProperties",(element,display,minWidth,height,padding,borderRadius,marginRight,border)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","display",display)
        .and("have.css","min-width",minWidth)
        .and("have.css","height",height)
        .and("have.css","padding",padding)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","margin-right",marginRight)
        .and("have.css","border",border)
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("containersBorders",(element,width,height,borderColor,borderRadius)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","width",width)
        .and("have.css","height",height)
        .and("have.css","border-color",borderColor)
        .and("have.css","border-radius",borderRadius)
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("elapsedTimeProperties",(element,minWidth,lineHeight,color,fSize)=>{
    try{
        cy.get(element)
        .should("have.css","min-width",minWidth)
        .and("have.css","line-height",lineHeight)
        .and("have.css","color",color)
        .and("have.css","font-size",fSize)
        .and("be.visible")
            //periods
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("widthHeight",(element,width,height)=>{
    try{
        cy.get(element)
            .should("be.visible")
            .and("have.css","width",width)
            .and("have.css","height",height)
            
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("formIcons",(element,alignItems,display,justifyContent,borderRadius)=>{
    try{
        
        cy.get(element)
        .should("be.visible")
        .and("have.css","align-items",alignItems)
        .and("have.css","display",display)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","border-radius",borderRadius)
         
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("penaltyScoreMultiple",(element,fSize,width,height,borderRadius,border,justifyContent,alignItems,position,left,top)=>{
    try{
        
        cy.get(element)
        .should("be.visible")
        .and("have.css","font-size",fSize)
        .and("have.css","width",width)
        .and("have.css","height",height)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","border", border)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","align-items",alignItems)
        .and("have.css","position",position)
        .and("have.css","left",left)
        .and("have.css","top",top)
         
       

    }catch(err){
        cy.log(`----------ERROR! ${err}`);
        console.log(
          "%c" + `----------ERROR! ${err}`,
          "color: #ff0000; font-size: 14px; font-weight: bold;"
        );
    }
})
Cypress.Commands.add("tooltip_in_livescore_without_top",(element, right, minwidth, maxwidth, width, zindex,borderRadius,padding,transform,justifyContent,color,backgroundColor)=>{
    try{
        cy.get(element)
        .should("be.visible")
        .and("have.css","right",right)
        .and("have.css","min-width",minwidth)
        .and("have.css","max-width",maxwidth)
        .and("have.css","width",width)
        .and("have.css","z-index",zindex)
        .and("have.css","border-radius",borderRadius)
        .and("have.css","padding",padding)
        .and("have.css","transform",transform)
        .and("have.css","justify-content",justifyContent)
        .and("have.css","color",color)
        .and("have.css","background-color",backgroundColor)    
    }catch(err){        
            cy.log(`----------ERROR! ${err}`);
            console.log(
              "%c" + `----------ERROR! ${err}`,
              "color: #ff0000; font-size: 14px; font-weight: bold;"
            );
    }
})