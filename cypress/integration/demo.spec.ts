describe('Demo Test', () => {
    it('Should login into an application', () => {
        cy.visitLoginpage()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

        cy.login(username, password)
        })
    })
})