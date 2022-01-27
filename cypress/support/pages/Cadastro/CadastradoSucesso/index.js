const el = require('./elements').ELEMENTS

class CadastradoSucesso {
    clicarCriarConta(){
        cy.contains(el.criarconta).click();
    }
    usuarioCadastrado(){
        cy.get(el.MensagemSucesso).should(el.validacaoMensagemSucesso,'Cliente criado com sucesso.');
    }
}
export default new CadastradoSucesso();