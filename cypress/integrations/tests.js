describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3001')

      cy.get("input.name").type("Alexander Besse")

      cy.get("input[type='checkbox']:nth-of-type(1)").check();
      cy.get("input[type='checkbox']:nth-of-type(2)").check();
      cy.get("input[type='checkbox']:nth-of-type(3)").check();

      cy.get("button[type='submit']").click();
    })
})