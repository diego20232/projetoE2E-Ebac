import { faker } from "@faker-js/faker";

describe('Teste End-to-End', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });



    it('Fluxo Login - E2E', () => {
        const senha = faker.internet.password({ length: 10 })

        const usuario = {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            senha: senha,
            confirmarSenha: senha,
        }


        cy.preencherCadastro(usuario)
        cy.get('#account-link').click()
        cy.contains('Faça seu login para explorar seu universo literário.').should('be.visible')


        cy.login(usuario.email, usuario.senha)
        cy.contains('Bem-vindo ao seu espaço pessoal no Hub de Leitura')
            .should('be.visible');


    });





});