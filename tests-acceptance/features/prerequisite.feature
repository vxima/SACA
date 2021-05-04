Feature: Como um profissional do SACA
         Eu quero obter todas as atividades atribuidas a uma criança necessárias para a proxima atividade
         Para que eu possa saber quais atividadades são pré-requisitas

############################## GUI Scenarios  ##############################
Scenario: Obter lista de metas pré-requisitas para determinada metas
    Given: Estou na pagina da criança com id 3
    And: vejo o profissional responsavel "Roberto"
    When: Solicito as metas necessárias para "Falar frase completa"
    Then: Aparece uma lista das metas pré-requisitas ["Falar sons" , "Falar silabas" , "Falar palavras"]