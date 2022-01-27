/// <reference types="cypress" />

import AcessoCadastro from "../pages/Cadastro/AcessoCadastro";
import AcessoPagina from "../pages/AcessoPagina";
import LoginValido from "../pages/Login/LoginValido";
import ClicarParaLogin from "../pages/Login/ClicarParaLogin";
import LogadoSucesso from "../pages/Login/LogadoSucesso";

/* global Then, When, Given */

Given('o cliente esteja na pagina da loja QA Store Desafio', () => {
    AcessoPagina.acessarPagina();
    AcessoPagina.validarPagina();
})

When('preenche os dados de login com usuario valido',() => {
    AcessoCadastro.acessarPaginaCadastro();
    LoginValido.preenchendoEmailLogin();
    LoginValido.preenchendoSenhaLogin();
})

And('clica para realizar login', () => {
    ClicarParaLogin.clicarProsseeguir();
})

Then ('o sistema realiza o login com sucesso', () => {
    LogadoSucesso.sucessoLogin();
})