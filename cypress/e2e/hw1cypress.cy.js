
describe("homework12", () => {
beforeEach(()=>{
    cy.visit("https://automationteststore.com/");
       cy.login('ComptonG','compton187')
})
    it("Manage Adress Book", () => {
    cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').click();
    cy.get('.side_account_list > :nth-child(5) > a').click();
    cy.get('tr > .pull-right > .btn').click();
    cy.get('#AddressFrm_firstname').clear();
    cy.get('#AddressFrm_firstname').type('Matt')
    cy.get('#AddressFrm_lastname').clear();
    cy.get('#AddressFrm_lastname').type('Kirr');
    cy.get('#AddressFrm_address_1').clear();
    cy.get('#AddressFrm_address_1').type('Gogi Dolidzis 2');
    cy.get('#AddressFrm_city').clear();
    cy.get('#AddressFrm_city').type('Genoa')
    cy.get('#AddressFrm_country_id').select('Italy')
    cy.get('#AddressFrm_zone_id').select('Genova')
    cy.get('#AddressFrm_postcode').clear();
    cy.get('#AddressFrm_postcode').type('1887')
    cy.get('#AddressFrm_default1').check();
    cy.get('.col-md-12 > .btn-orange').click();
})
it("Change user name", () => {
cy.get('.side_account_list > :nth-child(3) > a').click();
cy.get('#AccountFrm_firstname').clear();
cy.get('#AccountFrm_firstname').type('Mattiass');
cy.get('#AccountFrm_lastname').clear();
cy.get('#AccountFrm_lastname').type('Kirrta');
cy.get('.side_account_list > :nth-child(3) > a').click();
cy.get('#AccountFrm_firstname').should('be.visible','Mattiass');
cy.get('#AccountFrm_firstname').should('be.visible','kirtaa');
cy.get('#AccountFrm_email').should('be.visible','testmail@gmail.com');
cy.get('.logo > img').click();
})
it("Change password", () => {
cy.get('.side_account_list > :nth-child(4) > a').click();
cy.get('.side_account_list > :nth-child(4) > a').click();
cy.get('#PasswordFrm_current_password').type('compton187');
cy.get('#PasswordFrm_password').type('compton187');
cy.get('#PasswordFrm_confirm').type('compton187');
cy.get('.col-md-12 > .btn-orange').click();
cy.get('.alert').should('contain','Success: Your password has been successfully updated.');
cy.LogOut();
cy.login('ComptonG','compton187');
cy.contains('Welcome back Mattiass').should('be.visible');
})
})


//asdasd
