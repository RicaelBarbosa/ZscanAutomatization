import exemple from "../fixtures/example.json";

describe('inserir texto no laudo', () => {
    it('inserir texto no laudo', () => {
            cy.visit("https://editor-homologacao.ilaudo.com");
            cy.get('input[type=email]').type(usuarioSenha.dados.email)
            cy.get('input[type=password]').type(usuarioSenha.dados.senha)
            cy.get('button[type="submit"]').click()
            cy.get('input[placeholder="Digite o nome do paciente"').type('Zscan')
            cy.wait(2000)
            cy.get('.wm-25 > .row > .col > .btn').click()
            cy.get('.col-3 > :nth-child(3) > .input-group > .form-control').click()
            cy.get('#referringPhysician_134 > :nth-child(2)').click()
            cy.get('.rdw-editor-main').invoke('css', 'white-space', 'pre')
            cy.get('.rdw-editor-main').each((elemento, index) => {
                if(index == 0){
                    elemento.text(exemple.campos.campo1)
                }else if(index == 1){
                    elemento.text(exemple.campos.campo2)
                }else {
                    elemento.text(exemple.campos.campo3)
                }
            })
        });
    })