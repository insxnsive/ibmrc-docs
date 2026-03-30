---
title: Ponteiros
description: Entenda ponteiros e endereços de memória em C.
sidebar:
    badge:
        text: ❕ Atualizado
        variant: note
---

Ponteiro assusta no início, mas a ideia é direta:

**ponteiro guarda endereço de memória, não guarda o valor em si.**

## Conceito Base

```c
int x = 42;
int *ptr = &x;
```

- `&x` pega o endereço de `x`
- `ptr` guarda esse endereço
- `*ptr` acessa o valor guardado naquele endereço

Exemplo:

```c
printf("%d\n", *ptr); // 42
```

## Alterando o Valor Original

Quando você faz isso:

```c
*ptr = 100;
```

o valor de `x` também muda, porque `ptr` aponta para `x`.

```c
printf("%d\n", x); // 100
```

## Ponteiros em Funções

Lembra que C passa parâmetros por valor? Ponteiro resolve isso quando você precisa alterar a variável original.

```c
void incrementar(int *n) {
    (*n)++;
}

int main(void) {
    int a = 5;
    incrementar(&a);
    printf("%d\n", a); // 6
    return 0;
}
```

:::tip
`&` na chamada, `*` na função. Esse par aparece o tempo todo.
:::

## Ponteiro e Array

Array e muito ligado a ponteiro em C:

```c
int Tam[] = {10, 20, 30};
int *p = Tam;

printf("%d\n", *p);       // 10
printf("%d\n", *(p + 1)); // 20
printf("%d\n", *(p + 2)); // 30
```

## NULL e Segurança

Sempre que possível, inicialize ponteiros.

```c
int *ptr = NULL;

if (ptr != NULL) {
    printf("%d\n", *ptr);
}
```

:::caution[Atenção]
Nunca desreferencie ponteiro inválido (`*ptr`) sem checar.

Isso pode causar falha de execução (crash).
:::

## Resumo Rápido

- Ponteiro guarda endereço
- `*ptr` acessa o valor apontado
- Ponteiros permitem alterar variável fora da função
- `NULL` ajuda a evitar acesso inválido
