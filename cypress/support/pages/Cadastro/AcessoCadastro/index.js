const el = require('./elements').ELEMENTS

class AcessoCadastro {
    acessarPaginaCadastro(){
        cy.get(el.btnbemvindo).click()
         .should(el.validação,'bem-vindo cor-secundaria');
    }
}
export default new AcessoCadastro();