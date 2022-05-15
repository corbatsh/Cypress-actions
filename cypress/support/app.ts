declare namespace Cypress {
  interface Chainable {
    /**
     * Navigates to the homePage of our application
     */
    visitHomepage(): Chainable<Element>

    /**
     * Navigates to the loginPage of our application
     */
    visitLoginpage(): Chainable<Element>

    /**
     * Navigates to the feedbackPage of our application
     */
    visitFeedbackpage(): Chainable<Element>

    /**
     * @param seconds - how many seconds should the execution wait
     */
    waitForSeconds(seconds: number): Chainable<Element>
  }
}

Cypress.Commands.add('visitHomepage', () => {
  cy.visit('http://zero.webappsecurity.com')
})

Cypress.Commands.add('visitLoginpage', () => {
  cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackpage', () => {
  cy.visit('http://zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('waitForSeconds', (seconds) => {
  cy.wait(seconds * 1000)
})
