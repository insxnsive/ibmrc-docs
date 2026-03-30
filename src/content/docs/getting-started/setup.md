---
title: Configurando o Ambiente
description: Instale e configure um compilador C e uma IDE.
---

# JetBrains CLion

1. Baixe o [CLion](https://www.jetbrains.com/clion/) no site da JetBrains.
2. Instale normalmente — o CLion já vem com suporte completo a C/C++, incluindo compilador, depurador e CMake integrados.
3. Crie um novo projeto C e comece a programar.

:::tip
Estudantes podem obter uma licença gratuita do CLion pelo [JetBrains Education](https://www.jetbrains.com/community/education/).
:::

# Dev-C++

1. Baixe o [Dev-C++](https://www.embarcadero.com/free-tools/dev-cpp) (versão Embarcadero ou Orwell).
2. Instale normalmente — o Dev-C++ já inclui o compilador MinGW/GCC.
3. Crie um novo arquivo fonte (.c) e comece a programar.

### Opcional: Compilador C

**As IDEs acima já incluem compilador.** Caso queira instalar um compilador separadamente:
:::note
Use-o apenas se precisar de ferramentas Unix no Windows ou se preferir trabalhar exclusivamente pela linha de comando.
:::

### Windows

O GCC pode ser instalado de forma independente via [MinGW-w64](https://www.mingw-w64.org/) ou pelo instalador [w64devkit](https://github.com/skeeto/w64devkit).

### macOS

Instale o Xcode Command Line Tools:
```bash
xcode-select --install
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install build-essential
```

## Verificar Instalação

Abra um terminal e execute:

```bash
gcc --version
```

Você deve ver as informações da versão do compilador.

---

## Opcional: VS Code

Se preferir usar o **Visual Studio Code**, instale a extensão **C/C++** da Microsoft para syntax highlighting, IntelliSense e depuração.

## Opcional: MSYS2 (Windows)

Caso precise de um ambiente Unix-like no Windows (útil para ferramentas de linha de comando, Makefiles, etc.):

1. Instale o [MSYS2](https://www.msys2.org/).
2. Abra o terminal do MSYS2 e execute:
   ```bash
   pacman -S mingw-w64-ucrt-x86_64-gcc
   ```
3. Adicione o compilador ao PATH do sistema.
