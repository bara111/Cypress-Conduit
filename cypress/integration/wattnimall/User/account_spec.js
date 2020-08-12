describe("searchbar testing",()=>{
    it("test searchbar",{
        baseUrl:"https://watanimall.com"
    },()=>{
        cy.visit("/");
        cy.get("div.account-wrapper div.cdz-dd-content").should("be.hidden");
        cy.get("ul.header.features-links li.authorization-link").click();
        cy.get("div.account-wrapper div.cdz-dd-content").should("not.be.hidden");
        })

        it("test login",{
            baseUrl:"https://watanimall.com"
        },()=>{
            cy.visit("/");
            cy.get("div.account-wrapper div.cdz-dd-content").should("be.hidden");
            cy.get("ul.header.features-links li.authorization-link").click();
            cy.get(".info-summary-top > .md-content > form > :nth-child(2) > .mdl-textfield > .mdl-textfield__input").type("am.bara059@gmail.com");
            cy.get(".info-summary-top > .md-content > form > :nth-child(3) > .mdl-textfield > .mdl-textfield__input").type("1234Moaz{enter}");
            cy.get("ul.header.features-links li.authorization-link").click();
            cy.get(".icon-account");
            cy.get(".md-raised.md-primary").contains("خروج")
        })
        
    })