---
title: Preprocessador
description: Macros, compilação condicional e diretivas do preprocessador.
---

## O Que é o Preprocessador?

O preprocessador C roda **antes** da compilação. Ele processa linhas que começam com `#`.

## #include

Inclui o conteúdo de outro arquivo:

```c
#include <stdio.h>   // header do sistema
#include "meuarquivo.h"  // header local
```

## #define — Macros

```c
#define PI 3.14159
#define MAX(a, b) ((a) > (b) ? (a) : (b))
```

:::caution
Argumentos de macros **não são verificados por tipo** e podem causar bugs sutis. Sempre envolva os argumentos em parênteses.
:::

## Compilação Condicional

```c
#ifdef DEBUG
    printf("Modo debug ativado\n");
#endif
```

```c
#ifndef HEADER_H
#define HEADER_H
// conteúdo do header
#endif
```

Isso é chamado de **include guard** — impede que um header seja incluído múltiplas vezes.

## #if / #elif / #else

```c
#if VERSION >= 2
    // código v2+
#elif VERSION == 1
    // código v1
#else
    // fallback
#endif
```

## Macros Predefinidas Comuns

| Macro | Descrição |
|-------|-----------|
| `__FILE__` | Nome do arquivo atual |
| `__LINE__` | Número da linha atual |
| `__DATE__` | Data da compilação |
| `__TIME__` | Hora da compilação |
