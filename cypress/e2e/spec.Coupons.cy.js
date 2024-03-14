describe('Teste de api Cupons', () => {


  let token
  beforeEach(() => {
    cy.token('admin_ebac', '@admin!&b@c!2022').then(tkn => {
      token = tkn
    })
  })

  it('Listar coupons cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
      headers: {
          Authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
      },
  }).then((response) => {
      expect(response.status).to.equal(200);
  });
})
})

