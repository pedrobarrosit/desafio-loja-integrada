const el = require('./elements').ELEMENTS

class PreencherEmail {
    preenchendoEmail(){
        cy.get(el.id).type('pedrotest@gmail.com')
        .should(el.email, 'pedrotest@gmail.com');
    
    }
    clicandoCadastrar(){
        cy.contains(el.btncadastrar).click()
            .should(el.validação,'botao principal');
    }
   }   
export default new PreencherEmail();