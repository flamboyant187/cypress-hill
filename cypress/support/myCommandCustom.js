Cypress.Commands.add('login',(user,password)=>{
    cy.contains("Login or register").click()
    cy.get('.returncustomer > .heading2').should('contain',"Returning Customer")
    cy.get('#loginFrm_loginname').type(user)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.get('.maintext').contains(' My Account')
 
//   cy.get('#customer_menu_top > li > a').click();
//   cy.get('#loginFrm_loginname').type(user)
//   cy.get('#loginFrm_password').type(password)
//   cy.get('#loginFrm > fieldset > .btn').click();
    });

    
Cypress.Commands.add("LogOut", (Username) => {
cy.get('.logo > img').click();
cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').click();
cy.get('.side_account_list > :nth-child(10) > a').click();
})