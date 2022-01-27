const el = require('./elements').ELEMENTS

class PaginaProdutos {
    clicarStore(){
        cy.get(el.qaStore).should(el.validacaoqaStore,'QA Store Desafio')
            .click();
    }
}
export default new PaginaProdutos();