/// <reference types="cypress"/>

describe('Lojinha', () =>{
    it('Editar Produto',() =>{
        cy.visit('http://165.227.93.41/lojinha-web/v2/');
        cy.get('#usuario').focus().type('admin');
        cy.get('#senha').focus().type('admin');
        cy.get('.btn').click();

        cy.get('[rev="143087"] > .title > a').click();
        cy.get('#produtonome').should('have.value','notebook lenovo');
        
    });
});