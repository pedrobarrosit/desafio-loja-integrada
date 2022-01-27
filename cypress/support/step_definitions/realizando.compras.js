/// <reference types="cypress" />

import AcessoPagina from "../pages/AcessoPagina";
import AcessoCadastro from "../pages/Cadastro/AcessoCadastro";
import LoginValido from "../pages/Login/LoginValido";
import ClicarParaLogin from "../pages/Login/ClicarParaLogin";
import LogadoSucesso from "../pages/Login/LogadoSucesso";
import PaginaProdutos from "../pages/RealizandoCompras/PaginaProdutos";
import SelecaoProdutos from "../pages/RealizandoCompras/SelecaoProdutos";
import RealizarPagamento from "../pages/RealizandoCompras/RealizarPagamento";

/* global Then, When, Given */

Given('que o cliente esteja navegando na loja QA Store Desafio logado', () => {
    AcessoPagina.acessarPagina();
    AcessoPagina.validarPagina();
    AcessoCadastro.acessarPaginaCadastro();
    LoginValido.preenchendoEmailLogin();
    LoginValido.preenchendoSenhaLogin();
    ClicarParaLogin.clicarProsseeguir();
    LogadoSucesso.sucessoLogin();   
})

When('estiver na pagina de produtos', () => {
    PaginaProdutos.clicarStore();
})

And('selecionar o produto para comprar', () => {
    SelecaoProdutos.selecionarProdutos();
    SelecaoProdutos.selecionarOutroProduto();
    SelecaoProdutos.validacaoCep();
    SelecaoProdutos.removerProduto();
    SelecaoProdutos.adiocionarCupom();
    cy.wait(5000);
    SelecaoProdutos.clicarFinalizarCompra();
})

And('adicionando cupom de desconto', () => {
    SelecaoProdutos.adiocionarCupom();
    SelecaoProdutos.clicarFinalizarCompra();
})

And('adicionando cupom de desconto invalido', () => {
    SelecaoProdutos.cupomInvalido();
})

And('adicionando Cupom de desconto inexistente', () => {
    SelecaoProdutos.cupomInexistente();
})

And('realiza o pagamento com cartão de credito', () => {
    RealizarPagamento.validandoCampos();  
})

Then('finalizando a compra com sucesso', () => {
     RealizarPagamento.validandoCampos(); 
})

Then('valide a mensagem de Cupom não encontrado', () => {
    SelecaoProdutos.cupomInvalido();
})

Then('valide a mensagem de Cupom não informado', () => {
    SelecaoProdutos.cupomInexistente(); 
})