const el = require('./elements').ELEMENTS

class PreencherCadastro {
    preenchendoCadastro(){
        cy.get(el.idconfirmacaoemail).type('pedrotest@gmail.com')
            .should(el.validacaoemail,'pedrotest@gmail.com');
        cy.get(el.senha).type('pedro123');
        cy.get(el.confirmacaosenha).type('pedro123');
        cy.get(el.checkpf).click();
        cy.get(el.nome).type('Pedro Jorge QA')
            .should(el.validacaonome,'Pedro Jorge QA');
        cy.get(el.cpf).type('968.076.300-50')
            .should(el.validacaocpf,'968.076.300-50');
        cy.get(el.celular).type('81889966326')
            .should(el.validacaocelular,'81889966326');
        cy.get(el.telefone).type('8133966326')
            .should(el.validacaotelefone,'8133966326');
        cy.get(el.sexo).select('Masculino')
        .should(el.validacaosexo,'Masculino');
        cy.get(el.datadenascimento).type('20021993')
            .should(el.validacaodatadenascimento,'20021993');
        cy.get(el.cep).type('53080670')
            .should(el.validacaocep,'53080670');
        cy.get(el.endereco).type('Rua dos Testes Felizes')
            .should(el.validacaoendereco,'Rua dos Testes Felizes');
        cy.get(el.numeroresidencial).type('20')
            .should(el.validacaonumeroresidencial,'20');
        cy.get(el.complemento).type('Casa 244')
            .should(el.validacaocomplemento,'Casa 244');
        cy.get(el.referencia).type('Próximo a qualidade')
            .should(el.validacaoreferencia,'Próximo a qualidade');
        cy.get(el.bairro).should(el.validacaobairro,'Rio Doce');
        cy.get(el.cidade).should(el.validacaocidade,'Olinda');
        cy.get(el.estado).select('Pernambuco')
            .should(el.validacaoestado,'Pernambuco');
    }
}
export default new PreencherCadastro();