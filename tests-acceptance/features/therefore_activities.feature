Feature: Como um profissional do SACA
         Eu quero obter todas as crinças cadastradas no sistema 
         para então pesquisar pelo nome.

############################## GUI Scenarios  ##############################
Scenario: Obter crianças com nome "Ana"
Given Estou na página de descrição das crianças
Given Vejo a tabela com todas as crianças cadastradas
Given Quero obter todas as crianças cadastradas com nome "Ana"
When Digito "Ana" na barra de pesquisa
Then Aparece uma tabela com todas as crianças com nome "Ana"

