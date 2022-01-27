const el = require('./elements').ELEMENTS

class LoginValido {
    preenchendoEmailLogin(){
        cy.get(el.emailLogin,{ timeout: 1000}).type('pedrotest@gmail.com')
            .should(el.validacaoemailLogin,'pedrotest@gmail.com');   
    }
    preenchendoSenhaLogin(){
        cy.get(el.senhaLogin).type('pedro123')
            .should(el.validacaosenhaLogin,'pedro123');
    }
}
export default new LoginValido();