Feature: Realizar compras utilizando cupons

    Usuário como cliente ja possui cadastro e desejo efetuar compras com sucesso independente da forma de pagamento utitlizando cupons de desconto

    Scenario: Efetuar compra com cupom de desconto válido
    Given que o cliente esteja navegando na loja QA Store Desafio logado
    When estiver na pagina de produtos
    And selecionar o produto para comprar 
    And adicionando cupom de desconto
    And realiza o pagamento com cartão de credito
    Then finalizando a compra com sucesso
    
    Scenario: Efetuar compra com cupom de desconto inválido
    Given que o cliente esteja navegando na loja QA Store Desafio logado
    When estiver na pagina de produtos
    And selecionar o produto para comprar 
    And adicionando cupom de desconto invalido
    Then valide a mensagem de Cupom não encontrado
    
    Scenario: Efetuar compra com cupom de desconto inexistente
    Given que o cliente esteja navegando na loja QA Store Desafio logado
    When estiver na pagina de produtos
    And selecionar o produto para comprar 
    And adicionando Cupom de desconto inexistente
    Then valide a mensagem de Cupom não informado

    Scenario: Efetuar compra sem cupom de desconto e pagamento em forma de cartão de crédito
    Given que o cliente esteja navegando na loja QA Store Desafio logado
    When estiver na pagina de produtos
    And selecionar o produto para comprar 
    And realiza o pagamento com cartão de crédito
    Then finalizando a compra com sucesso


