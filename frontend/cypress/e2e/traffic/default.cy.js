describe('E2E: Traffic default', () => {
  it('should automatically visualize the data with normal traffic', () => {
    cy.visit('http://localhost:3000/traffic');
    cy.contains('Traffic Dashboard').should('exist');

    // 2. Wait for data to load (use something visible like "Loading..." disappear or new data appear)
    cy.get('[data-testid="loading"]').should('not.exist'); // if you have a loading spinner

    // 3. check components
    cy.get('[data-testid="traffic-box"]').should('exist'); 

    cy.get('[data-testid="histogram"]').should('exist');

    const expectedTitle1 = 'Heart Rate Histogram';
    cy.get('.apexcharts-title-text')
      .should('exist')
      .and('contain.text', expectedTitle1);
    cy.get('.apexcharts-bar-series').should('exist');

    const expectedTitle2 = 'Heart Rate Histogram';
    cy.get('.apexcharts-title-text')
      .should('exist')
      .and('contain.text', expectedTitle2);
    cy.get('.apexcharts-bar-series').should('exist');
    
    
  });
});
  