describe('pruebas de la página TODO', () => {
  
   beforeEach(() => {
    // Este código se ejecutará antes de CADA prueba
    cy.visit('https://todomvc.com/examples/react/dist/')
  });

   it('Agregar tarea a la lista', () => {
    
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
    cy.focused().clear()
    cy.focused().type("ir al super{enter}")
    cy.contains("li", "ir al super")
  })

   it('Borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("ir al campo{enter}")
    cy.contains("li", "ir al campo").trigger("mouseover")
    cy.contains("li", "ir al campo").find(".destroy").click({force:true})
    cy.contains("ir al campo").should("not.exist");

  })

  it("Filtrar tareas", () => {
  cy.visit("https://todomvc.com/examples/react/dist/");
 
  cy.get('[data-testid="text-input"]').type("ir al campo{enter}");
  cy.get('[data-testid="text-input"]').type("ir a la playa{enter}");
  cy.get('[data-testid="text-input"]').type("ir a la montaña{enter}");
 
  cy.contains("li", "ir a la playa").find(".toggle").click();

  cy.contains("a", "Completed").click();

  cy.get("[data-testid='todo-item-label']")
    .should("have.length", 1)
    .and("contain.text", "ir a la playa");

  cy.contains("a", "Active").click();

  cy.get("[data-testid='todo-item-label']")
    .should("have.length", 2)
    .each((item) => {
  cy.wrap(item).should("not.have.class", "completed");
    });

  cy.contains("a", "All").click();
  cy.get("[data-testid='todo-item-label']").should("have.length", 3);
});

})