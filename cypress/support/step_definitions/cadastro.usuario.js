/// <reference types="cypress" />

import AcessoPagina from "../pages/AcessoPagina";
import AcessoCadastro from "../pages/Cadastro/AcessoCadastro";
import PreencherEmail from "../pages/Cadastro/PreencherEmail";
import PreencherCadastro from "../pages/Cadastro/PreencherCadastro";
import CadastradoSucesso from "../pages/Cadastro/CadastradoSucesso";

/* global Then, When, Given */

Given('o cliente esta navegando na loja QA Store Desafio', () => {
    AcessoPagina.acessarPagina();
    AcessoPagina.validarPagina();
})

When('clica para realizar o cadastro', () => {
    AcessoCadastro.acessarPaginaCadastro();
})

And('informa o email para cadastro', () => {
    PreencherEmail.preenchendoEmail();
    PreencherEmail.clicandoCadastrar();    
})

And('preenche todos os dados do cadastro', () => {
    PreencherCadastro.preenchendoCadastro();
})

Then('o sistema realiza o cadastro com sucesso', () => {
    CadastradoSucesso.clicarCriarConta();
    CadastradoSucesso.usuarioCadastrado();
})