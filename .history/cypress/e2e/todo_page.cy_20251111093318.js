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

   it('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("ir al gym{enter}")
    cy.get('.toggle').click()
    cy.get("li").should("have.class", "completed");
    cy.get('.toggle').click()
    cy.get("li").should("not.have.class", "completed");

  })

   it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("ir al taller{enter}")
    cy.contains("li", "ir al taller").dblclick()
    cy.get('.editing [data-testid="text-input"]').clear().type("ir al super{enter}")
    cy.get('[data-testid="todo-item-label"]').should("contain.text", "ir al super")

  })
/*
   it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })

   it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })*/

})