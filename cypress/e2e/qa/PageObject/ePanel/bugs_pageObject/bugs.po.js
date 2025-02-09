export class eg104_po{
    constructor(){
        this.header = '[id="template-title"]';
        this.windowEditor = '[id="ep_ig_font_picker"]';
        this.font_field = ".v-select__slot"
        this.font_suggestions = ".v-menu__content.theme--light.v-menu__content--auto menuable__content__active.v-autocomplete__content"
    }
    ls_h2h(){      

        cy.get(this.header).should("be.visible")
        cy.clickSeveralAssert(this.header,this.windowEditor,"be.visible")
        cy.get(this.windowEditor).within(()=>{
            cy.get(this.font_field).click()
            .type("80p")
            cy.get(".v-list-item__title").should("have.length",3)
        })
    }
}
export class eg107_po{
    constructor(){
        this.image_library = ".confirm:eq(0)"
        this.first_image = ".widget-item-image.infographic-image:eq(0)"
        this.logo_background_menu = '[id="input-99"]'
        this.display_suggestion = ".v-list-item__title:eq(0)"
        this.buttonPanel = ".ep_ig_save_export_container"
        this.modal = ".modal-content"
        this.nameField = ".v-text-field__slot:eq(0)"
        this.name = ""
        this.successmsg =".toast.toast-success"
        this.dashboard = ".breadcrumb-custom-style"
        this.newName = ".image-sub-title"        
        this.draftsBtn = ".upload-image-button:eq(1)"
        this.allBackgroundImgs = '.infographic-background-image'
        this.background_logo = ".ep_ig_footer_container"
        this.confirm_button = ".confirm:eq(2)"
        this.expected_backgroundColor = "background-color: rgb(0, 30, 40);"
        this.deleteBtn = ".widget-delete-button.epi-bin"
        this.modal = ".modal-content"
        this.confirmButton = ".confirm"
        
    }
    backgroundDraftCheck(){
        cy.get(this.image_library).click();
        cy.get(this.first_image).click();
        
        cy.get(this.logo_background_menu).click()
        cy.get(this.display_suggestion).invoke("text").then((text)=>{
            let trimmed_text = text.trim();
            cy.wrap(trimmed_text).should("eq","Display")
        })
        cy.get(this.background_logo).should("be.visible")
        cy.get(this.background_logo).should("have.attr","style",this.expected_backgroundColor)
        //save as draft with random name 
        const letters = "abcdefghijklmnopqrstuvwxyz"
        const number = "0123456789"
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            const randomNumbers = Math.floor(Math.random() * number.length)
            this.name += letters[randomIndex]+number[randomNumbers];        
          }
        cy.get(this.buttonPanel)  
        .find(".cancel").eq(0)  
        .click()
        cy.get(this.modal)
        .find(this.nameField)
        .click()
        .type(this.name)
        cy.get(this.confirm_button)
        .click()
        cy.wait(2000)
        cy.get(this.successmsg)
        .should('exist')
        .and('be.visible')
        let flag = false;
        cy.get(this.dashboard).eq(1).click()
        cy.get(this.draftsBtn).click()   
        cy.get(this.newName)  
        .each((element,index)=>{
            cy.wrap(element).invoke('text').then((text) => {  
                if (text === " "+this.name+" ") {                
                    flag = true;
                    let LowerIndex = Math.floor(index/2)
                    cy.get(this.allBackgroundImgs+":eq("+LowerIndex+")").click();
                }
            })
        })

        // in draft check the background value 
        cy.get(this.logo_background_menu).click()
        cy.get(this.display_suggestion).invoke("text").then((text)=>{
            let trimmed_text = text.trim();
            cy.wrap(trimmed_text).should("eq","Display")
        })

        //assert the background is visible
        cy.get(this.background_logo).should("be.visible")
        cy.get(this.background_logo).should("have.attr","style",this.expected_backgroundColor)
        
       
    }
    deleteAllDrafts(){ //use this when you are on the template , it will navigate you to the drafts (custom templates)
        cy.get(this.dashboard).eq(1).click()
        cy.get(this.draftsBtn).click()   
        cy.get(this.newName)  
        cy.get(this.deleteBtn)
        .each((element,index)=>{
            cy.wrap(element)
            .click()
            cy.get(this.modal)
            cy.get(this.confirmButton)
            .click()
        })
    }
}
export class eg108_po{
    constructor(){
        this.image_librarybtn = ".confirm:eq(0)"
        this.first_image = ".widget-item-image.infographic-image:eq(0)"
        this.loaded_image = ".vue-advanced-cropper__image-wrapper:eq(0)"
        this.zoom_title_of_scalewindow = ".ep_ig_zoom_title"
        this.scaleSlider = ".v-slider.v-slider--horizontal.theme--light:eq(0)"
        this.scaleCircle = ".v-slider__thumb.primary"
        this.forth_image =".widget-item-image.infographic-image:eq(3)"
        this.initialX = "";
        this.initialY = "";
        this.x = 15;
        this.y = 15;
    }
    resetScale(){    

        
        function loadImage(first,second){
            cy.get(first).click()
            cy.get(second).click()
        }
        function switchScale(loadedImage,scaleWindow,scaleSlider){
            cy.get(loadedImage).click({force:true})
            cy.get(scaleWindow).should("be.visible")
            cy.get(scaleSlider).click(320,20)

        }
        function GetCoordinates(element) {
            return cy.get(element).invoke("offset").then((offset) => {
                const top = Math.ceil(offset.top);
                const left = Math.ceil(offset.left);
                
                cy.log('Element Coordinates:');
                cy.log(`Top: ${top}`);
                cy.log(`Left: ${left}`);
                
                // Return the object containing the coordinates inside the Cypress chain
                return cy.wrap({ top, left });
            });
        }
        loadImage(this.image_librarybtn,this.first_image)
        switchScale(this.loaded_image,this.zoom_title_of_scalewindow,this.scaleSlider,this.x,this.y)
        // cy.get(this.loaded_image).click(15,15).click(15,15)
        GetCoordinates(this.scaleCircle).then(({ top, left }) => {
            this.changedY = top;
            this.changedX = left;
            
        });
        console.log(this.changedX, this.changedY);
        
        loadImage(this.image_librarybtn,this.forth_image)
        cy.get(this.loaded_image).click({force:true})
        cy.wait(500)
        GetCoordinates(this.scaleCircle).then(({top, left})=>{
            this.initialY = top;
            this.initialX = left;
            console.log("inX: ",this.initialX,"inY: ",this.initialY)
            console.log("changedX: ",this.changedX,"ChangedY: ",this.changedY)
            // expect(this.initialY).to.not.equal(this.changedY);
            expect(this.initialX).to.not.equal(this.changedX)
            // expect(this.initialX).to.equal(0)
        })
          
    }
}
export class eg110_po{
    constructor(){
        this.flag = ".ep_ig_flag_and_logo_wrapper img:eq("
        this.param = ""        
        this.completedElement = this.flag + "0" + ")"
        this.secondCompletedFlag = this.flag +  "1" + ")"
        this.width; //expected width
        this.height; //expected height
        
    }
    //parameter is for the number of flags at the moment we graphs with max 2/3 flags should be optimized for more flags
    checkPNG(parameter){
        let flag;
        
        const PNG = () =>{     
            
                cy.get('img[alt="Flag And Logo Component Image"]').eq(0).should('be.visible').invoke('attr', 'src').then((src) => {
                    // Construct the URL dynamically using the src attribute of the image
                    console.log('Original src:', src)
                    let url = "https://epanel.enetsites.com"+src;
                    // let modifiedUrl = url.replace("/widgets", "/");
                    console.log('Modified URL:', url); // Check the modified URL
                    cy.request({
                        method: "GET",
                        url: url,
                        encoding: 'base64',
                        retryOnStatusCodeFailure: true, // Retry on non-2xx status codes
                        retryAttempts: 3, // Number of retry attempts
                        retryInterval: 1000
                     // Ensure the response is treated as base64 encoded
                    }).then((response) => {
                    // Parse the base64 image data to retrieve its dimensions
                    const img = new Image();
                    img.src = 'data:image/png;base64,' + response.body; // Assuming PNG, adjust if necessary
                    img.onload = () => {
                        // Get the width and height of the image
                        const width = img.width;
                        const height = img.height;              
                        // Create a Cypress command containing the assertions
                        if (width !== this.width || height !== this.height) {
                            flag = false;
                            console.log("Actual width: ", width)
                            console.log("Actual height: ",height)
                        }
                        else{                    
                            flag = true;
                            }                      
                              
                    } 
                    }).then(() => {
                    // Use cy.then() to ensure proper handling of assertion failure
                        cy.then(() => {
                            expect(flag).to.be.true;                              
                        });
                    })
                }); cy.get('img[alt="Flag And Logo Component Image"]').eq(0).should('be.visible').invoke('attr', 'src').then((src) => {
                    // Construct the URL dynamically using the src attribute of the image
                    console.log('Original src:', src)
                    let url = "https://epanel.enetsites.com"+src;
                    // let modifiedUrl = url.replace("/widgets", "/");
                    console.log('Modified URL:', url); // Check the modified URL
                        cy.request({
                        method: "GET",
                        url: url,
                        encoding: 'base64',
                        retryOnStatusCodeFailure: true, // Retry on non-2xx status codes
                        retryAttempts: 3, // Number of retry attempts
                        retryInterval: 1000 // Ensure the response is treated as base64 encoded
                    }).then((response) => {
                    // Parse the base64 image data to retrieve its dimensions
                    const img = new Image();
                    img.src = 'data:image/png;base64,' + response.body; // Assuming PNG, adjust if necessary
                    img.onload = () => {
                        // Get the width and height of the image
                        const width = img.width;
                        const height = img.height;              
                        // Create a Cypress command containing the assertions
                        if (width !== this.width || height !== this.height) {
                            flag = false;
                            console.log("Actual width: ", width)
                            console.log("Actual height: ",height)
                        }
                        else{                    
                            flag = true;
                        }                      
                              
                    } 
                    }).then(() => {
                    // Use cy.then() to ensure proper handling of assertion failure
                        cy.then(() => {
                            expect(flag).to.be.true;                              
                        });
                    })
                });    
                cy.get('img[alt="Flag And Logo Component Image"]').eq(0).should('be.visible').invoke('attr', 'src').then((src) => {
                    // Construct the URL dynamically using the src attribute of the image
                    console.log('Original src:', src)
                    let url = "https://epanel.enetsites.com"+src;
                    // let modifiedUrl = url.replace("/widgets", "/");
                    console.log('Modified URL:', url); // Check the modified URL
                    cy.request({
                        method: "GET",
                        url: url,
                        encoding: 'base64',
                        retryOnStatusCodeFailure: true, // Retry on non-2xx status codes
                        retryAttempts: 3, // Number of retry attempts
                        retryInterval: 1000 // Ensure the response is treated as base64 encoded
                    }).then((response) => {
                    // Parse the base64 image data to retrieve its dimensions
                    const img = new Image();
                    img.src = 'data:image/png;base64,' + response.body; // Assuming PNG, adjust if necessary
                    img.onload = () => {
                        // Get the width and height of the image
                        const width = img.width;
                        const height = img.height;              
                        // Create a Cypress command containing the assertions
                        if (width !== this.width || height !== this.height) {
                            flag = false;
                            console.log("Actual width: ", width)
                            console.log("Actual height: ",height)
                            cy.log("Actual width: ", width)
                            cy.log("Actual height: ",height)
                        }
                        else{                    
                            flag = true;
                            }                      
                              
                    } 
                    }).then(() => {
                    // Use cy.then() to ensure proper handling of assertion failure
                        cy.then(() => {
                            expect(flag).to.be.true;                              
                        });
                    })
                }); 
                if(parameter == 2){
                    cy.get('img[alt="Flag And Logo Component Image"]').eq(1).should('be.visible').invoke('attr', 'src').then((src) => {
                        // Construct the URL dynamically using the src attribute of the image
                        console.log('Original src:', src)
                        let url = "https://epanel.enetsites.com"+src;
                        // let modifiedUrl = url.replace("/widgets", "/");
                        console.log('Modified URL:', url); // Check the modified URL
                        cy.request({
                            method: "GET",
                            url: url,
                            encoding: 'base64',
                            retryOnStatusCodeFailure: true, // Retry on non-2xx status codes
                            retryAttempts: 3, // Number of retry attempts
                            retryInterval: 1000// Ensure the response is treated as base64 encoded
                        }).then((response) => {
                        // Parse the base64 image data to retrieve its dimensions
                        const img = new Image();
                        img.src = 'data:image/png;base64,' + response.body; // Assuming PNG, adjust if necessary
                        img.onload = () => {
                            // Get the width and height of the image
                            const width = img.width;
                            const height = img.height;              
                            // Create a Cypress command containing the assertions
                            if (width !== this.width || height !== this.height) {
                                flag = false;
                                console.log("Actual width: ", width)
                                console.log("Actual height: ",height)
                                cy.log("Actual width: ", width)
                                cy.log("Actual height: ",height)
                            }
                            else{                    
                                flag = true;
                                }                      
                                  
                        } 
                        }).then(() => {
                        // Use cy.then() to ensure proper handling of assertion failure
                            cy.then(() => {
                                expect(flag).to.be.true;                              
                            });
                        })
                    });  
                }
                              
            
            }       
            
        if(parameter == 2 || parameter == 1){
            PNG(parameter)
        }else{
            throw Error("not expected parameter")
        }
       
    }
    checkSVG(parameter){
        let flag;              
        const SVG = () =>{cy.get('img[alt="Flag And Logo Component Image"]').eq(0).should('be.visible').invoke('attr', 'src').then((src) => {
            // Construct the URL dynamically using the src attribute of the image
            console.log('Original src:', src)
            let url = "https://epanel.enetsites.com" + src;
            // let modifiedUrl = url.replace("/widgets", "/");
            console.log('Modified URL:', url); // Check the modified URL
            cy.request({
                method: "GET",
                url: url,
                // Remove encoding to receive the SVG content directly
            }).then((response) => {
                // Check if the request was successful
                cy.wait(1000)
                expect(response.status).to.eq(200);
                // Check if the response content type includes SVG
                if (response.headers['content-type'].includes('image/svg+xml')) {
                    // Convert the SVG content to a DOM element
                    const parser = new DOMParser();
                    const svgDocument = parser.parseFromString(response.body, 'image/svg+xml');
                    const svgElement = svgDocument.querySelector('svg');
                    // Get the width and height attributes of the SVG element
                    const width = svgElement.getAttribute('width');
                    const height = svgElement.getAttribute('height');
                    // Create a Cypress command containing the assertions
                    let actualWidth = parseInt(width)
                    let actualHeight = parseInt(height)
                    
                    if (actualWidth !== this.width || actualHeight !== this.height) {
                        flag = false;
                        console.log("Actual width: ", width)
                        console.log("Actual height: ",height)
                        console.log("Expected width: ",this.width)
                        console.log("Expected height: ",this.height)
                        cy.log("Actual width: ", width)
                        cy.log("Actual height: ",height)
                        cy.log("Expected width: ",this.width)
                        cy.log("Expected height: ",this.height)
                    } else {
                        flag = true;
                    } 
                } else {
                    console.error('Unsupported content type:', response.headers['content-type']);
                    flag = false; // Set flag to false if the response is not SVG
                }
            }).then(() => {
                // Use cy.then() to ensure proper handling of assertion failure
                cy.then(() => {
                    expect(flag).to.be.true;          
                });
            });
        }); 
        if(parameter == 2){
            cy.get('img[alt="Flag And Logo Component Image"]').eq(1).should('be.visible').invoke('attr', 'src').then((src) => {
                // Construct the URL dynamically using the src attribute of the image
                console.log('Original src:', src)
                let url = "https://epanel.enetsites.com" + src;
                // let modifiedUrl = url.replace("/widgets", "/");
                console.log('Modified URL:', url); // Check the modified URL
                cy.request({
                    method: "GET",
                    url: url,
                    // Remove encoding to receive the SVG content directly
                }).then((response) => {
                    // Check if the request was successful
                    expect(response.status).to.eq(200);
                    // Check if the response content type includes SVG
                    if (response.headers['content-type'].includes('image/svg+xml')) {
                        // Convert the SVG content to a DOM element
                        const parser = new DOMParser();
                        const svgDocument = parser.parseFromString(response.body, 'image/svg+xml');
                        const svgElement = svgDocument.querySelector('svg');
                        // Get the width and height attributes of the SVG element
                        const width = svgElement.getAttribute('width');
                        const height = svgElement.getAttribute('height');
                        // Create a Cypress command containing the assertions
                        let actualWidth = parseInt(width)
                        let actualHeight = parseInt(height)
                        
                        if (actualWidth !== this.width || actualHeight !== this.height) {
                            flag = false;
                            console.log("Actual width: ", width)
                            console.log("Actual height: ",height)
                            console.log("Expected width: ",this.width)
                            console.log("Expected height: ",this.height)
                            cy.log("Actual width: ", width)
                            cy.log("Actual height: ",height)
                        } else {
                            flag = true;
                        } 
                    } else {
                        console.error('Unsupported content type:', response.headers['content-type']);
                        flag = false; // Set flag to false if the response is not SVG
                    }
                }).then(() => {
                    // Use cy.then() to ensure proper handling of assertion failure
                    cy.then(() => {
                        expect(flag).to.be.true;          
                    });
                });
            }); 
        } 
        }   
        if(parameter == 2 || parameter == 1){
            SVG(parameter)
        }else{
            throw Error("not expected parameter")
        }
    }
//     CheckImageSize(secondFlag){   
//         //second flag -yes or no - if yes we have 2 flags, no - we have 1 flag
//         const getSourceAndVisit = (element,yesNo,secondElement,width,height) => {
//             if (element !== null) {
//                 cy.get(element).should('have.attr', 'src').then((src) => {
//                     // Log the source URL to the Cypress command log
//                     console.log('Image source:', src);
//                     const completeUrl = "https://epanel.enetsites.com" + src;
//                     cy.request(completeUrl).then((response) => {
//                         cy.log('Response status:', response.status);
//                         cy.log('Content type:', response.headers['content-type']);
//                         cy.log(completeUrl)
//                         // Check if the request was successful
//                         expect(response.status).to.eq(200);
                        
//                         // Check if the response content type includes SVG or PNG
//                         // expect(response.headers['content-type']).to.satisfy((contentType) => {
//                         //     return contentType.includes('image/svg+xml') || contentType.includes('image/png');
//                         // });
        
//                         // Handle PNG content if the response is PNG
//                         if (response.headers['content-type'].includes('image/png')) {
//                           // Make a request to the URL
//                           let flag;
//                          
                        
//                           // Create Basic Authentication header
//                           const authHeader = 'Basic ' + btoa(username + ':' + password);
                        
//                           cy.get('img[alt="Flag And Logo Component Image"]').should('be.visible').invoke('attr', 'src').then((src) => {
//                             // Construct the URL dynamically using the src attribute of the image
//                             cy.request({
//                               method: "GET",
//                               url: "https://epanel.enetsites.com/infographic/displayLogo/857355/x",
//                               headers: {
//                                 // Authorization: authHeader
//                               },
//                               encoding: 'base64' // Ensure the response is treated as base64 encoded
//                             }).then((response) => {
//                                   // Parse the base64 image data to retrieve its dimensions
//                                   const img = new Image();
//                                   img.src = 'data:image/png;base64,' + response.body; // Assuming PNG, adjust if necessary
//                                   img.onload = () => {
//                                   // Get the width and height of the image
//                                   const width = img.width;
//                                   const height = img.height;
                        
//                                       // Create a Cypress command containing the assertions
//                                       if (width !== 200 || height !== 200) {
//                                           flag = false;
//                                           console.log("Actual width: ", width)
//                                           console.log("Actual height: ",height)
//                                       }
//                                       else{
//                                           cy.log("eLSE!!!!!!!!!!1111")
//                                           console.log("ELSEEE!")
//                                           flag = true;
//                                       }                      
                                
//                                   } 
//                               }).then(() => {
//                                   // Use cy.then() to ensure proper handling of assertion failure
//                                 cy.then(() => {
//                                     expect(flag).to.be.true;
                                    
//                                 });
//                             })
//                         });
                          
                        
//                     });
//                          else if (response.headers['content-type'].includes('image/svg+xml')) {
//                             // Convert the SVG content to a DOM element
//                             const parser = new DOMParser();
//                             const svgContent = response.body;
//                             const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
//                             const svgElement = svgDocument.querySelector('svg');
        
//                             // Get the width and height attributes of the SVG element
//                             const svgWidth = svgElement.getAttribute('width');
//                             const svgHeight = svgElement.getAttribute('height');
        
//                             // Log the width and height to the Cypress command log
//                             cy.log('SVG width:', svgWidth);
//                             cy.log('SVG height:', svgHeight);
        
//                             // Assert width and height
//                             cy.expect(svgWidth).to.eq(width);
//                             cy.expect(svgHeight).to.eq(height);
//                         } else {
//                             // Handle other content types if needed
//                             console.error('Unsupported content type:', response.headers['content-type']);
//                             return; // Exit function or handle gracefully
//                         }
//                     });
//                 });
//             }
//             if(yesNo !== "no"){                
//                 cy.get(secondElement).should('have.attr', 'src').then((src) => {
//                     // Log the source URL to the Cypress command log
//                     console.log('Image source:', src);
//                     const completeUrl = "https://epanel.enetsites.com" + src;
//                     cy.request(completeUrl).then((response) => {
//                         cy.log('Response status:', response.status);
//                         cy.log('Content type:', response.headers['content-type']);
//                         // Check if the request was successful
//                         expect(response.status).to.eq(200);
                      
//                         // Check if the response content type includes SVG or PNG
                       
                      
//                         // Get the SVG content from the response body
//                         const svgContent = response.body;
                      
//                         // Convert the SVG content to a DOM element
//                         const parser = new DOMParser();
//                         let svgDocument;
//                         let svgElement;
//                         // expect(response.headers['content-type']).to.satisfy((contentType) => {
//                         //     return contentType.includes('image/svg+xml') || contentType.includes('image/png');
//                         //   });
//                         try {
//                           // Try parsing with 'image/svg+xml' content type
//                           svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
//                           svgElement = svgDocument.querySelector('svg');
                      
//                           // Get the width and height attributes of the SVG element
//                           const svgWidth = svgElement.getAttribute('width');
//                           const svgHeight = svgElement.getAttribute('height');
                      
//                           // Log the width and height to the Cypress command log
//                           cy.log('SVG width:', svgWidth);
//                           cy.log('SVG height:', svgHeight);
                      
//                           // Assert width and height
//                           cy.expect(svgWidth).to.eq(width);
//                           cy.expect(svgHeight).to.eq(height);
//                         } catch (error) {
//                           // Parsing failed, handle PNG content                          
//                           if (response.headers['content-type'].includes('image/png')) {
//                             // Handle PNG content here
//                             const blob = new Blob([svgContent], { type: 'image/png' });
// const reader = new FileReader();
// reader.onload = function () {
//     // Create an Image element
//     const img = new Image();
//     img.onload = function() {
//         // Get width and height
//         const pngWidth = this.width;
//         const pngHeight = this.height;

//         // Log the width and height of the PNG image to the Cypress command log
//         cy.log('PNG width:', pngWidth);
//         cy.log('PNG height:', pngHeight);


//         // Assert width and height
//         cy.expect(pngWidth).to.eq(width);
//         cy.expect(pngHeight).to.eq(height);
//     };

//     // Set the Image source to the base64 representation of the PNG content
//     img.src = reader.result;
// };
// reader.readAsDataURL(blob);
//                         } else {
//                             // Handle other content types if needed
//                             console.error('Unsupported content type:', response.headers['content-type']);
//                             return; // Exit function or handle gracefully
//                           }
//                         }
//                       });        
//                 });   
//             }
//         } 

        // getSourceAndVisit(this.completedElement,secondFlag,this.secondCompletedFlag,this.width,this.height)
        
       
}
export class eg187_po{
    constructor(){
        this.element = ".ep_ig_edditable_component";
        this.highlight_button = ".switch:eq(0)";   
        this.switch_label = ".ep_switch_label"    
        this.backgroundValue =  "rgba(43, 182, 115, 0.5) none repeat scroll 0% 0% / auto padding-box border-box"
        this.searchPlayer1 = '[id="ep_ig_search_bar_1"]'
        this.searchOnePlayerOrEvent = '[id="ep_ig_eventInput_1"]'
        this.searchOnlyEvent = '[id="ep_ig_eventInput"]'
        this.dropdown = ".ep_ig_event_results"
        this.searchSuggestion = ".ep_ig_event_wrapper:eq(0)"
        this.dimensionButtons = ".ep_ig_size_box"


        
    }
    searchEvent(sport){
         switch (sport) {
            case "tennisPlayer":
                cy.wait(1000) 
                cy.log("????????????????")                   
                cy.get('.ep_ig_search_bar_input').eq(0).should("exist")
                cy.get('.ep_ig_search_bar_input').eq(0).click().type("Grigor Dimitro")
                cy.get(this.dropdown).should("be.visible")
                .find(this.searchSuggestion).click({force:true})
                
             
              // code to execute if variable equals value1
            break;
            case "footballTeam":               
                    cy.get('.ep_ig_search_bar_input').eq(0).should("exist")
                    cy.get('.ep_ig_search_bar_input').eq(0).click().type("Manchester Unite")
                    cy.get(this.dropdown).should("be.visible")
                    .find(this.searchSuggestion).click({force:true})               
            break;
            case "footballEvent":
                cy.get('.ep_ig_search_bar_input').eq(0).should("exist")
                cy.get('.ep_ig_search_bar_input').eq(0).click().type("Argentina-France")
                cy.get(this.dropdown).should("exist")
                .find(this.searchSuggestion).click({force:true})   
            break;
            // add more cases as needed
            case "hockeyTeam":           
                cy.get('.ep_ig_search_bar_input').eq(0).should("exist")
                const currentDate = new Date()
                const desiredDate = new Date('2024-09-09');
                if (currentDate < desiredDate) {
                    cy.log("There are no matches yet");
                } else {
                    cy.get('.ep_ig_search_bar_input').eq(0).click().type("Tampa Bay Lightni");
                    cy.get(this.dropdown).eq(0).should("be.visible")
                        .find(this.searchSuggestion).click({ force: true });
                }
                //In test
                // cy.log(dayjs().format('DD/MM/YYYY'))
                
            default:
              // code to execute if variable doesn't match any case
          }
    }
    checkHighlightedBackground(){
       
        
       
        function clickHighlightButton(button){
            cy.get(button).click();
        }

        function loopAllElementsBackground(edditableComponent,background_value){
            cy.get(edditableComponent).should("have.css","background",background_value)
        }
       

        cy.get(this.switch_label).then(($label)=>{
            if($label.attr('disabled')){
                clickHighlightButton(this.highlight_button)
                cy.wait(1000)
                loopAllElementsBackground(this.element,this.backgroundValue)
            }
            else{
                cy.wait(1000)
                loopAllElementsBackground(this.element,this.backgroundValue)
                
            }
        })

        loopAllElementsBackground(this.element,this.backgroundValue)
    
        
       
    }
    switchDimensions(){
        //click on the second dimension
        for(var i = 0 ; i < 4; i++){
            cy.get(this.dimensionButtons).eq(i).click()
            this.checkHighlightedBackground()
        }
        
    }
}
export class lg361_po{
    constructor(){
        this.backgroundLogoOptions = ".ep_ig_buttons_wrapper"
        this.footerContainer = ".ep_ig_footer_container"
        this.liClass = 'li[class=""]'
        this.chooseCorporateLogo = '[id="input-96"]'
        this.suggestionsCorporate = ".v-list.v-select-list.v-sheet.theme--light.theme--light"
        this.enetpulseAlt = '[id="list-item-152-1"]'
        this.corporateLogo = ".ep_ig_footer_background"
        this.sponsorPartner = '[id="input-99"]'
        this.partnerLogo = '[id="list-item-159-1"]'
        this.partnerSuggestion = ".v-menu__content.theme--light.menuable__content__active.v-autocomplete__content"
        this.corporateLogoPlacement = ".ep_ig_corporate_logo_placement"
        this.partnerLogoPlacement = ".ep_ig_partner_logo_placement"
        this.selectedClass = ".ep_ig_sponsor_button.ep_ig_selected"
        this.disabledPosition = ".ep_ig_sponsor_button.ep_ig_disable_positon"
        this.availablePosition = ".ep_ig_sponsor_button"
        this.resetButton = '[id="reset"]'
        this.loadedPartnerLogo = ".ep_ig_footer_background_partner_logo"
    }
    CheckBackgroundOfTheLogo(){
        cy.get(this.backgroundLogoOptions)
        .find(this.liClass).eq(0) // select none
        .click()
        cy.get(this.footerContainer).should("have.css","background","rgba(0, 0, 0, 0) none no-repeat scroll 0% 0% / auto padding-box border-box")
        //there shouldn't be a logo background 
        cy.get(this.backgroundLogoOptions)
        .find(this.liClass).eq(0) //select white this class is 0 because it always gets the first non-selected option -> make the background white
        .click()
        cy.get(this.footerContainer).should("have.css","background","rgba(255, 255, 255, 0.96) none no-repeat scroll 0% 0% / auto padding-box border-box")
        //make the background black
        cy.get(this.backgroundLogoOptions)
        .find(this.liClass).eq(1) //select black, since None is free, we should select the black which is (1)
        .click()
        cy.get(this.footerContainer).should("have.css","background","rgba(0, 30, 40, 0.96) none no-repeat scroll 0% 0% / auto padding-box border-box")

        //change corporate logo
        cy.get(this.chooseCorporateLogo)
        .click()
        cy.get(this.suggestionsCorporate)
        .wait(2000)
        .find(this.enetpulseAlt)
        .click()
        //check if the logo is enetpulse alt
        // cy.get(this.corporateLogo).invoke("attr","src").then((src)=>{
        //     cy.wrap(src).should("eq","/css/infographic/logos/enetpulse_white.png")
        // })
        cy.get(this.corporateLogo)
            .find('img')
            .should('have.attr', 'src', '/css/infographic/logos/enetpulse_white.png');
    }
    ChangePartnerLogo(){
        cy.get(this.sponsorPartner)
        .click()
        cy.get(this.partnerSuggestion)
        .find(this.partnerLogo).click()
    }
    PositionLogicTest(){
        const checkPosition = (logo,selectedButtonClass,index,expectedValue)=>{
            cy.get(logo)
            .find(selectedButtonClass).eq(index).invoke("text").then((text)=>{
              const trimmed_text = text.trim()
              cy.wrap(trimmed_text).should("eq",expectedValue)
            })
        }
        //corporate logo should be in the middle on initial position
        checkPosition(this.corporateLogoPlacement,this.selectedClass,0,"Mid")        

        //corporate logo right should be unavailable
        checkPosition(this.corporateLogoPlacement,this.disabledPosition,0,"Right")
 
        //check if the left position is available
        checkPosition(this.corporateLogoPlacement,this.availablePosition,0,"Left")

        // check if partner logo is in the right
        checkPosition(this.partnerLogoPlacement,this.selectedClass,0,"Right")

        //partner logo mid should be unavailable
        checkPosition(this.partnerLogoPlacement,this.disabledPosition,0,"Mid")

        //check if the left position is available
        checkPosition(this.partnerLogoPlacement,this.availablePosition,0,"Left")

        //change the corporate to the left
        cy.get(this.corporateLogoPlacement)
        .find(this.availablePosition).eq(0).click()
        checkPosition(this.corporateLogoPlacement,this.selectedClass,0,"Left")

        //check if left is available for partner logo
        checkPosition(this.partnerLogoPlacement,this.disabledPosition,0,"Left")

        //change the partner to the mid
        cy.get(this.partnerLogoPlacement)
        .find(this.availablePosition).eq(1).click()
        checkPosition(this.partnerLogoPlacement,this.selectedClass,0,"Mid")

        //check if you can change the corporate logo to the mid
        checkPosition(this.corporateLogoPlacement,this.disabledPosition,0,"Mid")
        
        //place the corporate logo to the right
        cy.get(this.corporateLogoPlacement)
        .find(this.availablePosition).eq(2).click()
        checkPosition(this.partnerLogoPlacement,this.disabledPosition,0,"Right")

        //

    }   
    checkIfTheirPositionIsFine(){        
        
        cy.get(this.loadedPartnerLogo)
        .invoke("offset")
        .then((offset) => {
            const x = Math.round(offset.left);// X coordinate
            const y = Math.round(offset.top);// Y coordinate
            console.log(x, y);
            cy.get(this.resetButton).click(); //click reset
            cy.get(this.loadedPartnerLogo)
            .should('be.visible') // Add assertion to ensure logo is visible
            .invoke("offset")
            .then((offset) => {
                const a = Math.round(offset.left);// X coordinate
                const b = Math.round(offset.top);// Y coordinate
                console.log(a, b);
                cy.wrap(a).should("eq",x)
                cy.wrap(b).should("eq",y)
        });
        });
      
      
      
      
        
    }


}

export class lg470_po{
    constructor(){
        this.typePlayerName = '#input-81'
        this.firstElementDropDownList = '.v-list-item__mask'
        this.playerCountryFlag = '.ep_ig_national_flag'

    }
    
    checkPlayerCountryFlag(){
        // type players name and select the first element in the drop-down
        cy.get(this.typePlayerName).click().type('Kylian Mbappe')
        cy.get(this.firstElementDropDownList).click()

        cy.get(this.playerCountryFlag).should('have.attr', 'src', '/infographic/displayFlag/5/4_3/png');
    }

    
}

export class lg471_po{
    constructor(){
        this.typePlayerName = '#input-81'
        this.firstElementDropDownList = '.v-list-item__mask'
        this.playerCountryFlag = '.ep_ig_national_flag'

    }
    
    checkPlayerCountryFlagHasBorder(){
        // type players name and select the first element in the drop-down
        cy.get(this.typePlayerName).click().type('Kylian Mbappe')
        cy.get(this.firstElementDropDownList).click()

        cy.get(this.playerCountryFlag).should('have.css', 'border', '1px solid rgb(238, 238, 238)');
    }

    
}

export class lg499_po{
    constructor(){
        this.showTeamLogoField = '#input-56'
        this.firstElementDropDownList = '.v-list-item__mask'

        this.playerName = '#player-name'

    }
    
    checkIfThePlayerNameIsVisible(){
        // select "No" from the "Show team logo" dropdown and click on the first element
        cy.get(this.showTeamLogoField).click().type("No")
        cy.get(this.firstElementDropDownList).click()

        //the player's name should be visible
        cy.get(this.playerName).should('be.visible')
    }

    
}

export class lg500_po{
    constructor(){
        this.showStatsForField = '#input-89'
        this.firstElementDropDownList = '.v-list-item__mask'

        this.momLogo = '#man-match'

    }
    
    checkIfTheMomLogoIsVisible(){
        // select something else in the "Show stats for" drop-down
        cy.get(this.momLogo).should('exist')
        //click on "Selected stage" from the drop-down list
        cy.get(this.showStatsForField).click().type('Selected Stage')
        cy.get(this.firstElementDropDownList).click()

        //MOM logo should not exist
        cy.get(this.momLogo).should('not.exist')

        //clear the type field
        cy.get(this.showStatsForField).clear()
        
        //click on "Full tournament" from the drop-down list
        cy.get(this.showStatsForField).click().type('Full Tournament')
        cy.get(this.firstElementDropDownList).click()

        //MOM logo should not exist
        cy.get(this.momLogo).should('not.exist')
    }

    
}

export class lg501_po{
    constructor(){
        this.playerRating = '.ep_ig_rating'

    }
    
    checkThePlayerRatingFormat(){
        //the player's rating should be with one digit after the dot
        cy.get(this.playerRating).invoke("text").then((elementText) => {
            let trimmedText = elementText.trim()
            cy.expect(trimmedText).to.match(/^\d+(\.\d+)?$/)
        })
    }

    
}

export class lg502_po{
    constructor(){
        this.monthArray = ["January", "February","March","April","May","June","July","August","September","October","November","December"]

        this.eventDate = '#date'
        this.dateFormatDropdown = '#input-97'
        this.firstElementDropDownList = '.v-list-item__mask'


    }
    
    checkForMissingLabelOfDateFormat(){
        // select the certain date format "d month yyyy"
        cy.get(this.dateFormatDropdown).click().type("d month yyyy")
        cy.get(this.firstElementDropDownList).click()
        // get the text with the label and check if the month lable is visible
        cy.get(this.eventDate).invoke("text").then((elementText) => {
            let trimmedText = elementText.trim()
            let splittedText = trimmedText.split(' ')
            cy.expect(this.monthArray).to.contains(splittedText[1])    
        })
    }

    
}

export class lg506_po{
    constructor(){
        this.playerClubLogo = '.ep_ig_club_logo'
        this.tournamentTemplate = '.v-select__slot'
        this.firstElementDropDownList = '.v-list-item__mask'

        this.playerNatLogo = '.ep_ig_national_flag'

        this.dataArray = ["Euro (Europe)", "Euro 2024" ,"Main Final tournament", "Spain-Italy"]
    }
    
    checkThePlayerClubOrNationalLogo(){
        //the initial player's club logo
        cy.get(this.playerClubLogo).should('exist')
        // cy.get(this.playerClubLogo).should("have.attr", "src", "/lsapi/displayLSImage/StJo2e3A-fcDVLdrL/png")

        for (var i = 0; i < this.dataArray.length; i++) {
            (function(index) {
                var a = 5 + index; // increment a based on the loop index
                cy.get(this.tournamentTemplate).eq(a).click().type(this.dataArray[index]);
                if(a === 8){
                    cy.get('.ep_ig_event_results_wrapper').click()
                }else{
                    cy.get(this.firstElementDropDownList).click()
                }
                
                console.log(a);
            }).call(this, i);
        }

        cy.get(this.playerNatLogo).should('exist')
        // cy.get(this.playerNatLogo).should("have.attr", "src", "/infographic/displayFlag/8/4_3/png")
    }

    
}
