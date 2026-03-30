---
title: Controle de Fluxo
description: Condicionais e laços de repetição em C.
---

## If / Else

Pense no `if` exatamente como a condição em português: **SE** x acontecer, fazer y. 

Pense no `else if` como um **SE TAMBÉM** acontecer, fazer z.

Pense no `else` como um **SE nenhum desses** acontecer, fazer A.

| if       | else if  | else     |
|:--------:|:--------:|:--------:|
| Check Inicial | Check Opcional  | Check final |

```c
int nota = 85;

if (nota >= 90) { // SE a nota for maior ou igual (>=) a 90
    printf("A\n");
} else if (nota >= 80) { // SE TAMBÉM a nota for maior ou igual a 80
    printf("B\n");
} else { // SE nenhum desses 
    printf("C ou abaixo\n");
}
```

## Switch

Muita gente tem dificuldade com o `switch` mas ele é tranquilo. **Quando você espera uma série de acontecimentos no seu código é hora de usar ele.** Um bom exemplo completo pode ser encontrado nesse [repositório do GitHub](https://github.com/insxnsive/ibmr-c-exercises/blob/main/rpg.c)

Os cases são exatamente essas séries de acontecimentos que você espera, você define um para cada, por isso `case 1:`, **caso 1**, `case 2:` **caso 2** e assim por diante.

No exemplo a seguir nós temos a variável `dia` que está sendo passada para o `switch`. Seu valor é de `3`, logo, o resultado será o **caso 3**.

```c
int dia = 3;

switch (dia) {
    case 1: 
        printf("Segunda\n"); 
        break; // break significa quebra de código.
    case 2: 
        printf("Terça\n"); 
        break;
    case 3: 
        printf("Quarta\n"); 
        break;
    default: // default serve para caso não se encaixe em nenhum dos casos acima!
        printf("Outro dia\n"); 
        break;
}
```

:::note[Você sabia?]
Também pode ser feito dessa forma:

```c
int dia = 3;

switch(dia) { case 1: printf("Segunda\n"); case 2: printf("Terça\n"); break; case 3: printf("Quarta\n");  break; default: printf("Outro dia\n"); break; }
```
:::

# Loops

Como já dito em aulas anteriores da IBMR, isso é puramente gosto, todos fazem a mesma coisa porém de diferentes formas escritas. Eu particularmente prefiro o `for` para taréfas simples e `while` para taréfas mais complexas.

Todos os Loops seguem uma ordem lógica e previsível, sendo ela:
**Inicia uma variável, espera por uma condição diferente de verdadeiro (False) e faz então uma ação (incremento ou decremento nesse caso).**

Exemplo de `for`

| for(     | i=1      | i<=5     | i++);    |
|----------|:--------:|:--------:|:--------:|
| Loop | iniciar a(s) | Condição   | Incremento |
|      | variável(s)  | T = Repete | ou         |
|      | contadora(s) | F = Parar  | Decremento |

## Loop While

Executa enquanto algo for real e passa argumentos por dentro de chaves:

```c
int i = 0;
while (i < 5) {
    printf("%d\n", i);
    i++;
}
```

## Loop Do-While

Executa pelo menos uma vez também dentro de chaves:

```c
int i = 0;
do {
    printf("%d\n", i);
    i++;
} while (i < 5);
```

## Loop For

Executa enquanto algo for real porém os argumentos são juntos das parenteses. `()`

```c
// Iniciar a(s) variável(is), Condição (True = repete, F = parar.), Incremento ou decremento.
for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

## Break e Continue

- `break` — sai do loop imediatamente.
- `continue` — pula o restante da iteração atual.

```c
for (int i = 0; i < 10; i++) {
    if (i == 5) break;         // se i for igual a 5 parar
    if (i % 2 == 0) continue;  // se a divisão de i por 2 for igual a 0 continuar (par)
    printf("%d\n", i);
}
```
