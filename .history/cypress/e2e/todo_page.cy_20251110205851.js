describe('pruebas de la página TODO', () => {
  it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })
  // añadir todas las tareas aquí
  
})