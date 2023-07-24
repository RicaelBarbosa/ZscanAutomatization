describe ('Preencher login e senha', () => {
    it('preencher login e senha', () => {
        cy.visit("https://editor-homologacao.ilaudo.com");
        cy.get('input[type=email]').type('zscanrick@outlook.com')
        cy.get('input[type=password]').type('zs114019')
        cy.get('button[type="submit"]').click()
    });

})