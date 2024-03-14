const perfil = require('../fixtures/perfil.json')

describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br')
  });


  it('Deve realizar login com sucesso', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Bigas testes maneiros (não é Bigas testes maneiros? Sair)')
  });
})