---
title: Operadores
description: Operadores aritméticos, de comparação, lógicos e de atribuição em C.
---

Estes são operadores, são aquelas coisinhas que ficam entre funções, variáveis, ou melhor: Tudo! 

**É interessante que conheça todos ou apenas saiba que existem para não quebrar a cabeça no futuro.**

## Operadores Aritméticos

```c
int a = 10, b = 3;

a + b   // 13  — adição
a - b   // 7   — subtração
a * b   // 30  — multiplicação
a / b   // 3   — divisão inteira
a % b   // 1   — módulo (resto)
```

## Operadores de Comparação

```c
a == b  // igual a
a != b  // diferente de
a > b   // maior que
a < b   // menor que
a >= b  // maior ou igual a
a <= b  // menor ou igual a
```

Retornam `1` (verdadeiro) ou `0` (falso).

## Operadores Lógicos

```c
&&  // E (AND)
||  // OU (OR)
!   // NÃO (NOT)
```

Exemplo de &&:

```c
// Se "a" E "b" forem maior que 0, então:
if (a > 0 && b > 0) {
    printf("Ambos são positivos\n");
}
```

Exemplo de ||:

```c
// Se "a" for maior que 0 OU "b" maior que 1, então:
if (a > 0 || b > 1) {
    printf("A é maior que 0 e B maior que 1.\n");
}
```

Exemplo de !:

```c
// Se "a" NÃO for maior que 0, então:
if (!a > 0) {
    printf("A não é maior que 0.\n");
}
```

:::tip
Temos o costume de fazer `if` para coisas que são esperadas, pense no `!` como se você esperasse algo que não fosse acontecer.
:::

## Operadores de Atribuição

```c
x = 10;   // atribuição
x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
x /= 4;   // x = x / 4
x %= 3;   // x = x % 3
```

## Incremento / Decremento

```c
x++;  // pós-incremento
++x;  // pré-incremento
x--;  // pós-decremento
--x;  // pré-decremento
```

### Atenção:
:::caution
Saiba a diferença entre pós-decremento e pré-decremento para não cometer erros.

**Exemplo de pós-decremento:**
```c
int x = 1;
int y;

int main() {
    x--;
    y = x
}
```

**Exemplo de pré-decremento:**
```c
int x = 1;
int y;

int main() {
    y = --x;
}
```

| Tipo | Sintaxe | O que acontece? |
|----------|----------|----------|
| Pré-decremento | --x; | Diminui 1 **primeiro**, depois entrega o valor. |
| Pós-decremento | x--; | Entrega o valor atual **primeiro**, depois diminui 1. |

:::