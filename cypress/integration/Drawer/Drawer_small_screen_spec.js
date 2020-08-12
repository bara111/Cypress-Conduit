describe("footer test", ()=>{
    it("test footer know us", ()=>{
    cy.visit("http://localhost:3000/");
    cy.viewport('iphone-6');
    cy.get('.header-Top-left.col .center button').click();
    cy.get('.header-navbar-Desktop div:nth-child(4)').should('have.attr', 'class', 'sidebar-box-visible');
   })
})
