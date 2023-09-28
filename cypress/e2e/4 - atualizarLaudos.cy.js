describe('acessar-site', () => {
    it('acessar o site', () => {
        cy.visit("https://editor-homologacao.ilaudo.com");
        cy.title().should('eq', 'iLaudo Editor - Sistema de criação de laudos')
        cy.get('input[type=email]').type(usuarioSenha.dados.email)
        cy.get('input[type=password]').type(usuarioSenha.dados.senha)
        cy.get('button[type="submit"]').click()
        cy.get('.nav > .btn').click()

    });
});