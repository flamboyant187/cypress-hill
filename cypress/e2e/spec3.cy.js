describe('Register User with existing email', () => {
  it('Register User with existing email', () => {
    cy.visit('http://automationexercise.com')
//     1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'

// 3. Verify that home page is visible successfully

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'New User Signup!' is visible
cy.contains('New User Signup!').should('be.visible')
// 6. Enter name and already registered email address
cy.get('[data-qa="signup-name"]').type('mattias')
cy.get('[data-qa="signup-email"]').type("matteo2@gmail.com")
// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
// 8. Verify error 'Email Address already exist!' is visible
cy.contains('Email Address already exist!').should('be.visible')
  })
})