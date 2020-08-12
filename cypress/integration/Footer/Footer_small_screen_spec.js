describe("footer test", ()=>{
     it("test footer know us", ()=>{
     cy.visit("http://localhost:3000/");
     cy.viewport('iphone-6');
     cy.get('footer.footerTabletPhone .container-fluid .row div:nth-child(1) .about-store').click();
     cy.get('footer.footerTabletPhone .container-fluid .row div:nth-child(1) ul').should('have.attr', 'class', 'show')

    })
    it("test footer top links", ()=>{
      cy.visit("http://localhost:3000/");
      cy.viewport('iphone-6');
      cy.get('footer.footerTabletPhone .container-fluid .row div:nth-child(2) .about-store').click();
      cy.get('footer.footerTabletPhone .container-fluid .row div:nth-child(2) ul').should('have.attr', 'class', 'show')
     })
     it("test footer about store", ()=>{
      cy.visit("http://localhost:3000/");
      cy.viewport('iphone-6');
      cy.get('footer.footerTabletPhone .container-fluid .row div:nth-child(3) .about-store').click();
      cy.get('footer.footerTabletPhone .container-fluid .row div:nth-child(3) div').should('have.attr', 'class', 'show')
 
     })
 })
