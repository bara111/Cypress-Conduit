describe("Testing add items to cart",
{baseUrl:"https://watanimall.com/"},()=>{
    beforeEach(() => {
         cy.visit("/");
         cy.viewport(1500, 768);
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(1)").as("firstItem");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(1) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").as("firstItemLink");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(2)").as("secondItem");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(2) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").as("secondItemLink");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(3)").as("thirdItem");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(3) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").as("thirdItemLink");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(4)").as("forthItem");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(4) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").as("forthItemLink");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(5)").as("fifthItem");
        cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(5) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").as("fifthItemLink");
    })

    it("add 1st item to the cart",()=>{
        cy.get("@firstItem").trigger('mouseover');
        cy.get("@firstItemLink").then(($link) => {
            
            const linkTextName=$link.text();

            cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(1) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .price-box > .price-container > #old-price-63584-final_price > .price").as("firstItemPrice");
            cy.get("@firstItemPrice").then(($price)=>{
            
                const priceText=$price.text();
                cy.wrap($link).click();
                cy.get(".page-title-wrapper.product span").then(($productSpan)=>{
                const spanTextName=$productSpan.text();
                expect(linkTextName).to.include(spanTextName);

                cy.get(".price-box.price-final_price .price-container span.price").then(($priceSpan)=>{
                    const spanTextPrice=$priceSpan.text();
                    expect(priceText).to.include(spanTextPrice);
                })
               })
            })
             cy.addProductToCart();
        })
    })

    // it("add 2nd item to the cart",()=>{
    //     cy.get("@secondItem").trigger('mouseover');
    //     cy.get("@secondItemLink").click();
    //     cy.addProductToCart();
    // })

    // it("add 3rd item to the cart",()=>{
    //     cy.get("@thirdItem").trigger('mouseover');
    //     cy.get("@thirdItemLink").click();
    //     cy.addProductToCart();
    // })

    // it("add 6th item to the cart",()=>{
    //     cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(7) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").should("not.be.hidden");
    //     cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(7)").trigger('mouseover');
    //     cy.get(".hidden-xs > .col-sm-24 > .cdz-product-wrap > .cdz-block-title > .grid-style-08 > .products > .owl-stage-outer > .owl-stage > :nth-child(7) > .item-group > .item > .product-item-info > .details > .detail-items-wrap > .product-box > .product > .product-item-link").click();
    //     cy.addProductToCart();
    // })
})