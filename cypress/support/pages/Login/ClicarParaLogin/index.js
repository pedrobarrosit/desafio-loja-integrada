const el = require('./elements').ELEMENTS

class ClicarParaLogin {
    clicarProsseeguir(){
        cy.get(el.btnprosseguir).click()
            .should(el.validacaoprosseguir, 'Prosseguir')
    }
}
export default new ClicarParaLogin();