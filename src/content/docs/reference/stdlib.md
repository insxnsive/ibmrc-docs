---
title: Referência da Biblioteca Padrão C
description: Referência rápida das funções mais usadas da biblioteca padrão C.
---

## stdio.h — Entrada / Saída

| Função | Descrição |
|--------|-----------|
| `printf(fmt, ...)` | Imprime saída formatada no stdout |
| `scanf(fmt, ...)` | Lê entrada formatada do stdin |
| `fprintf(fp, fmt, ...)` | Imprime em um arquivo |
| `fgets(buf, n, fp)` | Lê uma linha de um arquivo |
| `fopen(path, mode)` | Abre um arquivo |
| `fclose(fp)` | Fecha um arquivo |

## stdlib.h — Utilidades Gerais

| Função | Descrição |
|--------|-----------|
| `malloc(size)` | Aloca memória |
| `calloc(n, size)` | Aloca e inicializa com zeros |
| `realloc(ptr, size)` | Redimensiona memória alocada |
| `free(ptr)` | Libera memória alocada |
| `atoi(str)` | Converte string para int |
| `exit(code)` | Encerra o programa |

## string.h — Operações com Strings

| Função | Descrição |
|--------|-----------|
| `strlen(s)` | Tamanho da string |
| `strcpy(dest, src)` | Copia string |
| `strncpy(dest, src, n)` | Copia até n caracteres |
| `strcat(dest, src)` | Concatena strings |
| `strcmp(a, b)` | Compara strings (0 = iguais) |
| `strstr(haystack, needle)` | Encontra substring |

## math.h — Funções Matemáticas

Compile com `-lm` para linkar a biblioteca matemática.

| Função | Descrição |
|--------|-----------|
| `sqrt(x)` | Raiz quadrada |
| `pow(base, exp)` | Potência |
| `abs(x)` | Valor absoluto (int) |
| `fabs(x)` | Valor absoluto (double) |
| `ceil(x)` | Arredondar para cima |
| `floor(x)` | Arredondar para baixo |
