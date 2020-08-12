
describe("test navigation of the header",{
    baseUrl:"https://demo.productionready.io/#/"
},()=>{
    it("test the nav links for non logged users",()=>{
        cy.visit("/").should(()=>{
            const token=localStorage.getItem('jwtToken');
            if(token==null){
                cy.get("ul[show-authed=false].nav.navbar-nav.pull-xs-right").children().should("have.length",3);
                cy.get("[show-authed=false] > :nth-child(1) > .nav-link").then(($homeLink)=>{
                    const text =$homeLink.text();
                    expect($homeLink).to.have.attr("href","#/")
                    expect(text).to.include("Home");
                })
                cy.get("[show-authed=false] > :nth-child(2) > .nav-link").then(($loginLink)=>{
                    const text =$loginLink.text();
                    expect($loginLink).to.have.attr("href","#/login");
                    expect(text).to.include("Sign in");
                })
                cy.get("[show-authed=false] > :nth-child(3) > .nav-link").then(($signUpLink) => {
                    const text =$signUpLink.text();
                    expect($signUpLink).to.have.attr("href","#/register");
                    expect(text).to.include("Sign up");
                })
            }
            else{
                cy.get("ul[show-authed=true].nav.navbar-nav.pull-xs-right").children().should("not.have.length",3);
            }
        })
    })

    it("test the not logged in active links",()=>{
        cy.visit("/").should(()=>{
            const token=localStorage.getItem('jwtToken');
            if(token==null){
                cy.get("ul[show-authed=false].nav.navbar-nav.pull-xs-right").children().should("have.length",3);
                cy.get("[show-authed=false] > :nth-child(1) > .nav-link").then(($homeLink)=>{
                cy.get("[show-authed=false] > :nth-child(2) > .nav-link").then(($loginLink)=>{
                cy.get("[show-authed=false] > :nth-child(3) > .nav-link").then(($signUpLink) => {
                    const text =$signUpLink.text();
                    expect($signUpLink).to.have.attr("href","#/register");
                    expect(text).to.include("Sign up");
                  
                    cy.wrap($loginLink).click();
                    cy.get($homeLink).should("have.attr","class","nav-link");
                    cy.get($loginLink).should("have.attr","class","nav-link active");
                    cy.get($signUpLink).should("have.attr","class","nav-link");

                    cy.wrap($signUpLink).click();
                    cy.get($homeLink).should("have.attr","class","nav-link");
                    cy.get($loginLink).should("have.attr","class","nav-link");
                    cy.get($signUpLink).should("have.attr","class","nav-link active");

                    cy.wrap($signUpLink).click();
                    cy.get($homeLink).should("have.attr","class","nav-link");
                    cy.get($loginLink).should("have.attr","class","nav-link");
                    cy.get($signUpLink).should("have.attr","class","nav-link active");
                })
              })
             })
            }
         })
        })
    it("test the navigation for logged",()=>{
        cy.login("am.bara059@gmail.com","123456789");
                cy.get("ul[show-authed=true].nav.navbar-nav.pull-xs-right").children().should("have.length",4);
                cy.get("[show-authed=true] > :nth-child(1) > .nav-link").then(($homeLink)=>{
                    const text =$homeLink.text();
                    expect($homeLink).to.have.attr("href","#/")
                    expect(text).to.include("Home");
                })
                cy.get("[show-authed=true] > :nth-child(2) > .nav-link").then(($newArticle)=>{
                    const text =$newArticle.text();
                    expect($newArticle).to.have.attr("href","#/editor/");
                    expect(text).to.include("New Article");
                })
                cy.get("[show-authed=true] > :nth-child(3) > .nav-link").then(($settingsLink) => {
                    const text =$settingsLink.text();
                    expect($settingsLink).to.have.attr("href","#/settings");
                    expect(text).to.include("Settings");
                })

                cy.get("[show-authed=true] > :nth-child(4) > .nav-link").then(($profileLink) => {
                    let text =$profileLink.text();
                    text=text.replace(/\s/g, '');
                    expect($profileLink).to.have.attr("href","#/@"+text);
                })
    })

    it("test the nav links for logged users",()=>{
        cy.login("am.bara059@gmail.com","12456789");
        cy.get("ul[show-authed=true].nav.navbar-nav.pull-xs-right").children().should("have.length",4);
        cy.get("[show-authed=true] > :nth-child(1) > .nav-link").then(($homeLink)=>{
        cy.get("[show-authed=true] > :nth-child(2) > .nav-link").then(($newArticle)=>{
        cy.get("[show-authed=true] > :nth-child(3) > .nav-link").then(($settingsLink) => {
        cy.get("[show-authed=true] > :nth-child(4) > .nav-link").then(($profileLink) => {
          
            cy.wrap($newArticle).click();
          
            cy.get($homeLink).should("have.attr","class","nav-link");
            cy.get($newArticle).should("have.attr","class","nav-link active");
            cy.get($settingsLink).should("have.attr","class","nav-link");
            cy.get($profileLink).should("have.attr","class","nav-link ng-binding");

            cy.wrap($settingsLink).click();

            cy.get($homeLink).should("have.attr","class","nav-link");
            cy.get($newArticle).should("have.attr","class","nav-link");
            cy.get($settingsLink).should("have.attr","class","nav-link active");
            cy.get($profileLink).should("have.attr","class","nav-link ng-binding");

            cy.wrap($profileLink).click();
           
            cy.get($homeLink).should("have.attr","class","nav-link");
            cy.get($newArticle).should("have.attr","class","nav-link");
            cy.get($settingsLink).should("have.attr","class","nav-link");
            cy.get($profileLink).should("have.attr","class","nav-link ng-binding active");

            cy.wrap($homeLink).click();
            
            cy.get($homeLink).should("have.attr","class","nav-link active");
            cy.get($newArticle).should("have.attr","class","nav-link");
            cy.get($settingsLink).should("have.attr","class","nav-link");
            cy.get($profileLink).should("have.attr","class","nav-link ng-binding");
        })
      })
    })
 })
    
    
    })
  
})