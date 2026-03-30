---
title: Funções
description: Defina e chame funções em C.
---

Funções não são só aquele `int main() {}` que você conhece! **Você pode definir várias coisas para acontecerem sem ter que programar elas de novo e de novo**, assim otimizando o seu código e aumentando a versatilidade.

## Definindo uma Função

```c
int somar(int a, int b) {
    return a + b;
}
```

## Chamando uma Função

```c
int resultado = somar(3, 4); // resultado = 7
```

:::tip
Esses dois valores passados dentro das parenteses são o argumento que a função que fizemos espera. Isso é sinalizado pelo `(int a, int b)`. **Quando fizer uma função que precise de argumentos, tenha certeza de passar eles!**
:::

## Protótipos de Função

Se uma função é definida depois do `main`, você precisa de um protótipo (declaração antecipada):

```c
#include <stdio.h>

int somar(int a, int b); // protótipo

int main() {
    printf("%d\n", somar(3, 4));
    return 0;
}

int somar(int a, int b) {
    return a + b;
}
```

## Funções Void
Funções que não retornam valor usam `void`:

```c
void saudacao(void) {
    printf("Olá!\n");
}
```
:::caution
Agora que você sabe dessa informação, todos os `int main` serão `int main(void)`. 
:::

## Parâmetros: Passagem por Valor

C passa argumentos **por valor**. Isso significa que, ao chamar uma função, o valor da variável é **copiado** para dentro do parâmetro da função.

Ou seja: a variável original e o parâmetro da função **não são a mesma coisa**. O parâmetro é apenas uma cópia temporária usada lá dentro.

Veja este exemplo:

```c
void incrementar(int x) {
    x++; // altera apenas a cópia local
}

int main(void) {
    int a = 5;
    incrementar(a);
    printf("%d\n", a); // ainda 5
    return 0;
}
```

Vamos acompanhar o que acontece:

1. A variável `a` é criada com valor `5`.
2. Quando `incrementar(a)` é chamada, o valor de `a` é copiado para `x`.
3. Dentro da função, `x` passa de `5` para `6`.
4. Quando a função termina, essa cópia deixa de existir.
5. A variável `a` continua valendo `5`.

Por isso, o `printf` mostra `5`, e não `6`.

:::tip
Pense assim: `a` e `x` começam com o mesmo valor, mas ficam guardados em lugares diferentes. Alterar `x` não altera `a`.
:::

Se você quiser modificar a variável original de verdade, será necessário passar o **endereço** dela usando **ponteiros**, assunto que aparece na seção Intermediário.
