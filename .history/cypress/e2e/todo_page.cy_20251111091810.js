describe('pruebas de la página TODO', () => {
  /* ejemplo 
  it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  }) */


   it('Agregar tarea a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-label"]').contains('comprar el pan')
  })

   it('Marcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("ir al gym{enter}")
    cy.get('.toggle').click()
    cy.get("li").should("have.class", "completed");
   
  })
/*
   it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })

   it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })

   it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })

   it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })*/

})