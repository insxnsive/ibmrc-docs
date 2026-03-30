---
title: Guia de Referência de Formatação
description: Todos os tipos de texto, containers, estilos e componentes disponíveis no Starlight.
sidebar:
  label: Referência de Formatação
#  badge:
#    text: Novo
#    variant: tip
  # Outras opções de sidebar:
  # order: 1
  # hidden: false
  # attrs: { id: custom-id, class: custom-class }
# Outras opções de frontmatter:
# tableOfContents: true
# template: doc          # ou 'splash' para páginas iniciais
# lastUpdated: 2026-03-24
# prev: false            # desativa link "anterior"
# next: false            # desativa link "próximo"
# pagefind: true         # habilita busca na página
# draft: false           # true para esconder em produção
---

{/* ============================================ */}
{/* FORMATAÇÃO DE TEXTO BÁSICA                   */}
{/* ============================================ */}

## Formatação de Texto

Texto normal em parágrafo.

**Texto em negrito** com dois asteriscos.

*Texto em itálico* com um asterisco.

***Texto em negrito e itálico*** com três asteriscos.

~~Texto tachado~~ com dois tils.

Texto com `código inline` usando crases.

Texto com <kbd>Ctrl</kbd> + <kbd>C</kbd> para atalhos de teclado.

Texto com <sup>sobrescrito</sup> e <sub>subscrito</sub>.

Texto com <mark>destaque</mark> usando a tag mark.

Texto com <abbr title="Linguagem de Programação C">LPC</abbr> (passe o mouse para ver o significado).

---

{/* ============================================ */}
{/* TÍTULOS / HEADINGS                           */}
{/* ============================================ */}

## Títulos (Headings)

Os títulos usam `#`. O `##` é o maior disponível dentro do conteúdo (o `#` é reservado para o título da página via frontmatter).

### Heading 3 — Subtítulo

#### Heading 4 — Sub-subtítulo

##### Heading 5

###### Heading 6

---

{/* ============================================ */}
{/* LINKS                                        */}
{/* ============================================ */}

## Links

[Link externo](https://www.example.com)

[Link externo em nova aba](https://www.example.com){target="_blank"}

[Link interno para outra página](/getting-started/introduction/)

[Link com título (hover)](https://www.example.com "Este é o título do link")

Link automático: https://www.example.com

Email: <email@example.com>

---

{/* ============================================ */}
{/* LISTAS                                       */}
{/* ============================================ */}

## Listas

### Lista não ordenada

- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
    - Sub-sub-item 2.2.1
- Item 3

### Lista ordenada

1. Primeiro item
2. Segundo item
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Terceiro item

### Lista de tarefas (checklist)

- [x] Tarefa concluída
- [x] Outra tarefa concluída
- [ ] Tarefa pendente
- [ ] Outra tarefa pendente

### Lista de definições

Termo 1
: Definição do termo 1.

Termo 2
: Definição do termo 2.
: Segunda definição do termo 2.

---

{/* ============================================ */}
{/* CITAÇÕES / BLOCKQUOTES                       */}
{/* ============================================ */}

## Citações (Blockquotes)

> Esta é uma citação simples.

> Citação com múltiplas linhas.
>
> Segundo parágrafo da citação.
>
> > Citação aninhada dentro de outra citação.

> **Citação com formatação**: pode usar *itálico*, `código` e [links](/).

---

{/* ============================================ */}
{/* CÓDIGO                                       */}
{/* ============================================ */}

## Blocos de Código

### Código simples com syntax highlighting

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Código com título do arquivo

```c title="hello.c"
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Código com linhas destacadas

```c {3,5}
#include <stdio.h>

int main() {           // <- linha 3 destacada
    printf("Hello!\n");
    return 0;           // <- linha 5 destacada
}
```

### Código com intervalo de linhas destacadas

```c {3-6}
#include <stdio.h>

int main() {
    int x = 10;
    printf("%d\n", x);
    return 0;
}
```

### Código com marcações ins/del (adições e remoções)

```c del={4} ins={5}
#include <stdio.h>

int main() {
    printf("Texto antigo\n");
    printf("Texto novo\n");
    return 0;
}
```

### Código com números de linha

```c showLineNumbers
#include <stdio.h>

int main() {
    int a = 5;
    int b = 10;
    int soma = a + b;
    printf("Soma: %d\n", soma);
    return 0;
}
```

### Código com números de linha a partir de um número específico

```c showLineNumbers startLineNumber=42
// Esta linha é a 42
// Esta linha é a 43
// Esta linha é a 44
```

### Código com palavras específicas destacadas

```c "printf" "return"
#include <stdio.h>

int main() {
    printf("As palavras printf e return estão destacadas\n");
    return 0;
}
```

### Código inline com syntax highlighting

Use a sintaxe `` `código`{:linguagem} `` — por exemplo: `int x = 5;`

### Bloco de código em diff

```diff
- linha removida
+ linha adicionada
  linha sem alteração
```

### Diversas linguagens

```bash title="Terminal"
gcc -o programa programa.c && ./programa
```

```json title="config.json"
{
  "nome": "exemplo",
  "versao": 1
}
```

```python title="exemplo.py"
print("Python também funciona!")
```

### Frame de código (terminal vs editor)

```bash frame="terminal"
gcc --version
```

```c frame="code"
int x = 42;
```

```txt frame="none"
Texto sem frame algum.
```

---

{/* ============================================ */}
{/* TABELAS                                      */}
{/* ============================================ */}

## Tabelas

### Tabela simples

| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Célula 1 | Célula 2 | Célula 3 |
| Célula 4 | Célula 5 | Célula 6 |

### Tabela com alinhamento

| Esquerda | Centro | Direita |
|:---------|:------:|--------:|
| Texto    | Texto  | Texto   |
| 123      | 456    | 789     |

### Tabela com formatação

| Tipo     | Exemplo        | Descrição             |
|----------|----------------|-----------------------|
| `int`    | `42`           | Número **inteiro**    |
| `float`  | `3.14f`        | Decimal *simples*     |
| `char`   | `'A'`          | Caractere ~~duplo~~ único |

---

{/* ============================================ */}
{/* ASIDES / CALLOUTS (containers)               */}
{/* ============================================ */}

## Asides (Callouts / Containers)

Starlight suporta 4 tipos de asides nativamente em `.md`:

:::note
Este é um bloco de **nota**. Use para informações complementares que o leitor pode achar úteis.
:::

:::tip
Este é um bloco de **dica**. Use para sugerir boas práticas ou atalhos.
:::

:::caution
Este é um bloco de **cuidado**. Use para avisar sobre possíveis problemas.
:::

:::danger
Este é um bloco de **perigo**. Use para erros graves ou ações irreversíveis.
:::

### Asides com título personalizado

:::note[Você sabia?]
Você pode personalizar o título de qualquer aside colocando o texto entre colchetes.
:::

:::tip[Boa Prática]
Sempre inicialize suas variáveis em C para evitar comportamento indefinido.
:::

:::caution[Atenção!]
Acessar memória fora dos limites de um array causa **comportamento indefinido**.
:::

:::danger[Nunca faça isso!]
Nunca use `gets()` — ela não verifica limites e causa **buffer overflow**.
```c
// ❌ Perigoso
char buffer[10];
gets(buffer);

// ✅ Seguro
fgets(buffer, sizeof(buffer), stdin);
```
:::

### Aside com conteúdo rico

:::tip[Dica Completa]
Asides podem conter qualquer Markdown:

1. Listas ordenadas
2. **Negrito** e *itálico*
3. `Código inline`

```c
// Blocos de código também funcionam
int x = 42;
```

| Até | Tabelas |
|-----|---------|
| Sim | Funcionam |

> E citações também.
:::

---

{/* ============================================ */}
{/* IMAGENS                                      */}
{/* ============================================ */}

## Imagens

### Imagem com Markdown

![Texto alternativo da imagem](https://via.placeholder.com/600x200)

### Imagem com legenda (usando HTML)

<figure>
  <img src="https://via.placeholder.com/600x200" alt="Descrição da imagem" />
  <figcaption>Legenda da imagem aqui.</figcaption>
</figure>

### Imagem local (da pasta assets)

Para usar imagens locais, coloque-as na pasta `src/assets/` e referencie:

```md
![Minha imagem](../../../assets/minha-imagem.png)
```

---

{/* ============================================ */}
{/* SEPARADORES E ESPAÇAMENTO                    */}
{/* ============================================ */}

## Separadores

Linha horizontal com três traços:

---

Linha horizontal com três asteriscos:

***

Linha horizontal com três underscores:

___

---

{/* ============================================ */}
{/* NOTAS DE RODAPÉ                              */}
{/* ============================================ */}

## Notas de Rodapé

A linguagem C foi criada por Dennis Ritchie[^1] nos laboratórios Bell[^2].

O padrão mais utilizado atualmente é o C11[^3].

[^1]: Dennis Ritchie (1941–2011), criador da linguagem C e co-criador do Unix.
[^2]: Bell Labs, onde diversas tecnologias fundamentais da computação foram desenvolvidas.
[^3]: C11 é o padrão ISO/IEC 9899:2011.

---

{/* ============================================ */}
{/* HTML INLINE                                  */}
{/* ============================================ */}

## HTML Inline

Você pode usar HTML diretamente quando o Markdown não é suficiente:

<details>
<summary>Clique para expandir (elemento colapsável)</summary>

Conteúdo escondido que aparece quando o usuário clica.

- Suporta Markdown dentro
- **Negrito** funciona
- `Código` também

```c
printf("Até código!\n");
```

</details>

<details>
<summary>Outro exemplo colapsável</summary>

| Funciona | Com Tabelas |
|----------|-------------|
| Sim      | Perfeitamente |

</details>

---

{/* ============================================ */}
{/* EMOJIS                                       */}
{/* ============================================ */}

## Emojis

Você pode usar emojis Unicode diretamente: ✅ ❌ ⚠️ 💡 🚀 📝 🔧 📦 🎯 ⭐

---

{/* ============================================ */}
{/* ESCAPANDO CARACTERES                         */}
{/* ============================================ */}

## Escapando Caracteres Especiais

Use `\` para escapar caracteres Markdown:

\*Este texto não é itálico\*

\# Isso não é um heading

\- Isso não é uma lista

\`Isso não é código inline\`

---

{/* ============================================ */}
{/* FUNCIONALIDADES QUE REQUEREM .MDX            */}
{/* ============================================ */}

## Componentes Starlight (requerem .mdx)

:::caution[Importante]
Os componentes abaixo só funcionam em arquivos **`.mdx`**, não em `.md`.
Para usá-los, renomeie o arquivo de `.md` para `.mdx` e adicione os imports no topo.
:::

Abaixo estão exemplos de código que você pode copiar ao criar arquivos `.mdx`:

### Imports necessários

```mdx
---
title: Minha Página
description: Descrição da página.
---

import { Card, CardGrid, LinkCard, Tabs, TabItem, Steps, Badge, Icon, Aside, FileTree } from '@astrojs/starlight/components';
```

### Cards e CardGrid

```mdx
<CardGrid>
  <Card title="Card Simples" icon="pencil">
    Texto descritivo do card.
  </Card>
  <Card title="Outro Card" icon="rocket">
    Mais conteúdo aqui.
  </Card>
  <Card title="Card com Link" icon="star">
    Conteúdo com [link interno](/getting-started/introduction/).
  </Card>
</CardGrid>
```

**Ícones disponíveis:** `pencil`, `rocket`, `star`, `puzzle`, `warning`, `error`, `information`, `approve-check`, `add-document`, `setting`, `seti:c` (ícone de C), etc.

### Staggered CardGrid (cards de tamanhos diferentes)

```mdx
<CardGrid stagger>
  <Card title="Card 1" icon="pencil">Conteúdo 1.</Card>
  <Card title="Card 2" icon="star">Conteúdo 2 com mais texto para demonstrar o stagger.</Card>
</CardGrid>
```

### Link Cards

```mdx
<LinkCard
  title="Saiba mais sobre variáveis"
  description="Aprenda sobre tipos de dados e declaração de variáveis em C."
  href="/basics/variables/"
/>

<CardGrid>
  <LinkCard title="Arrays" href="/intermediate/arrays/" />
  <LinkCard title="Ponteiros" href="/intermediate/pointers/" />
</CardGrid>
```

### Tabs

```mdx
<Tabs>
  <TabItem label="Windows">
    ```bash
    gcc -o programa programa.c
    programa.exe
    ```
  </TabItem>
  <TabItem label="macOS / Linux">
    ```bash
    gcc -o programa programa.c
    ./programa
    ```
  </TabItem>
</Tabs>
```

### Tabs sincronizadas (com syncKey)

```mdx
<Tabs syncKey="os">
  <TabItem label="Windows" icon="seti:windows">Conteúdo Windows</TabItem>
  <TabItem label="Linux" icon="linux">Conteúdo Linux</TabItem>
</Tabs>

{/* Outra seção da página — muda junto com a tab acima */}
<Tabs syncKey="os">
  <TabItem label="Windows" icon="seti:windows">Mais conteúdo Windows</TabItem>
  <TabItem label="Linux" icon="linux">Mais conteúdo Linux</TabItem>
</Tabs>
```

### Steps (passos numerados)

```mdx
<Steps>

1. **Instale o compilador**

   Baixe e instale o GCC.

2. **Crie um arquivo `.c`**

   ```c
   #include <stdio.h>
   int main() {
       printf("Hello!\n");
       return 0;
   }
   ```

3. **Compile e execute**

   ```bash
   gcc -o hello hello.c && ./hello
   ```

</Steps>
```

### FileTree (árvore de arquivos)

```mdx
<FileTree>

- src/
  - main.c
  - utils.h
  - utils.c
- Makefile
- README.md

</FileTree>
```

Destaque arquivos com comentários:

```mdx
<FileTree>

- projeto/
  - src/
    - **main.c** arquivo principal
    - utils.h
    - utils.c arquivo auxiliar
  - build/ arquivos compilados
  - Makefile

</FileTree>
```

### Badge (etiqueta)

```mdx
Texto com <Badge text="Novo" variant="tip" /> inline.

<Badge text="Descontinuado" variant="caution" />
<Badge text="Starlight" variant="note" />
<Badge text="Erro" variant="danger" />
<Badge text="Padrão" />
```

**Variantes:** `note` (roxo), `tip` (verde), `caution` (amarelo), `danger` (vermelho), `default` (azul).

### Icon

```mdx
<Icon name="star" color="goldenrod" size="1.5rem" />
<Icon name="rocket" />
<Icon name="warning" />
<Icon name="seti:c" />
```

### Aside como componente

```mdx
<Aside type="tip" title="Minha Dica">
  Conteúdo da aside como componente MDX.
</Aside>
```

---

{/* ============================================ */}
{/* FRONTMATTER: TODAS AS OPÇÕES                 */}
{/* ============================================ */}

## Referência de Frontmatter

```yaml
---
# === Obrigatórios ===
title: Título da Página
description: Descrição para SEO e meta tags.

# === Template ===
template: doc              # 'doc' (padrão) ou 'splash' (sem sidebar)

# === Sidebar ===
sidebar:
  label: Nome na Sidebar   # diferente do title
  order: 1                 # ordem de exibição
  hidden: false            # true para esconder da sidebar
  badge:
    text: Novo
    variant: tip           # note | tip | caution | danger | default

# === Navegação ===
prev:
  label: Página Anterior
  link: /getting-started/introduction/
next:
  label: Próxima Página
  link: /basics/variables/
# prev: false              # desativa link anterior
# next: false              # desativa link próximo

# === Tabela de Conteúdos ===
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
# tableOfContents: false   # desativa completamente

# === SEO e Head ===
head:
  - tag: meta
    attrs:
      property: og:image
      content: https://example.com/imagem.png

# === Outros ===
lastUpdated: 2026-03-24    # data de última atualização
editUrl: false             # desativa link "Editar página"
pagefind: true             # habilita/desabilita busca
draft: false               # true = página só aparece em dev
hero:                      # apenas para template: splash
  tagline: Subtítulo da hero
  actions:
    - text: Começar
      link: /getting-started/introduction/
      icon: right-arrow
      variant: primary     # primary | secondary | minimal
---
```

---

## Resumo Rápido

| Recurso | Arquivo | Sintaxe |
|---------|---------|---------|
| Negrito | `.md` | `**texto**` |
| Itálico | `.md` | `*texto*` |
| Tachado | `.md` | `~~texto~~` |
| Código inline | `.md` | `` `código` `` |
| Bloco de código | `.md` | ` ```linguagem ` |
| Título no código | `.md` | ` ```c title="arquivo.c" ` |
| Linhas destacadas | `.md` | ` ```c {1,3-5} ` |
| Ins/Del no código | `.md` | ` ```c ins={1} del={2} ` |
| Números de linha | `.md` | ` ```c showLineNumbers ` |
| Aside Note | `.md` | `:::note` |
| Aside Tip | `.md` | `:::tip` |
| Aside Caution | `.md` | `:::caution` |
| Aside Danger | `.md` | `:::danger` |
| Aside c/ título | `.md` | `:::tip[Título]` |
| Tabelas | `.md` | `\| col \| col \|` |
| Checklist | `.md` | `- [x] item` |
| Notas de rodapé | `.md` | `texto[^1]` ... `[^1]: nota` |
| Colapsável | `.md` | `<details><summary>` |
| Cards | `.mdx` | `<Card>` |
| Tabs | `.mdx` | `<Tabs>` + `<TabItem>` |
| Steps | `.mdx` | `<Steps>` |
| FileTree | `.mdx` | `<FileTree>` |
| Badge | `.mdx` | `<Badge>` |
| LinkCard | `.mdx` | `<LinkCard>` |
| Icon | `.mdx` | `<Icon>` |