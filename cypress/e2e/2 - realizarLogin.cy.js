import usuarioSenha from  "../fixtures/usuarioSenha.json"

describe ('Preencher login e senha', () => {
    it('preencher login e senha', () => {
        cy.visit("https://editor-homologacao.ilaudo.com");
        cy.get('input[type=email]').type(usuarioSenha.dados.email)
        cy.get('input[type=password]').type(usuarioSenha.dados.senha)
        cy.get('button[type="submit"]').click()
    });

})