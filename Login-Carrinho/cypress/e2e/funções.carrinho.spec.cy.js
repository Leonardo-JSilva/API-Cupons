
import produtosPage from "../support/page-obecjts/produtos.page";

describe('Funcionalidades carrinho', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    produtosPage.addProdutosCarrinho('M', 'Red', 1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    produtosPage.addProdutosCarrinho('S', 'Black', 1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    produtosPage.addProdutosCarrinho('36', 'Blue', 1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('h2').should('contain' , 'Total no carrinho')
  })
})