describe('E2E: Trip Default', () => {
  it('should automatically show the lastest trip data', () => {
    cy.visit('http://localhost:3000/trip');
    cy.contains('Trip Dashboard').should('exist');

    // 2. Wait for data to load (use something visible like "Loading..." disappear or new data appear)
    cy.get('[data-testid="loading"]').should('not.exist'); // if you have a loading spinner

    // 3. check components
    cy.get('[data-testid="trip-box"]').should('exist'); 
    cy.get('[data-testid="pie-chart"]').should('exist'); 
    cy.get('[data-testid="line-chart"] canvas').should('exist');
    cy.get('[data-testid="map"] div').should('exist');

    cy.get('[data-testid="trip-start"]').invoke('text').should('exist');


    
  });
});
  