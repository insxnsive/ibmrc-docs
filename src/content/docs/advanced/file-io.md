---
title: Entrada/Saída de Arquivos
description: Lendo e escrevendo arquivos em C.
---

## Abrindo um Arquivo

```c
#include <stdio.h>

FILE *fp = fopen("dados.txt", "r"); // "r" = leitura
if (fp == NULL) {
    perror("Erro ao abrir arquivo");
    return 1;
}
```

## Modos de Abertura

| Modo | Descrição |
|------|-----------|
| `"r"` | Leitura (arquivo deve existir) |
| `"w"` | Escrita (cria ou sobrescreve) |
| `"a"` | Append (cria se necessário) |
| `"rb"` / `"wb"` | Leitura / escrita binária |

## Escrevendo em um Arquivo

```c
FILE *fp = fopen("saida.txt", "w");
fprintf(fp, "Olá, arquivo!\n");
fprintf(fp, "Número: %d\n", 42);
fclose(fp);
```

## Lendo de um Arquivo

### Linha por linha

```c
char linha[256];
FILE *fp = fopen("dados.txt", "r");

while (fgets(linha, sizeof(linha), fp)) {
    printf("%s", linha);
}

fclose(fp);
```

### Entrada formatada

```c
int valor;
fscanf(fp, "%d", &valor);
```

## Sempre Feche Arquivos

```c
fclose(fp);
```

:::tip
Sempre verifique se `fopen` não retornou `NULL` antes de usar o ponteiro de arquivo.
:::
