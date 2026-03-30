---
title: Seu Primeiro Programa em C
description: Escreva, compile e execute um programa Hello World em C.
---

## Hello, World!

Crie um arquivo chamado `hello.c` com o seguinte conteúdo:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## Compilando e Executando

Abra um terminal no mesmo diretório do arquivo e execute:

```bash
gcc hello.c -o hello
./hello
```

Você deve ver:

```
Hello, World!
```

:::tip[Dica]
Se você estiver usando o **JetBrains Clion** basta clicar no ícone de play verde no canto superior direito. Caso esteja usando o **Dev-C++**, aperte **F11**.
:::

## Entendendo o Código

| Parte | Função |
|-------|--------|
| `#include <stdio.h>` | Inclui a biblioteca padrão de I/O para usar o `printf` |
| `int main()` | Ponto de entrada de todo programa em C |
| `printf(...)` | Imprime texto no terminal |
| `return 0;` | Indica ao sistema operacional que o programa terminou com sucesso |

**Parabéns — você escreveu e executou seu primeiro programa em C!** A seguir, vamos aprender sobre variáveis e tipos de dados.
