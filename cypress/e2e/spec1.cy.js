describe(' Login User with correct email and password', () => {
  it(' Login User with correct email and password', () => {
    cy.visit('http://automationexercise.com')
     //1. Launch browser

//2. Navigate to url 'http://automationexercise.com'


//3. Verify that home page is visible successfully

//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

//5. Verify 'Login to your account' is visible

cy.contains("Login to your account").should('be.visible')
//cy.contains("Login to your account").should('have.text','')


//6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type('matteokirtadze43@gmail.com')
cy.get('[data-qa="login-password"]').type("krit12345")

//7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
//8. Verify that 'Logged in as username' is visible

//9. Click 'Delete Account' button

//10. Verify that 'ACCOUNT DELETED!' is visible
  })

})
