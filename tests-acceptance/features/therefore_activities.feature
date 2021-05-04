Feature: Como um profissional do SACA
         Eu quero obter todas as atividades cadastradas
         Então eu posso ordenar as atividades cadastradas pelo nível de dificuldade 
         Para que eu possa identificar atividades do mesmo nível

############################## GUI Scenarios  ##############################
Scenario: Obter tabela de taferas ordenada de acordo com o nível de dificulade
Given Estou na pagina de registro de atividades
Given Vejo a tabela de atividades registradas
When Clico no campo dificuldade da tabela
Then A tabela é ordenada de acordo com o nível de dificuldade em ordem crescente