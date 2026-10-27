Cypress.Commands.add("preencherCadastro", (usuario) => {
    console.log('Usuário recebido:', usuario);

    cy.get('#account-link').click()
    cy.get('[href="/register.html"]').click()
    cy.get('#name').type(usuario.nome)
    cy.get('#email').type(usuario.email)
    cy.get('#phone').type(usuario.phone)
    cy.get('#password').type(usuario.senha)
    cy.get('#confirm-password').type(usuario.confirmarSenha)
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

})



Cypress.Commands.add("login", (email, senha) => {
    cy.get('#email').should('be.visible');
    cy.get('#email').type(email);

    cy.get('#password').should('be.visible');
    cy.get('#password').type(senha);

    cy.get('#login-btn').click();
});
