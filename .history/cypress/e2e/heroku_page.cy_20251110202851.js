describe('pruebas de la página Heroku', () => {
  it('hacer login', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })
})
