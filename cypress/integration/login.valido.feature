Feature: Realizar Login

    Usuário como cliente cadastrado deseja realizar login para efetuar as compras
    
    Scenario: Login de usuario cadastrado
    Given o cliente esteja na pagina da loja QA Store Desafio
    When preenche os dados de login com usuario valido
    And clica para realizar login
    Then o sistema realiza o login com sucesso