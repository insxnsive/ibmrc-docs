---
title: Exercícios Fundamentais
description: Lista guiada e objetiva para praticar Fundamentos, com dicas e um desafio único de Bubble Sort.
sidebar:
    badge:
        text: ★ Novidade
        variant: tip
---

Esta lista foi organizada para você praticar **Fundamentos de forma progressiva**, sem repetição desnecessária e com dicas úteis.

Você vai treinar:

- variáveis e operadores
- `if / else`, `switch` e loops
- funções, protótipos e `void`
- passagem por valor
- um único desafio de **Bubble Sort**

:::tip[Como aproveitar melhor]
Não copie solução pronta. Faça a sua versão, teste com entradas diferentes e depois refatore para ficar mais legível.
:::

## Trilha Recomendada

| Exercício | Foco principal | Dificuldade |
|:---------:|----------------|:-----------:|
| 1 | Condições e operadores | Fácil |
| 2 | Aritmética e formatação de saída | Fácil |
| 3 | `switch` + regra de negócio | Fácil |
| 4 | `for`, `break`, `continue` | Médio |
| 5 | `while` e `do-while` | Médio |
| 6 | Funções, protótipos, `void` | Médio |
| 7 | Passagem por valor (comprovação prática) | Médio |
| 8 | Bubble Sort (desafio único) | Médio/Alto |

## Regras Gerais

- Use `int main(void)` quando fizer sentido.
- Organize o código em blocos e funções curtas.
- Nomeie variáveis de forma clara.
- Teste casos normais e casos de borda.
- Sempre compile sem warnings, quando possível.

---

## Exercício 1: Triagem de Acesso

Crie um programa que decide se uma pessoa pode acessar um laboratório.

Dados de entrada sugeridos:

- idade
- possui crachá (`1` ou `0`)
- nível de autorização

Requisitos:

- use `if / else if / else`
- use operadores lógicos (`&&`, `||`, `!`)
- informe o motivo da reprovação quando houver

**Hint:** em vez de uma condição gigante, quebre em regras pequenas (`idadeOk`, `crachaOk`, etc.).

---

## Exercício 2: Conversor de Tempo

Receba um valor em segundos e converta para:

- horas
- minutos
- segundos restantes

Requisitos:

- use divisão inteira e `%`
- exiba o resultado em formato legível

**Hint:** calcule primeiro horas, depois reaproveite o resto para minutos e segundos.

---

## Exercício 3: Painel por Setor (`switch`)

Crie um painel que recebe um número de setor e imprime a rotina correspondente.

Mapa sugerido:

- `1`: engenharia
- `2`: comunicação
- `3`: segurança
- `4`: comando
- `default`: setor desconhecido

Requisitos:

- use `switch`
- use `break` corretamente
- tenha ao menos um caso com duas ações

**Hint:** deixe mensagens curtas e específicas, como se fosse um sistema real.

---

## Exercício 4: Auditoria de Sequência (`for`)

Percorra os números de `1` a `50`.

Regras:

- ignore divisíveis por `4` com `continue`
- pare no primeiro divisível por `17` com `break`
- para os demais, imprima número, quadrado e se é par/ímpar

**Hint:** faça primeiro sem `continue`/`break`; depois adicione essas regras.

---

## Exercício 5: Diagnóstico de Ciclos (`while` + `do-while`)

No mesmo programa, implemente duas rotinas:

1. Um aquecimento com `while` até atingir temperatura mínima.
2. Uma verificação obrigatória com `do-while` que rode ao menos uma vez.

Requisitos:

- diferenciar claramente quando usar cada loop
- mostrar contador de ciclos/tentativas

**Hint:** este exercício existe para você sentir na prática a diferença entre “testa antes” e “executa antes”.

---

## Exercício 6: Mini Biblioteca de Funções

Crie protótipos e implemente funções separadas para:

- retornar o maior entre dois inteiros
- retornar `1` se número for par e `0` se for ímpar
- imprimir um relatório (`void`) com dados formatados

Requisitos:

- declarar protótipos antes da `main`
- definir funções depois da `main`

**Hint:** use nomes autoexplicativos como `maiorDeDois`, `ehPar`, `mostrarRelatorio`.

---

## Exercício 7: Prova de Passagem por Valor

Crie uma função `duplicar(int x)` que altera `x` internamente e imprime esse valor.

Na `main`:

- mostre valor antes da função
- chame a função
- mostre valor depois da função

Objetivo:

- provar que o valor original não mudou fora da função

**Hint:** acrescente uma segunda função (`somarDez`) para reforçar o conceito.

---

## Exercício 8: Bubble Sort (Único da Lista)

Implemente o Bubble Sort para ordenar um array de inteiros.

Requisitos mínimos:

- usar dois loops `for`
- comparar vizinhos e trocar quando necessário
- imprimir array antes e depois da ordenação

Requisito extra (recomendado):

- usar uma flag (`trocou`) para parar cedo se já estiver ordenado

:::note[Pré-requisito recomendado]
Se travar neste exercício, revise primeiro:

- [Arrays](/intermediate/arrays/)
- [Controle de Fluxo](/basics/control-flow/)
:::

**Hint:** teste com casos diferentes: já ordenado, invertido e com números repetidos.

---

## Critério de Conclusão

Você pode considerar esta etapa concluída quando conseguir:

- resolver os 8 exercícios sem copiar resposta
- explicar com suas palavras o que cada parte do código faz
- fazer pequenas melhorias por conta própria (nomes, organização, testes)

:::tip[Desafio opcional]
Escolha 2 exercícios e reescreva do zero no dia seguinte, sem consultar sua versão anterior. Isso fixa muito.
:::

## Escolha Sua Abordagem

### Tema Opcional

Se quiser deixar a prática mais divertida, imagine que você está construindo um pequeno sistema chamado **Central de Operações Orbital**, usado para monitorar módulos, energia, acesso e rotinas de uma estação espacial.

### Objetivo Direto

Se você só quer treinar rápido e ficar bom logo, o objetivo é simples: **conseguir resolver problemas pequenos e médios em C sem depender de copiar solução pronta**.

## Regras Gerais

- Use apenas o conteúdo visto em **Fundamentos**.
- Sempre que fizer sentido, use `int main(void)`.
- Quando o exercício pedir função, separe a lógica em funções de verdade, não faça tudo dentro da `main`.
- Não pule a organização do código: nomeie bem suas variáveis.
- Se quiser aumentar a dificuldade, teste com valores diferentes dos exemplos.

---

## Exercício 1: Triagem de Acesso ao Módulo

Crie um programa que analise se uma pessoa pode entrar em um módulo restrito da estação.

Você deve declarar variáveis para:

- idade
- altura
- possui crachá (`1` para sim, `0` para não)
- nível de autorização

Use também pelo menos **uma constante** com `const` ou `#define` para representar uma exigência fixa do sistema.

O programa deve informar:

- se a pessoa foi aprovada ou reprovada
- qual regra causou a reprovação, se houver

Restrições do exercício:

- use operadores de comparação e lógicos
- use `if`, `else if` e `else`
- não vale escrever uma única condição gigante sem explicar a lógica no código

---

## Exercício 2: Relógio de Missão

Você recebeu um valor inteiro representando a quantidade total de segundos desde o início da missão.

Seu programa deve converter esse valor em:

- horas
- minutos
- segundos restantes

Depois, exiba o resultado de forma organizada.

Objetivo técnico:

- praticar variáveis
- praticar divisão inteira e módulo (`%`)
- entender bem o papel de cada operador aritmético

Desafio extra:

- mostre também quantos minutos totais se passaram
- mostre quantos ciclos completos de 24 horas já aconteceram

---

## Exercício 3: Painel de Energia Instável

Crie um programa que simule o nível de energia de um sistema começando, por exemplo, em `100`.

Depois aplique, em sequência, vários eventos como:

- recarga de emergência
- perda por superaquecimento
- modo econômico
- consumo duplicado
- ajuste final manual

Você deve usar operadores de atribuição como:

- `+=`
- `-=`
- `*=`
- `/=`

Ao final, informe:

- energia final
- se o sistema terminou estável, em alerta ou crítico

Desafio extra:

- use também incremento ou decremento em algum contador auxiliar

---

## Exercício 4: Cofre de Validação Numérica

Crie um programa que trabalhe com **três números inteiros** e descubra:

- qual deles é o maior
- qual deles é o menor
- se existe empate entre dois ou três valores
- se a soma dos três é par ou ímpar

Você deve resolver isso **sem usar arrays**, já que esse conteúdo ainda não foi estudado.

Objetivo técnico:

- comparações encadeadas
- operadores lógicos
- resto da divisão por `2`
- construção de decisões sem se perder nas condições

---

## Exercício 5: Classificador de Turno com `switch`

Crie uma variável inteira chamada `setor` e use `switch` para mostrar o comportamento do sistema em cada setor.

Exemplo de ideia:

- `1` = engenharia
- `2` = comunicação
- `3` = segurança
- `4` = comando
- qualquer outro valor = setor desconhecido

Cada caso deve imprimir uma mensagem diferente e coerente com o setor.

Exigências:

- use `break` corretamente
- inclua `default`
- pelo menos um dos casos deve executar mais de uma linha de ação

Desafio extra:

- faça dois setores compartilharem parte do comportamento antes do `break`

---

## Exercício 6: Auditoria de Sequência

Crie um `for` que percorra os números de `1` até `50`.

Regras:

- ignore os números divisíveis por `4` usando `continue`
- pare completamente o loop ao encontrar o primeiro número divisível por `17` usando `break`
- para os outros números, imprima:
  - o número
  - o quadrado dele
  - se ele é par ou ímpar

Esse exercício serve para treinar o fluxo real de execução de um loop.

---

## Exercício 7: Aquecimento de Reator com `while`

Simule um reator cuja temperatura começa em um valor baixo e sobe aos poucos.

Use um `while` para repetir o aquecimento até atingir uma temperatura mínima segura.

Em cada repetição, o programa deve:

- aumentar a temperatura
- mostrar o valor atual
- informar se ainda está abaixo do ideal, perto do ideal ou pronta para operação

Desafio extra:

- use uma segunda variável para contar quantos ciclos foram necessários

---

## Exercício 8: Verificação Obrigatória com `do-while`

Crie um programa em que uma rotina de diagnóstico **precisa acontecer pelo menos uma vez**, mesmo que o sistema já esteja em bom estado.

Use `do-while` para:

- imprimir o número da tentativa
- ajustar uma variável de integridade
- repetir enquanto a integridade estiver abaixo do valor desejado

Objetivo técnico:

- entender quando `do-while` faz mais sentido que `while`
- visualizar a diferença entre “testar antes” e “executar antes”

---

## Exercício 9: Biblioteca de Funções Matemáticas

Crie um programa com **protótipos de função** e implemente pelo menos estas funções:

- uma função que receba dois inteiros e retorne o maior deles
- uma função que receba um inteiro e retorne `1` se ele for par e `0` se for ímpar
- uma função que receba três inteiros e retorne a média inteira deles

Na `main`, chame todas as funções e exiba os resultados.

Exigências:

- as funções devem ser definidas depois da `main`
- por isso, você deve declarar os protótipos antes

---

## Exercício 10: Função `void` de Relatório

Crie uma função `void` chamada `mostrarRelatorio` que receba alguns dados do sistema e imprima um pequeno relatório formatado.

Exemplo de dados que podem ser passados:

- nome do módulo representado por um `char`
- quantidade de falhas
- nível de energia
- status geral

O foco aqui não é retornar valor, e sim **executar uma ação útil**.

Desafio extra:

- chame essa função mais de uma vez com conjuntos de dados diferentes

---

## Exercício 11: Investigando Passagem por Valor

Crie uma função chamada `duplicar` que receba um inteiro, altere esse valor dentro da função e mostre o resultado interno com `printf`.

Depois, na `main`, faça o seguinte:

- crie uma variável com valor inicial definido
- imprima o valor antes da chamada
- chame a função
- imprima o valor depois da chamada

Sua meta é provar, com o próprio programa, que a alteração feita no parâmetro **não muda a variável original**.

Desafio extra:

- repita a experiência com uma segunda função que some `10`
- escreva um comentário explicando o que aconteceu

---

## Exercício 12: Simulador de Nota Técnica

Crie um programa que calcule a nota final de um trainee da estação com base em:

- prova teórica
- prova prática
- disciplina operacional

Defina pesos para cada parte e calcule a média final.

Depois:

- use `if / else if / else` para classificar o trainee em categorias
- use operadores lógicos para detectar casos especiais, como nota prática muito baixa mesmo com média aceitável

Exemplo de categorias:

- excelente
- aprovado
- recuperação
- reprovado

Esse exercício mistura cálculo com regra de negócio.

---

## Exercício 13: Calendário de Rotina Operacional

Crie um programa que use:

- uma variável para o dia da semana (`1` a `7`)
- uma variável para indicar se o sistema está em modo de manutenção (`1` ou `0`)

Use `switch` junto com `if` para mostrar a rotina daquele dia.

Exemplo de comportamento:

- em certos dias há inspeção
- em outros há treino
- se estiver em manutenção, a rotina muda

Objetivo técnico:

- combinar `switch` com decisões adicionais
- evitar código duplicado

---

## Exercício 14: Sequência Numérica com Regras Estranhas

Construa um programa que percorra um intervalo de números e aplique regras incomuns, por exemplo:

- se o número for múltiplo de `3`, imprima uma mensagem específica
- se for múltiplo de `5`, imprima outra
- se for múltiplo de ambos, imprima uma terceira mensagem
- se terminar em determinado algarismo, pule com `continue`
- se atingir um valor especial, encerre com `break`

Você pode escolher o intervalo, desde que não seja pequeno demais.

O importante aqui é montar um fluxo com várias regras sem perder a clareza.

---

## Exercício 15: Desafio Final — Mini Sistema Integrado

Desenvolva um programa maior que una o conteúdo inteiro de Fundamentos.

Seu programa deve ter:

- variáveis de tipos diferentes
- pelo menos uma constante
- operadores aritméticos, lógicos e de comparação
- pelo menos uma estrutura `if / else if / else`
- pelo menos um `switch`
- pelo menos um loop
- pelo menos três funções
- pelo menos uma função `void`
- pelo menos uma demonstração de passagem por valor

Tema sugerido:

- painel de nave
- sistema de treinamento militar
- controle de laboratório
- simulador de portões de segurança
- monitor de energia de uma base

Requisito importante:

- não vale juntar tudo sem propósito; o programa precisa parecer um sistema coerente

:::tip
Se quiser estudar de verdade, faça os exercícios em ordem. Se quiser se testar de forma brutal, tente começar pelo 15 e volte para os anteriores só quando travar.
:::

## Meta de Evolução

Se você conseguir resolver esta lista sem consultar respostas prontas, você já terá base para:

- escrever programas pequenos sozinho
- organizar lógica em funções
- entender melhor erros de condição e repetição
- chegar em ponteiros, arrays e strings com muito menos sofrimento

