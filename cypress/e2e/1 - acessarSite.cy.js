describe('acessar-site', () => {
    it('acessar o site', () => {
        cy.visit("https://editor-homologacao.ilaudo.com/");
        cy.title().should('eq', 'iLaudo Editor - Sistema de criação de laudos')
    });
});