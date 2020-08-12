describe("testing most viewed element",{
    baseUrl:"https://watanimall.com"
},()=>{
    beforeEach(() => {
        cy.visit("/");
      })
    it("test most viewed greeting",()=>{
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .b-title.h2").contains("الأكثر مشاهدةً");
    cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > :nth-child(2)").contains("من قبل الزبائن")
    })
    it("check number of all items",()=>{
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage").children().should('have.length', 11)
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage").children(".active").should('have.length', 5)

    })
    it("test show 1st element",()=>{
        cy.get(".content-wrap").as("expandItemDiv");
        cy.get("@expandItemDiv").should("not.be.visible");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(1) > .item-group > .item > .product-item-info > .product-item-top > .button-hover-wrap > .qs-button").then($result => {
            cy.wrap($result).click()
        })
        cy.get("@expandItemDiv").should("be.visible");
        cy.get(".qs-modal > .modal-popup > .modal-inner-wrap > .modal-header > .action-close").as("closeBtn");
        cy.get("@closeBtn").click({force:true});
        cy.get("@expandItemDiv").should("not.be.visible");
    })
    it("test show 2nd element",()=>{
        cy.get(".content-wrap").as("expandItemDiv");
        cy.get("@expandItemDiv").should("not.be.visible");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(2) > .item-group > .item > .product-item-info > .product-item-top > .button-hover-wrap > .qs-button").then($result => {
            cy.wrap($result).click()
        })
        cy.get("@expandItemDiv").should("be.visible");
        cy.get(".qs-modal > .modal-popup > .modal-inner-wrap > .modal-header > .action-close").as("closeBtn");
        cy.get("@closeBtn").click({force:true});
        cy.get("@expandItemDiv").should("not.be.visible");
    })
    it("test show 3rd element",()=>{
        cy.get(".content-wrap").as("expandItemDiv");
        cy.get("@expandItemDiv").should("not.be.visible");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(3) > .item-group > .item > .product-item-info > .product-item-top > .button-hover-wrap > .qs-button").then($result => {
            cy.wrap($result).click()
        })
        cy.get("@expandItemDiv").should("be.visible");
        cy.get(".qs-modal > .modal-popup > .modal-inner-wrap > .modal-header > .action-close").as("closeBtn");
        cy.get("@closeBtn").click({force:true});
        cy.get("@expandItemDiv").should("not.be.visible");
    })
    it("test show 4th element",()=>{
        cy.get(".content-wrap").as("expandItemDiv");
        cy.get("@expandItemDiv").should("not.be.visible");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(4) > .item-group > .item > .product-item-info > .product-item-top > .button-hover-wrap > .qs-button").then($result => {
            cy.wrap($result).click()
        })
        cy.get("@expandItemDiv").should("be.visible");
        cy.get(".qs-modal > .modal-popup > .modal-inner-wrap > .modal-header > .action-close").as("closeBtn");
        cy.get("@closeBtn").click({force:true});
        cy.get("@expandItemDiv").should("not.be.visible");
    })
    it("test show 5th element",()=>{
        cy.get(".content-wrap").as("expandItemDiv");
        cy.get("@expandItemDiv").should("not.be.visible");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(5) > .item-group > .item > .product-item-info > .product-item-top > .button-hover-wrap > .qs-button").then($result => {
            cy.wrap($result).click()
        })
        cy.get("@expandItemDiv").should("be.visible");
        cy.get(".qs-modal > .modal-popup > .modal-inner-wrap > .modal-header > .action-close").as("closeBtn");
        cy.get("@closeBtn").click({force:true});
        cy.get("@expandItemDiv").should("not.be.visible");
    })

   
})