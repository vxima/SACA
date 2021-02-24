Cenario: Avaliar um profissional pelo responsável da criança
    Given: estou na página inicial da criança "Jonathan"
    And: vejo a opção para avaliar o profissional "Roberto"
    When: Clico na opção de avaliação
    Then: Aparece uma nova janela com uma uma escala de "0 a 10" para o responsável selecionar seu nível de satisfatibilidade com o profissional 

Cenario: Enviar avaliação
    Given: estou na página de avaliação do profissional "Roberto"
    And: vejo a escala de "0 a 10"
    When: informo o valor 6 na escala
    And: seleciono a opção de enviar
    Then: Aparece a mensagem "Você avaliou Roberto com nota 6"

Cenario: Avaliar o profissional antes de terminada uma atividade
    Given: estou na pagina de avaliação para o profissional "Roberto"
    And: tento avaliar o profissional
    When: Clico na opção de avaliação
    Then: Aparece uma mensagem "Não é possível avaliar o profissional sem as atividades serem finalizadas"

Cenario: Visualizar a avaliação média de um profissional
    Given: estou na página do profissional "Roberto"
    And: desejo visualizar sua avaliação média
    When: Solicito a avaliação média
    Then: O sistema calcula a soma de todas as avalições que o profissional recebeu
    And: divide a soma pela quantidade de avaliações
    And: cede o resultado do profissional "Roberto"

Cenario: Avaliar um profissional com uma valor fora da escala "0 a 10"
    Giver: estou na página do profissional "Roberto"
    And: desejo avaliar o profissional com uma nota
    When: digito o valor "-1"
    Then: o sistema informa a mensagem "proibido avaliar com nota fora da escala"
    And: a avaliação não é armazenada