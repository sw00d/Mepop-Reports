context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('localhost:2999')
  })

  it('Should login', () => {
    // Alias the route to wait for its response
    cy.get('.test_target_email')
      .type('basic@mepopreports.com').should('have.value', 'basic@mepopreports.com')
    cy.get('.test_target_password')
      .type('abcd1234!!').should('have.value', 'abcd1234!!')
    cy.get('.test_target_signinBtn').click()
   
  })
})
