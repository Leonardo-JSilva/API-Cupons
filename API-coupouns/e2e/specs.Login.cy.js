describe('Login', () => {


  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
        "email": "admin_ebac",
        "password": "@admin!&b@c!2022"
      }
    }).then((response) =>{
      cy.log(response.body.authorization)
      expect(response.status).to.equal(200)
    })
  })
})