Scenario: Obter as metas com menores desempenho
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com "3" em "Desenhar círculos",  "4" em "Desenhar quadrado" e "10" em "desenhar  triângulos"
	When Clico em "Metas com menor desempenho"
	Then aparece uma lista com as metas ordenada crescente pelo desempenho, "Desenhar círculos", "3", "Desenhar quadrado" "4", "desenhar  triângulos" "10"

Scenario: Obter as metas com maiores desempenho
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com  "9" em "Desenhar quadrado", "10" em "Desenhar círculos" e "4" em "desenhar  triângulos"
	When Clico em "Metas com maior desempenho"
	Then aparece uma lista com as metas ordenada decrescentemente pelo desempenho, "Desenhar círculos" "10", "Desenhar quadrado" "9", "desenhar  triângulos" "4"
  

Scenario: Calcular a porcentagem das metas atingidas
	Given estou na página de metas
	And a meta "Desenhar círculos"  tem desempenho "6" porém "Desenhar quadrados" não foi atingida
	When Clico em "porcentagem das metas atingidas"
	Then aparece "50%", a porcentagem das metas atingidas

Scenario: Obter o número e a lista das metas atingidas
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com  "9" em "Desenhar quadrado", "10" em "Desenhar círculos" e "4" em "desenhar  triângulos"
	When Clico em "número e a lista das metas atingidas"
	Then aparece uma lista com as metas atingidas "Desenhar quadrado", "Desenhar círculos", "desenhar triângulos"
	And o número "3" indicando o tamanho da lista

Scenario: Obter o número e a lista das metas não atingidas
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com  "9" em "Desenhar quadrado", "10" em "Desenhar círculos" porém a meta "desenhar  triângulos" não foi atingida ainda
	When Clico em "número e a lista das metas não atingidas"
	Then aparece uma lista com as metas não atingidas "desenhar triângulos"
	And o número "1" indicando o tamanho da lista de metas não atingidas


Scenario: Falha ao obter as metas com menores desempenho
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com "-3%#@" em "Desenhar círculos",  "4" em "Desenhar quadrado"
	When Clico em "Metas com menor desempenho"
	Then aparece uma mensagem de erro indicando "Meta com Desempenho inválido".

Scenario: Falha ao obter as metas com maiores desempenho
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com "-3%#@" em "Desenhar círculos",  "4" em "Desenhar quadrado"
	When Clico em "Metas com maior desempenho"
	Then aparece uma mensagem de erro indicando "Meta com Desempenho inválido".
	And o botão "voltar a página de metas" aparece

Scenario: Falha ao obter o número e a lista das metas não atingidas
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com "-3%#@" em "Desenhar círculos",  "4" em "Desenhar quadrado"
	When Clico em "número e a lista das metas não atingidas"
	Then aparece uma mensagem de erro indicando "Meta com Desempenho inválido".

Scenario: Falha ao obter o número e a lista das metas atingidas
	Given estou na página de metas
	And os desempenhos das metas estão cadastrados com git"-3%#@" em "Desenhar círculos",  "4" em "Desenhar quadrado"
	When Clico em "número e a lista das metas atingidas"
	Then aparece uma mensagem de erro indicando "Meta com Desempenho inválido".
	And aparece a opção "Voltar a página de metas"
#commit1