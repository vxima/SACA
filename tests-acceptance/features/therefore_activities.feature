Feature: Como um profissional do SACA
         Eu quero obter todas as atividades atribuidas a uma criança que dependem de uma atividade especifica para serem cumpridas
         Para que eu possa identificar quantas e quais atividades dependem de outra

############################## GUI Scenarios  ##############################
Scenario: Obter lista de quais atividades tem como pré-requisito "Desenhar ponto"
Given Estou na pagina da criança com id "1"
Given vejo o profissional responsavel "Jucelina" e o nome da criança "Ana"
Given Seleciono o link "Atividades conseguintes"
When Solicito as atividades que tem "Desenhar ponto" como pré-requisito
Then Aparece a lista dos Id's, titulos e descrições das atividades conseguintes, "2" "Desenhar linha" "A criança deverá desenhar um linha", "3" "Desenhar triangulo" "A criança deverá desenhar um triangulo", "4" "Desenhar quadrado" "A criança deverá desenhar um quadrado" em uma ordem qualquer

Scenario: Obter lista de quais atividades tem como pré-requisito a atividade "Desenhar ponto" porém nenhuma atividade depende dela
Given Estou na pagina da criança com id "2"
Given vejo o profissional responsavel "Roberto" e o nome da criança "Jose"
Given Seleciono o link "Atividades conseguintes"
When Solicito as atividades que tem "Desenhar ponto" como pré-requisito
Then Aparece uma lista com uma linha verde indicando que "Nenhuma atividade dependente"

Scenario: Obter lista de quais atividades tem como pré-requisito uma atividade não cadastrada
Given Estou na pagina da criança com id "1"
Given vejo o profissional responsavel "Jucelina" e o nome da criança "Ana"
Given Seleciono o link "Atividades conseguintes"
When Solicito as atividades que tem "Desenhar circulo" como pré-requisito
Then Aparece uma lista com uma linha laranja indicando que "Atividade não cadastrada"