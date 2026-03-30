---
title: Variáveis e Tipos de Dados
description: Aprenda a declarar variáveis e entenda os tipos de dados em C.
---

## Variáveis

Uma variável armazena um valor na memória. Você deve declarar uma variável antes de usá-la:

```c
int idade = 25;
float temperatura = 36.6;
char nota = 'A';
```


## Tipos de Dados Comuns

| Tipo | Tamanho (típico) | Descrição | Exemplo |
|------|-------------------|-----------|---------|
| `int` | 4 bytes | Número inteiro | `42` |
| `float` | 4 bytes | Decimal de precisão simples | `3.14f` |
| `double` | 8 bytes | Decimal de precisão dupla | `3.14159` |
| `char` | 1 byte | Caractere único | `'A'` |

:::note[Você sabia?]
Antigamente era fundamental otimizar até suas variáveis para o menor número de bytes possíveis devido a baixa quantidade de processamento.
:::


## Declaração vs. Inicialização

```c
int x;       // declaração (valor indefinido)
int y = 10;  // declaração + inicialização
x = 5;       // atribuição
```

## Constantes

Use `const` para criar uma variável somente leitura:

```c
const int TAMANHO_MAX = 100;
```

Ou use `#define` para uma constante do preprocessador:

```c
#define PI 3.14159
```

É extremamente importante de que você saiba a diferença entre `const` e uma variável normal. Tenha certeza de decorar para o futuro. Constantes não alteram, enquanto variáveis são mais maleáveis!

## Exemplos

Imagine o seguinte cenário: Você trabalha em uma empresa que tem um software de seu parque de diversões e precisa deixar explicito a altura máxima para entrar em um brinquedo.

```c
const int alturaMax = 160;
```

Esse valor é de altura máxima, ou seja, será sempre essa a altura máxima, ela não será alterada durante a utilização ou processamento do código, logo, deverá ser `const`.

:::caution[Atenção!]
Embora não incluir o `const` obtenha o mesmo resultado, nunca faça variáveis que são constantes sem incluir o `const`.
:::