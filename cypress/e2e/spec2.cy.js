describe('template spec', () => {
  it('passes', () => {
     //1. launch brower
    cy.visit('http://automationexercise.com')
    //   2. Navigate to url 'http://automationexercise.com'

  //   3. Verify that home page is visible successfully


  //   4. Click on 'Signup / Login' button

  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  //   5. Verify 'Login to your account' is visible
  cy.contains('Login to your account').should('be.visible')
  //   6. Enter incorrect email address and password
  cy.get('[data-qa="login-email"]').type('matteo22@gmail.com')
cy.get('[data-qa="login-password"]').type("Matteo1998221")
  //   7. Click 'login' button
  cy.get('[data-qa="login-button"]').click()
  //   8. Verify error 'Your email or password is incorrect!' is visible
  cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})