const el = require('./elements').ELEMENTS

class AcessoPagina {
    acessarPagina(){
        cy.visit('');
    }
    validarPagina(){
        cy.get(el.classe).should('be.visible');
    }
}
export default new AcessoPagina();


