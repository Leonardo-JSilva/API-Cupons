describe('Funcionalidades do Cadastro e login', () => {

  

  it('Deve cadastrar usuario', () => {
cy.request({
  method: 'POST',
  url: 'usuarios',
  body: {
    "nome": "Eron Sales",
  "email": "EronCR7@gmail.com.br",
  "password": "teste",
  "administrador": "true"
  }

}).should((response) =>{
  expect(response.status).to.equal(200)
})

  })
})
    