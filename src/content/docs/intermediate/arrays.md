---
title: Arrays
description: Armazene múltiplos valores do mesmo tipo em C.
sidebar:
    badge:
        text: ❕ Atualizado
        variant: note
---

Se variável é uma "caixinha" de valor, array é uma **estante de caixinhas iguais**.

Em C, um array guarda vários valores do mesmo tipo em posições sequenciais da memória.

## Declarando um Array

```c
int notas[5] = {10, 20, 30, 40, 50};
```

Aqui você criou 5 espaços do tipo `int`.

## Indices: Comeca no 0

Esse detalhe é o que mais pega quem está começando:

| Posição lógica | Índice em C |
|:--------------:|:-----------:|
| 1 elemento | 0 |
| 2 elemento | 1 |
| 3 elemento | 2 |

Exemplo:

```c
printf("%d\n", notas[0]); // 10
printf("%d\n", notas[4]); // 50
```

:::tip
Pense assim: índice é "distância do início". O primeiro elemento está a 0 passos do início.
:::

## Alterando um Valor

```c
notas[2] = 99;
```

Agora o terceiro valor do array virou `99`.

## Percorrendo com for

Loop `for` e a forma mais comum de percorrer arrays:

```c
for (int i = 0; i < 5; i++) {
    printf("%d\n", notas[i]);
}
```

## Descobrindo o Tamanho

C não guarda automaticamente o tamanho de um array para você. Um padrão muito usado:

```c
int Tam[] = {1, 2, 3, 4, 5};
int n = sizeof(Tam) / sizeof(Tam[0]);
```

Se quiser entender esse operador com calma, leia: [Operador sizeof](/basics/sizeof/).

## Arrays de Duas Dimensões (Matriz)

Você pode imaginar como linhas e colunas:

```c
int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

printf("%d\n", matriz[1][2]); // 6
```

`matriz[1][2]` significa:

- linha 1 (segunda linha)
- coluna 2 (terceira coluna)

## Erro Clássico: Estourar Limite

:::caution[Atenção]
Acessar índice fora do limite é comportamento indefinido.

Exemplo perigoso:
```c
int notas[5] = {10, 20, 30, 40, 50};
printf("%d\n", notas[10]); // inválido
```

Pode imprimir lixo, pode travar, pode parecer funcionar "por sorte".
:::

## Resumo Rápido

- Arrays guardam varios valores do mesmo tipo
- O primeiro índice sempre é `0`
- `for` e seu melhor amigo para percorrer array
- `sizeof(Tam) / sizeof(Tam[0])` ajuda a contar elementos
