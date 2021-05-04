Feature: Como um profissional do SACA
         Eu quero obter todas as atividades atribuidas a uma criança que precisam que dependem de uma atividade especifica para serem cumpridas
         So that I can manage their learning goals
         Para que eu possa identificar quantas atividades dependem de outra

############################## GUI Scenarios  ##############################
Scenario: Obter lista de quais atividades tem como pré-requisito "Desenhar ponto"
Given Estou na pagina da criança "Ana"
And vejo o profissional responsavel "Jucelina"
When Solicito as atividades que tem "Desenhar ponto" como pré-requisito
Then Aparece uma lista com as atividades subsequentes ["Desenhar linha" , "Desenhar triangulo" , "Desenhar quadrado"]

Scenario: Obter lista de quais atividades tem como pré-requisito a atividade "Desenhar ponto" porém nenhuma atividade depende dela
Given Estou na pagina da criança "Jose"
And vejo o profissional responsavel "Roberto"
When Solicito as atividades que tem "Desenhar ponto" como pré-requisito
Then Aparece uma lista com uma linha indicando que "Nenhuma atividade dependente"

Scenario: Obter lista de quais atividades tem como pré-requisito uma atividade não cadastrada
Given Estou na pagina da criança "Ana"
And vejo o profissional responsavel "Jucelina"
When Solicito as atividades que tem "Desenhar circulo" como pré-requisito
Then Aparece uma lista com uma linha indicando que "Atividade não cadastrada"