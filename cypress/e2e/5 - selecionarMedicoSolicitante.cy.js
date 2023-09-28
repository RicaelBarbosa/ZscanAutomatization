import exemple from "../fixtures/example.json";

describe('inserir texto no laudo', () => {
    it('inserir texto no laudo', () => {
            cy.visit("https://editor-homologacao.ilaudo.com");
            cy.get('input[type=email]').type('zscanrick@outlook.com')
            cy.get('input[type=password]').type('123456')
            cy.get('button[type="submit"]').click()
            cy.get('input[placeholder="Digite o nome do paciente"').type('Zscan')
            cy.wait(2000)
            cy.get('.wm-25 > .row > .col > .btn').click()
            cy.get('.col-3 > :nth-child(3) > .input-group > .form-control').click()
            cy.get('#referringPhysician_134 > :nth-child(2)').click()
        });
    })