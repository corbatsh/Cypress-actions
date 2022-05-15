describe('Feedback test', () => {
  it('Should submit feedback form', () => {
    cy.visitFeedbackpage()
    cy.submitFeedback(
      'Peter',
      'test@email.com',
      'My Subject',
      'This is my awesome message!'
    )
  })
})
