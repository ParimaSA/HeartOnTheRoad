describe('E2E: Analytic', () => {
    it('should automatically show the summary', () => {
      cy.visit('http://localhost:3000/analytic');
      cy.contains('Analytic').should('exist');
  
      // 2. Wait for data to load (use something visible like "Loading..." disappear or new data appear)
      cy.get('[data-testid="loading"]').should('not.exist'); // if you have a loading spinner
  
      // 3. check components
      cy.get('[data-testid="analytic-box"]').should('exist'); 
      cy.get('[data-testid="pie-chart"]').should('exist'); 
      cy.get('[data-testid="scatter"] canvas').should('exist');
      cy.get('[data-testid="bar-chart"] canvas').should('exist');
      
    });
  });
    