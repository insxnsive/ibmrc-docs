---
title: Operador sizeof
description: Entenda o sizeof, para que serve e como usar com segurança em C.
---

O `sizeof` parece pequeno, mas é uma ferramenta muito importante em C. Ele responde uma pergunta simples:

**"Quantos bytes esse tipo ou variável ocupa na memória?"**

## Como usar

Você pode usar `sizeof` com:

- Um tipo
- Uma variável
- Um elemento de array

Exemplos:

```c
sizeof(int)
sizeof(double)
sizeof(idade)
sizeof(vetor[0])
```

## Exemplo Rápido

```c
#include <stdio.h>

int main(void) {
    int idade = 25;
    double nota = 9.5;

    printf("int ocupa: %zu bytes\n", sizeof(int));
    printf("idade ocupa: %zu bytes\n", sizeof(idade));
    printf("double ocupa: %zu bytes\n", sizeof(nota));

    return 0;
}
```

:::note[Importante]
O resultado de `sizeof` pode variar entre sistemas e compiladores. Por exemplo, `int` normalmente tem 4 bytes, mas isso não é regra universal.
:::

## sizeof em Arrays

Quando você tem um array declarado no próprio escopo, um padrão muito comum é:

```c
int Tam[] = {5, 3, 8, 1, 4, 2, 7, 6};
int n = sizeof(Tam) / sizeof(Tam[0]);
```

Por que isso funciona?

- `sizeof(Tam)` = tamanho total do array em bytes
- `sizeof(Tam[0])` = tamanho de 1 elemento em bytes
- Dividindo um pelo outro, você descobre quantos elementos existem

## Armadilha Clássica

Dentro de função, se você receber um array por parâmetro, ele vira ponteiro. Nesse caso, `sizeof` não retorna o tamanho total do array original.

```c
void mostrar_tamanho(int Tam[]) {
    // Aqui Tam já é tratado como ponteiro
    printf("%zu\n", sizeof(Tam));
}
```

:::caution[Atenção]
Não confunda:

- `sizeof` de array local (funciona para contar elementos)
- `sizeof` de parâmetro de função (não conta elementos do array original)
:::

## Quando usar no dia a dia

- Descobrir tamanho de tipos (`int`, `char`, `struct`)
- Calcular tamanho de arrays locais
- Evitar "números mágicos" no código
- Ajudar em alocação de memória (tema de avançado)

:::tip
Decore esta forma: `sizeof(Tam) / sizeof(Tam[0])`. Ela aparece o tempo todo em C.
:::
