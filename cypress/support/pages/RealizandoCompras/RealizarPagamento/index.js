const el = require('./elements').ELEMENTS

class RealizarPagamento {
    validandoCampos(){
        cy.get(el.codigocupom).should(el.validacaocodigocupom,'30REAIS');
        cy.get(el.resultadocupom)
            .should(el.validacaoresultadocupom, 'R$30,00');
        cy.get(el.valortotal).should(el.validacaovalortotal, 'R$85,10');
        cy.get(el.checkendereco).first().click();
        cy.get(el.checkendereco).should(el.validacaocheckendereco);
        cy.get(el.checkformaenvio).should(el.validacaocheckformaenvio);
        cy.get(el.selecaocartaodecredito).click();
        cy.get(el.validacaoimagemcartao).should('be.visible');
        cy.get(el.numerocartao).type('4916 9587 6197 8356');
        cy.get(el.datavencimentocarta).type('11/23');
        cy.get(el.titularcartao).type('Marcos Almeida Gonçalves');
        cy.get(el.cvvcartao, {timeout: 1000}).type('230');
        cy.get(el.check1)
            .should(el.validacaocheck1);
        cy.get(el.check2)
            .should(el.validacaocheck2);
        cy.get(el.seletordeparcelas,{timeout: 3000} ).select('1');
        cy.get(el.validacaovalorfinal).should('be.visible','R$85,10');
        cy.get(el.btnfinalizarcompra)
            .should(el.validacaobtnfinalizarcompra,'Finalizar Compra')
                .click();
        cy.get('#modalAlerta > .modal-footer > .botao')
            .should('be.visible','Fechar').click();
        cy.get(el.mensagemSucesso).should('be.visible');      
     }
    }
export default new RealizarPagamento();