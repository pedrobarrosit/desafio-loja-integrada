const el = require('./elements').ELEMENTS

class LogadoSucesso {
    sucessoLogin(){
        cy.get(el.btnola)
            .should(el.validacaobtnola, 'botao secundario pequeno dropdown-toggle');
    }
}
export default new LogadoSucesso();