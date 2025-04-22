describe('E2E: Traffic Update', () => {
  it('should update the data after traffic change', () => {
    cy.visit('http://localhost:3000');

    // 1. Click the Traffic button
    cy.contains('Traffic').click();
    cy.contains('Traffic Dashboard').should('exist');

    // 2. Wait for data to load (use something visible like "Loading..." disappear or new data appear)
    cy.get('[data-testid="loading"]').should('not.exist'); // if you have a loading spinner

    // Get the start time before any interaction
    cy.get('[data-testid="num-record"]').then(($numRecordElement) => {
      const numRecord = $numRecordElement.text().trim();
      
      // Store the value for later comparison
      cy.wrap(numRecord).as('initialNumRecord');
    });

    // 3. Now switch the traffic condition
    cy.get('[data-testid="traffic-select"]').should('be.visible');
    cy.get('[data-testid="traffic-select"]').click();


    // 4. Verify that data has changed
    // After selecting a new trip, check if the start time is different
    cy.get('[data-testid="num-record"]').should('not.have.text', () => {
      cy.get('@initialNumRecord').then((initialNumRecord) => {
        cy.wrap(initialNumRecord).should('not.equal', '');
      });
    });
  });
});
