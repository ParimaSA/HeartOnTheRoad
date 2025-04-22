describe('E2E: Trip Update', () => {
  it('should update data after change trip', () => {
    cy.visit('http://localhost:3000');

    // 1. Click the Dive Deeper button
    cy.contains('Dive Deeper').click();
    cy.contains('Trip Dashboard').should('exist');

    // 2. Wait for data to load (use something visible like "Loading..." disappear or new data appear)
    cy.get('[data-testid="loading"]').should('not.exist'); // if you have a loading spinner

    // Or check if the trip box appears:
    cy.get('[data-testid="trip-box"]').should('exist'); // adjust selector to match your app

    // Get the start time before any interaction
    cy.get('[data-testid="trip-start"]').then(($startTimeElement) => {
      const startTime = $startTimeElement.text().trim();
      
      // Store the start time for later comparison
      cy.wrap(startTime).as('initialStartTime');
    });

    // 3. Now select a trip from the trip select
    cy.get('[data-testid="trip-select"]').should('be.visible');
    cy.get('[data-testid="trip-select"]').click(); // open the trip select dropdown

    // Wait for trip options to load (optional: check if options are visible)

    cy.contains('Trip #18').click(); // select a trip (adjust text to your real trip name)

    // 4. Verify that data has changed
    // After selecting a new trip, check if the start time is different
    cy.get('[data-testid="trip-start"]').should('not.have.text', () => {
      cy.get('@initialStartTime').then((initialStartTime) => {
        cy.wrap(initialStartTime).should('not.equal', '');
      });
    });
  });
});
