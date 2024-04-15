import testdata from'../fixtures/users.json'

describe("14apr homework", () => {
    beforeEach(()=>{
        cy.visit( 'http://automationexercise.com');
    })
    it("Test Case 1: Register User", () =>{
        // cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        // cy.contains('New User Signup!').should("be.visible");
        // cy.get('[data-qa="signup-name"]').type(testdata.FirstName)
        // cy.get('[data-qa="signup-email"]').type(testdata.Email)
        // cy.get('[data-qa="signup-button"]').click();
        // cy.get('[data-qa="days"]').should("be.visible","ENTER ACCOUNT INFORMATION");
        // cy.get('#id_gender1').check();
        // cy.get('[data-qa="password"]').type(testdata.Password);
        // cy.get('[data-qa="days"]').select(22)
        // cy.get('[data-qa="months"]').select("March");
        // cy.get('[data-qa="years"]').select("1990");
        // cy.get('#newsletter').check();
        // cy.get('#optin').check();
        // cy.get('[data-qa="first_name"]').type(testdata.FirstName);
        // cy.get('[data-qa="last_name"]').type(testdata.LastName);
        // cy.get('[data-qa="company"]').type(testdata.Company);
        // cy.get('[data-qa="address"]').type(testdata['Address 1']);
        // cy.get('[data-qa="address2"]').type(testdata['Address 2']);
        // cy.get('[data-qa="country"]').select("United States");
        // cy.get('[data-qa="state"]').type(testdata.Country);
        // cy.get('[data-qa="city"]').type(testdata.City);
        // cy.get('[data-qa="zipcode"]').type(testdata.Postcode);
        // cy.get('[data-qa="mobile_number"]').type(testdata.Telephone)
        // cy.get('[data-qa="create-account"]').click();
})

it("Test Case 2: Login User with correct email and password", () =>{
    
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type(testdata.Email);
    cy.get('[data-qa="login-password"]').type(testdata.Password);
    cy.get('.login-form > h2').should("be.visible","Login to your account");
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(10) > a').should("be.visible"," Logged in as boy");
})

it("Test Case 3: Login User with incorrect email and password", () =>{
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type(testdata.wrongemail);
    cy.get('.login-form > h2').should("be.visible","Login to your account");
    cy.get('[data-qa="login-password"]').type(testdata.Password);
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form > form > p').should("be.visible","Your email or password is incorrect!");
})
})
