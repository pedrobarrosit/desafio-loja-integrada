const el = require('./elements').ELEMENTS

class SelecaoProdutos {
    selecionarProdutos(){
        cy.get(el.clicarPrimeiroProduto).click();
        cy.get(el.btncomprar).should(el.validacaopaginacomprar,'Comprar');
        cy.get(el.btncomprar).click();
        cy.get(el.paginacarrinho).should(el.validacaopaginacarrinho,'Carrinho');
        cy.get(el.btncontinuarcomprando).scrollIntoView().click()
            .should(el.validacaobtncontinuarcomprando,'Continuar comprando');
            
    }

    selecionarOutroProduto(){
        cy.get(el.qaStore).should(el.validacaoqaStore,'QA Store Desafio');
        cy.get(el.clicarSegundoProduto)
            .scrollIntoView().click();
        cy.get(el.btncomprar).should(el.validacaopaginacomprar,'Comprar');
        cy.get(el.btncomprar).click();
        cy.get(el.paginacarrinho).should(el.validacaopaginacarrinho,'Carrinho');
    }
    validacaoCep(){
        cy.get(el.calcularfrete).clear().type('83709150')
            .should(el.validacaocalcularfrete,'83709150');    
    }
    removerProduto(){
        cy.get(el.clicarlixeira).click();
        cy.get(el.removidosucesso)
            .should(el.validacaoremovidosucesso, 'Produto removido no carrinho.');
        cy.get(el.checkterceiraopcao).last().click();
    }

    cupomInvalido(){
        cy.get('body').then((body) => {
            if (body.find(el.btnapagarcupom).length > 0) {
                cy.get(el.btnapagarcupom).click();

            }
        }

    )}

    cupomInexistente(){
        cy.get('body').then((body) => {
            if (body.find(el.btnapagarcupom).length > 0) {
                cy.get(el.btnapagarcupom).click();
            };
            cy.get(el.campocupom).type('INVALIDO');
            cy.get(el.btnusarcupom)
                .should(el.validacaobtnusarcupom,'Usar cupom')
                    .click();

            }
        
    )}

    adiocionarCupom(){
        cy.get('body').then((body) => {
            if (body.find(el.btnapagarcupom).length > 0) {
                cy.get(el.btnapagarcupom).click();
            }
        });
        cy.get(el.campocupom).type('FRETEGRATIS');
        cy.get(el.btnusarcupom)
            .should(el.validacaobtnusarcupom,'Usar cupom')
                .click();
        cy.get(el.cupomfretegratisaplicado)
            .should(el.validacaocupomfretegratisaplicado,'frete gratis');
        cy.get(el.valortotal, { timeout: 10000 })
            .should(el.validacaovalortotal,'R$115,10');
        cy.get(el.btnapagarcupom).click();
        cy.get(el.campocupom).should(el.campocupomvazio,'30REAIS');
        cy.get(el.campocupom).type('10OFF');
        cy.get(el.btnusarcupom)
            .should(el.validacaobtnusarcupom,'Usar cupom')
                .click();
        cy.get(el.descontoaplicado)
            .should(el.validacaodescontoaplicado,'10%');
        cy.get(el.btnapagarcupom, { timeout: 10000 })
            .should('be.visible').click();
        cy.get(el.campocupom).should(el.campocupomvazio,'10OFF');
        cy.get(el.campocupom).type('30REAIS');
        cy.get(el.btnusarcupom)
            .should(el.validacaobtnusarcupom,'Usar cupom')
                .click();
        cy.get(el.descontoaplicado)
            .should(el.validacaodescontoaplicado,'R$30,00');
        cy.get(el.valortotal).
            should(el.validacaovalortotal,'R$85,10');
    }
    clicarFinalizarCompra(){
        cy.get(el.btnfinalizarcompra).click();

    }
}
export default new SelecaoProdutos();