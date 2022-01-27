Feature: Cadastro de Usuario

    Usuário deseja realizar cadastro no site para realizar suas compras

    Scenario: Cadastrar usuario valido no site
    Given o cliente esta navegando na loja QA Store Desafio
    When clica para realizar o cadastro
    And informa o email para cadastro
    And preenche todos os dados do cadastro
    Then o sistema realiza o cadastro com sucesso