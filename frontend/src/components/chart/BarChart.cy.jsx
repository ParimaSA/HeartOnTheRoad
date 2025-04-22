// cypress/component/BarChart.cy.tsx
import React from 'react'
import BarChart from './BarChart'

describe('<BarChart />', () => {
  it('mounts and renders canvas element', () => {
    cy.mount(
      <BarChart
        title="Test BarChart"
        label="value"
        labels={['A', 'B']}
        dataset={[20, 60]}
      />
    )

    // Check if canvas is rendered
    cy.get('canvas').should('exist')

    // Check if Chart.js chart was created by waiting a bit
    cy.wait(500) // give it time to draw
  })
})
