import { faker } from '@faker-js/faker';


describe('Funcionalidade: Cadastro', () => {

  let token
  beforeEach(() => {
    cy.token('admin_ebac', '@admin!&b@c!2022').then(tkn => {
      token = tkn
    })
  })

  it('Cadastra coupn com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
      headers: {
        Authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
        ContentType: 'application/json',
      },
      body: {
        "code": faker.string.alphanumeric(8),
        "discount_type": "fixed_product",
        "descripition": "coupon de desconto"

      }

    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })
})


