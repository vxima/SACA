Cenario: Avaliar um profissional pelo responsável da criança
    Given: estou na página inicial da criança "Jonathan"
    And: vejo a opção para avaliar o profissionais
    And: vejo o profissional "Roberto"
    When: Clico na opção de avaliação
    Then: Aparece uma nova janela com um espaço para avaliar de "0 a 10" o responsável selecionar seu nível de satisfatibilidade com o profissional 

Cenario: Enviar avaliação
    Given: estou na página de avaliação do profissional "Roberto"
    And: vejo a escala de "0 a 10"
    When: informo o valor 6 na área designada
    And: seleciono a opção de enviar
    Then: Aparece a mensagem "Você avaliou Roberto com nota 6"

Cenario: Armazenando avaliação
    Given: o sistema não possui nenhuma avaliação para o profissional "Roberto" avaliado pelo responsável da criança "Jonathan"
    When: o responsável pela criança "Jonathan" informa a nota 6 para o profissional "Roberto"
    Then: o sistema deve armazenar a nota 6 para o profissional "Roberto"
    And: armazenar "Jonathan" para o profissional "Roberto" na área de alunos que avaliaram o professor

Cenario: Avaliar um profissional com nota inválida
    Given: estou na página de avaliação do profissional "Roberto"
    And: vejo a escala de "0 a 10"
    When: informo o valor "12" na área designada
    And: seleciono a opção de enviar
    Then: Aparece a mensagem de erro "Nota para avaliação inválida"

Cenario: "Não armazenar nota de um profissional caso a nota seja inválida"
    Given: o sistema não possui nota para o profissional "Roberto" avaliado pelo responsável da criança "Jonathan"
    When: o responsável informa a nota "12" para o profissional
    Then: o sistema não armazena a nota "12" para o profissional
    And: o sistema não armazena "Jonathan" para o profissional "Roberto" na área de alunos que avaliaram o professor

Cenario: Avaliar o profissional antes de terminada sua atividade coma a criança
    Given: estou na pagina de avaliação para o profissional "Roberto"
    And: tento avaliar o profissional
    When: Clico na opção de avaliação
    Then: Aparece uma mensagem "Não é possível avaliar o profissional sem as atividades estarem finalizadas"

Cenario: Visualizar a avaliação média de um profissional
    Given: estou na página do profissional "Roberto"
    And: desejo visualizar sua avaliação média
    When: Seleciono a opção de visualizar a média
    Then: O sistema calcula a soma de todas as avalições que o profissional recebeu
    And: dividir a soma pela quantidade de avaliações
    And: ceder o resultado do profissional "Roberto"

Cenario: Avaliar um profissional que não realizou atividades com a criança
    Given: estou na página do profissional "Marcos"
    And: desejo avaliar o profissional com uma nota de "0 a 10"
    When: clico na opção de avaliar profissional
    Then: O sistema envia uma mensagem "Você não pode avaliar um profissional que não aplicou atividades com a crianca"

Cenario: Sistema não deve adicionar nota com profissional que não realizou atividade com a criança
    Given: o profissional "Marcos" está registrado no sistema
    And: o profissional não possui nenhuma atividade com a criança "Jonathan" no sistema
    When: o responsável da criança "Jonathan" tenta avaliar o responsável
    Then: o sistema não armazena nenhuma nota para "Marcos"
    And: não armazena "Jonathan" na área de crianças que avaliaram o profissional "Marcos"