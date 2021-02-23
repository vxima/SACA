Cenario: Obter lista de metas pré-requisitas para determinada metas
    Given: estou na pagina da criança "Jonathan"
    And: vejo o profissional responsavel "Roberto"
    When: Solicito as metas necessárias para "Falar frase completa"
    Then: Aparece uma lista das metas pré-requisitas ["Falar sons" , "Falar silabas" , "Falar palavras"]

Cenario: Obter lista de quais metas tem como pré-requisito a meta atual
    Given: estou na pagina da criança "Jonathan"
    And: vejo o profissional responsavel "Roberto"
    When: Solicito as metas que tem "Falar sons" como pré-requisito
    Then: Aparece uma lista com as metas subsequentes ["Falar silabas" , "Falar palavras" , "Falar frase completa"]

Cenario: Ordenar as metas por grau de necessidade
    Given: estou na pagina da criança "Jonathan"
    And: vejo o profissional responsavel "Roberto"
    When: Solicito a lista de metas ordenada por grau de necessidade
    Then: Aparece a lista das metas em ordem decrescente de quantidade de pre-requisitos 

Cenario: Obter porcentagem das metas pré-requisitos completas  para a próxima meta
    Given: estou na pagina da criança "Jonathan"
    And: vejo o profissional responsavel "Roberto"
    When: Solitico porcentagem atingida para a meta "Falar palavras"
    Then: O sistema retorna "50%"
    
Cenario: Obter grafo das metas com linhas indicando quais metas sao requisitas
    Given: estou na pagina da criança "Jonathan"
    And: vejo o profissional responsavel "Roberto"
    When: Solicito grafo das metas 
    Then: Sistema apresenta representaçao grafica do grafo com as metas e seus requisitos