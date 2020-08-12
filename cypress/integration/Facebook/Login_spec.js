describe("testing facebook login",{
    baseUrl:"https://www.reddit.com/"
},()=>{
    it("greeting login",()=>{
        cy.visit("/login/");
        cy.contains('div._9axz',"تسجيل الدخول إلى فيسبوك");
    })
    
    it("wrong login data",()=>{
        cy.visit("/login/");
        cy.get("input#email").type("bara.amarneh@exalt.email{enter}");
        cy.get("div.uiContextualLayerPositioner").should('not.have.class', 'hidden_elem');
    }) 
    
    it("login with valid email and wrong password",()=>{
    cy.visit("/login/");
        cy.get("input#email").type("am.bara056@gmail.com{enter}");
        cy.get(".fsm.fwn.fcg").contains("am.bara056@gmail.com");
        cy.get("div.uiContextualLayerPositioner").should('not.have.class', 'hidden_elem');
    })
    

    it("forget password",()=>{
        cy.visit("https://www.facebook.com/login/");
        cy.get("div#login_link a").should('have.attr', 'href', 'https://www.facebook.com/recover/initiate/?ars=facebook_login');

    }) 
    
    it("login success",()=>{
      cy.login("am.bara056@gmail.com","8798456Moaz");
    })
})