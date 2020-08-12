describe("searchbar testing",{
    baseUrl:"https://www.reddit.com"
},()=>{
    it("test searchbar",()=>{
        cy.visit("/");
        cy.get("div._2uYY-KeuYHKiwl-9aF0UiL").should("be.hidden");
        cy.get("input#header-search-bar").type("");
        cy.get("div._2uYY-KeuYHKiwl-9aF0UiL").should("not.be.hidden");
        })
    })