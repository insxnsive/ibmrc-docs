---
title: Strings
description: Trabalhando com strings em C.
sidebar:
    badge:
        text: ❕ Atualizado
        variant: note
---

Em C, string não é um tipo separado como em outras linguagens. Uma string é um **array de `char`** terminado por `\0`.

## O tal do `\0`

Quando você escreve:

```c
char nome[] = "Ana";
```

na memória fica assim:

| Índice | Valor |
|:------:|:-----:|
| 0 | 'A' |
| 1 | 'n' |
| 2 | 'a' |
| 3 | '\0' |

Esse `\0` marca o fim da string.

:::tip
Sem `\0`, funções de string podem continuar lendo memória sem parar no ponto certo.
:::

## Biblioteca string.h

Para trabalhar com strings, inclua:

```c
#include <string.h>
```

Funcoes comuns:

| Função | O que faz |
|--------|-----------|
| `strlen(s)` | tamanho da string (sem contar `\0`) |
| `strcpy(dest, src)` | copia `src` para `dest` |
| `strcat(dest, src)` | concatena `src` no fim de `dest` |
| `strcmp(a, b)` | compara strings (`0` se iguais) |

## Lendo String com Segurança

```c
char nome[50];
fgets(nome, sizeof(nome), stdin);
```

`fgets` limita a leitura ao tamanho do buffer, evitando estourar memória.

:::caution[Atenção]
Nunca use `gets()`.

Ela não valida limite e foi removida do padrão C por ser insegura.
:::

## Exemplo Completo

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char primeiro[] = "Hello";
    char segundo[] = " World";
    char resultado[50];

    strcpy(resultado, primeiro);
    strcat(resultado, segundo);

    printf("%s\n", resultado);             // Hello World
    printf("Tamanho: %zu\n", strlen(resultado)); // 11

    return 0;
}
```

## Comparando Strings

Muita gente tenta comparar string com `==`, mas em C isso não compara texto corretamente.

Use `strcmp`:

```c
if (strcmp("abc", "abc") == 0) {
    printf("Sao iguais\n");
}
```

## Resumo Rápido

- String em C = array de `char` + `\0`
- `string.h` e essencial no dia a dia
- `fgets` para leitura segura
- `strcmp` para comparar texto
