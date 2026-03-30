---
title: Gerenciamento de Memória
description: Alocação dinâmica de memória com malloc, calloc, realloc e free.
---

## Stack vs. Heap

- **Stack** — armazenamento automático para variáveis locais. Liberada quando a função termina.
- **Heap** — armazenamento manual que você controla. Deve ser liberada explicitamente.

## malloc

Aloca um bloco de memória e retorna um ponteiro:

```c
#include <stdlib.h>

int *arr = malloc(5 * sizeof(int));
if (arr == NULL) {
    // alocação falhou
    return 1;
}
```

## calloc

Como `malloc`, mas inicializa a memória com zeros:

```c
int *arr = calloc(5, sizeof(int));
```

## realloc

Redimensiona um bloco previamente alocado:

```c
arr = realloc(arr, 10 * sizeof(int));
```

## free

Sempre libere a memória quando terminar de usar:

```c
free(arr);
arr = NULL; // evita ponteiro pendente (dangling pointer)
```

:::danger
Esquecer de chamar `free()` causa **vazamento de memória**. Usar memória após `free()` é **comportamento indefinido**.
:::

## Exemplo

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *nums = malloc(n * sizeof(int));
    if (nums == NULL) return 1;

    for (int i = 0; i < n; i++) {
        nums[i] = i * 10;
    }

    for (int i = 0; i < n; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");

    free(nums);
    return 0;
}
```
