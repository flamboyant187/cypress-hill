import finaldata from'../fixtures/users.json'

describe('ფინალური დავალება', () => {
    
    it(' შესვლა ზოოტოპიაზე', () => {
    cy.visit('https://zootopia.ge')
    })
    
    it("რეგისტრაცია", () => {
    cy.visit('https://zootopia.ge')
    cy.get('.menu-pop > .rprof').click();
    cy.get('.input-shablon > p > a').click();
    cy.contains("რეგისტრაცია").should('be.visible')
    cy.get(':nth-child(1) > .ismile').type(finaldata['FirstName.LastName']);
    cy.get(':nth-child(2) > .imail').type(finaldata.Email);
    cy.get('.ipir').type(finaldata.piradi);
    cy.get(':nth-child(4) > .itel').type(finaldata.Tel);
    cy.get(':nth-child(5) > .ipass').type(finaldata.Pass);
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(finaldata.PassCnf);
    cy.get('#etx').check({force: true});
    cy.get('.regsub').click();
    })
    it("რეგისტრაცია უკვე გამოყენებული იმეილის,პირად.ნომრისა და მობ.ნომრის საშუალებით", () => {
        cy.visit('https://zootopia.ge')
        cy.get('.rprof > p').click();
        cy.get('.input-shablon > p > a').click();
        cy.contains("რეგისტრაცია").should("be.visible")
        cy.get(':nth-child(1) > .ismile').type(finaldata['FirstName.LastName'])
        cy.get('.ipir').type(finaldata.piradi);
        cy.get(':nth-child(4) > .itel').type(finaldata.Tel);
        cy.get(':nth-child(5) > .ipass').type(finaldata.Pass);
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(finaldata.PassCnf);
        cy.get('#etx').check({force: true});
        cy.get('.regsub').click();

    })
    it("ავტორიზაციის გავლა სწორი მეილისა და პაროლის საშუალებით", () => {
        cy.visit('https://zootopia.ge')
        cy.Login2("kirtadzematteo43@gmail.com" ,"OGtsunkali");
        cy.get('.menu-pop > .iprof > p').click();
        cy.get('.logout-mobile').click();
    })
    it("პაროლის აღდგენა", () => {
        cy.visit('https://zootopia.ge');
        cy.get('.rprof > p').click();
        cy.get('.recovery-btn').click();
        cy.get('.recovery > .input-shablon > .input-div > .imail').type(finaldata.Email)
        cy.get('.recovery > .input-shablon > .form-button').click();
        cy.contains("პაროლის აღსადგენი ბმული წარმატებით გაიგზავნა მითითებულ ელ-ფოსტაზე").should("be.visible")
        cy.get('.recovery > .input-shablon > .xform').click();

    })
    it("პროდუქციის დამატება კალათაში", () => {
        cy.visit('https://zootopia.ge');
        cy.Login2(finaldata.Email,finaldata.Pass);
        cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click();
        cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click();
        cy.contains(" 1 ცალი").should("be.visible")
        cy.get('.menu-pop > .iprof').click();
        cy.get('.logout-mobile').click();
    })
    it("ცარიელი კალათით პროდუქციის გამოწერა", () => {
        cy.visit('https://zootopia.ge');
        cy.Login2(finaldata.Email,finaldata.Pass);
        cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click();
        cy.contains("კალათა ცარიელია").should("be.visible")
    cy.get('.menu-pop > .iprof').click();
    cy.get('.logout-mobile').click();


    })
 })