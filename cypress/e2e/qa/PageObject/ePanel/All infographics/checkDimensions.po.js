class checkDimensions 
{
    constructor()
    {   //Login and logout
        
        this.emailField = "#email";
        this.passwordField = "#password";
        this.rememberCheckBox = "#remember";
        this.logInButton = ".btn.btn-primary";
        this.signInButton = ".auth-name > a";
        this.logOutButton = ".epi-power";

        //Infographics navigation
        this.infographicsIcon = ".epi-infographics";
        this.myInfographicsButton = "[href='https://epanel.enetsites.com/infographic/client_templates']";

        //Ingfographics
        this.infographicName = 
        {
            egFootballPlayerEventStats: "[href='/infographic/infographic/8/0']"
        };

        //Dimension buttons
        this.activeDimensionButton = ".ep_ig_size_box.active";
        this.dimension4x5Button = ".ep_ig_dimention_boxes_container > :nth-child(2)";
        this.dimension3x2Button = ".ep_ig_dimention_boxes_container > :nth-child(3)";
        this.dimension1x1Button = ".ep_ig_dimention_boxes_container > :nth-child(4)";

        //Percy
        this.infographicImage = "#editor2";
    }

    loginForm()
    {
        cy.visit('https://epanel.enetsites.com/widgets');
        cy.viewport(1280,720);
        cy.get(this.signInButton).click();
        cy.get(this.emailField).type(this.email);
        cy.get(this.passwordField).type(this.password);
        cy.get(this.rememberCheckBox).check();
        cy.get(this.logInButton).click();
    }

    infographicLocation(name) {
        const infographicSelector = this.infographicName[name];
        if (!infographicSelector) {
          throw new Error(`Infographic name ${name} does not exist`);
        }
    
        cy.get(this.infographicsIcon).click();
        cy.get(this.myInfographicsButton).click();
        cy.get(infographicSelector).click({ force: true });
      }
    }

 export default checkDimensions;
