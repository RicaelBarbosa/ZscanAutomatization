describe('acessar-site', () => {
    it('acessar o site', () => {
        cy.visit("https://editor-homologacao.ilaudo.com");
        cy.title().should('eq', 'iLaudo Editor - Sistema de criação de laudos')
        cy.get('input[type=email]').type('zscanrick@outlook.com')
        cy.get('input[type=password]').type('123456')
        cy.get('button[type="submit"]').click()
        cy.get('.nav > .btn').click()
        cy.wait(1000)

        cy.get('.form-control:eq(1)').select(0)
        cy.wait(2000)
        cy.get('table').within(() => {
            cy.get('td').should('contain', "Masculino")
            cy.get('td').should('contain', "Feminino")
        })

        cy.get('.form-control:eq(1)').select(1)
        cy.wait(1500)
        cy.get('table').within(() => {
            cy.get('td').should('contain', "Feminino")
        })

        cy.get('.form-control:eq(1)').select(2)
        cy.wait(2000)
        cy.get('table').within(() => {
            cy.get('td').should('contain', "Masculino")
        })
            



    });
});