Cenário: Obter gráfico de desempenho
Given estou na página inicial do sistema
And posso ver o “menu dropdown”
When abro o menu, vejo a opção “desempenho”
When clico em “desempenho”
Then na página aparece o “gráfico de desempenho” com as “metas” x “resultados reais”

Cenário: Obter média de desempenho
Given estou na página “desempenho”
When clico em “média”
Then posso ver a página de média de desempenho da  criança dizendo que a média dela é de “8 acertos”

Cenário: Ordenar as metas por ordem de dificuldade 
Given estou na página “desempenho”
And vejo a opção “metas a cumprir”
When clica em “metas a cumprir”
Then aparece página “metas a cumprir” com a “meta 1” com grau de dificuldade “1”, “meta 2” com dificuldade “1”, “meta 3” com dificuldade “3” e “meta 4” com dificuldade “4”
And estão em uma lista ordenadas pelo grau de dificuldade

Cenário: Mural de avisos
Given estou na página "mural de avisos" do sistema
And vejo um aviso “não haverá expediente no dia 15”
And uma “seção de troféu” com a criança “João Pedro”, que alcançou 100% nas metas
When clico em "seção de troféu"
Then posso ver um histórico de crianças que ganharam o troféu

Os cenários abaixo pertencce a Pedro Nogueira:

Scenario: Obter as metas com menores desempenho
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com “3” em “Desenhar círculos",  “4” em “Desenhar quadrado” e “10” em “desenhar  triângulos”
	When Clico em ”Metas com menor desempenho”
	Then aparece uma lista com as metas ordenada crescente pelo desempenho, “Desenhar círculos” “3”, “Desenhar quadrado” “4”, “desenhar  triângulos” “10”

Scenario: Obter as metas com maiores desempenho
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com  “9” em “Desenhar quadrado”, “10” em “Desenhar círculos" e “4” em “desenhar  triângulos”
	When Clico em ”Metas com maior desempenho”
	Then aparece uma lista com as metas ordenada decrescentemente pelo desempenho, “Desenhar círculos” “10”, “Desenhar quadrado” “9”, “desenhar  triângulos” “4”
