---
title: Structs
description: Agrupe dados relacionados com structs.
sidebar:
    badge:
        text: ❕ Atualizado
        variant: note
---

Quando você tem várias informações que pertencem à mesma coisa, `struct` é o recurso certo.

Exemplo: uma pessoa tem nome, idade, altura. Faria sentido separar isso em 3 variáveis soltas? Não muito.

## Definindo uma Struct

```c
struct Ponto {
    int x;
    int y;
};
```

Aqui você criou um "molde" chamado `Ponto` com dois campos.

## Declarando e Usando

```c
struct Ponto p1;
p1.x = 10;
p1.y = 20;

printf("(%d, %d)\n", p1.x, p1.y);
```

`p1.x` e `p1.y` usam o operador ponto para acessar campos.

## Inicializacao Direta

```c
struct Ponto p2 = {5, 15};
```

O primeiro valor vai para `x`, o segundo para `y`.

## typedef para Simplificar

Sem `typedef`, você escreve `struct` toda hora. Com `typedef`, fica mais limpo:

```c
typedef struct {
    char nome[50];
    int idade;
} Pessoa;

Pessoa alice = {"Alice", 30};
printf("%s tem %d anos\n", alice.nome, alice.idade);
```

## Ponteiro para Struct (`->`)

Com ponteiro, em vez de `.`, você usa `->`:

```c
Pessoa bob = {"Bob", 25};
Pessoa *ptr = &bob;

printf("%s\n", ptr->nome); // Bob
```

## Struct em Funcoes

Passando por valor:

```c
void imprimir_pessoa(Pessoa p) {
    printf("%s, idade %d\n", p.nome, p.idade);
}
```

Passando por ponteiro (mais eficiente para structs grandes e permite alterar o original):

```c
void aniversario(Pessoa *p) {
    p->idade++;
}
```

:::tip
Regra rapida:

- variável normal de struct: `.`
- ponteiro para struct: `->`
:::

## Resumo Rápido

- `struct` agrupa dados relacionados
- `typedef` reduz verbosidade
- `.` e `->` sao essenciais no uso diario
