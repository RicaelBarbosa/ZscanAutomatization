describe('selecionar paciente pelo nome', () => {
it('selecionar paciente pelo nome', () => {
        cy.visit("https://editor-homologacao.ilaudo.com");
        cy.get('input[type=email]').type('zscanrick@outlook.com')
        cy.get('input[type=password]').type('123456')
        cy.get('button[type="submit"]').click()
        cy.get('input[placeholder="Digite o nome do paciente"').type('Zscan')
        cy.wait(1500)
        cy.get('.wm-25 > .row > .col > .btn').click()
    })
})
