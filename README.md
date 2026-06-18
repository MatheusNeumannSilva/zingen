# Zingen

Landing page responsiva para o **Zingen**, um aplicativo fictício de karaokê com foco em descoberta do produto, apresentação de funcionalidades, comparação de planos e chamada para download.

O projeto foi construído como uma página estática, sem etapa de build, usando HTML, CSS modular e JavaScript vanilla para animações pontuais. A proposta é entregar uma experiência visual forte, com hierarquia clara de conteúdo, responsividade e interações leves sem depender de um framework.

![Preview do Zingen](assets/App%20mockups.png)

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como executar localmente](#como-executar-localmente)
- [Arquitetura e decisões técnicas](#arquitetura-e-decisões-técnicas)
- [Responsividade](#responsividade)
- [Acessibilidade e UX](#acessibilidade-e-ux)
- [Animações](#animações)
- [Pontos de manutenção](#pontos-de-manutenção)
- [Sugestões de evolução](#sugestões-de-evolução)

## Sobre o projeto

Zingen é uma landing page de produto para um app de karaokê. A página apresenta a proposta principal do aplicativo, explica recursos como remoção de voz por IA, gamificação, gravação de performances, comunidade, letras sincronizadas e apresenta planos de assinatura.

O fluxo da página foi organizado para conduzir o usuário por uma narrativa simples:

1. Hero com proposta de valor e chamadas para ação.
2. Mockups do app para dar contexto visual ao produto.
3. Seção "Conheça o app" explicando a promessa central.
4. Cards de funcionalidades com ícones e telas do aplicativo.
5. Planos e preços com destaque para o plano Premium.
6. Bloco final de download com botões de lojas.
7. Rodapé com navegação institucional e redes sociais.

## Funcionalidades

- Layout responsivo para mobile e desktop.
- Navegação por âncoras internas.
- Hero com identidade visual própria e onda sonora animada.
- Seção de apresentação do aplicativo.
- Grade de funcionalidades em cards.
- Cards de planos com destaque visual para o plano Premium.
- Call to action para download na Apple Store e Play Store.
- Rodapé com links de produto, empresa, legal e redes sociais.
- Animações de entrada em seções usando GSAP e ScrollTrigger.
- Respeito a `prefers-reduced-motion` para reduzir animações quando o usuário solicita.
- Organização de estilos por responsabilidade, em arquivos CSS separados.

## Tecnologias utilizadas

### Front-end

- **HTML5**: estrutura semântica da landing page.
- **CSS3**: estilos, responsividade, tokens visuais, grid, flexbox, pseudo-elementos e CSS nesting.
- **JavaScript Vanilla**: comportamento interativo sem framework.

### Animações

- **GSAP 3.12.5**: criação de timelines e animações de entrada.
- **ScrollTrigger**: disparo de animações baseado na posição de rolagem.
- **Web Animations API**: fallback de animação para a onda sonora.
- **`requestAnimationFrame`**: animação customizada das barras do SVG da onda sonora.

### Assets e UI

- **SVG**: logotipo, ícones, botões de loja, ilustrações e fundos.
- **PNG**: mockups e imagens promocionais do app.
- **Google Fonts**: carregamento externo de famílias tipográficas usadas no projeto.

### Ferramentas

- **Git**: versionamento do projeto.
- **GitHub**: hospedagem do repositório.
- **Servidor estático local**: recomendado para desenvolvimento e validação no navegador.

## Estrutura de pastas

```text
zingen/
├── assets/
│   ├── icons/
│   │   ├── logo.svg
│   │   ├── bg-hero-desktop.svg
│   │   ├── music-bars.svg
│   │   └── demais ícones e imagens vetoriais
│   ├── App mockups.png
│   ├── Tela 1.png
│   ├── Tela 2.png
│   ├── Tela 3.png
│   └── imagem promocional do download
├── scripts/
│   ├── section-reveal.js
│   └── sound-wave.js
├── styles/
│   ├── index.css
│   ├── global.css
│   ├── utility.css
│   ├── buttons.css
│   ├── social.css
│   ├── header.css
│   ├── hero.css
│   ├── sections.css
│   ├── about.css
│   ├── cards.css
│   ├── features.css
│   ├── pricing.css
│   ├── download.css
│   └── footer.css
├── index.html
└── README.md
```

## Como executar localmente

Como o projeto é estático, não existe instalação de dependências nem processo de build.

### Opção recomendada: servidor estático

Usar um servidor local evita problemas de carregamento de assets e deixa o comportamento mais próximo de um ambiente real.

Com Python:

```powershell
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

Se o comando `python` abrir a Microsoft Store no Windows, use um servidor estático alternativo, como a extensão Live Server do VS Code.

### Opção simples: abrir o HTML

Também é possível abrir diretamente o arquivo:

```text
index.html
```

Essa opção serve para uma validação rápida, mas algumas APIs do navegador podem se comportar diferente quando a página roda via `file://`.

## Arquitetura e decisões técnicas

### CSS modular

O arquivo `styles/index.css` centraliza os imports dos arquivos de estilo. Cada arquivo CSS tem uma responsabilidade específica, o que facilita manutenção e reduz o risco de alterar uma seção quebrando outra.

Exemplos:

- `global.css`: reset, tokens, tipografia, cores e regras globais.
- `utility.css`: classes utilitárias de layout e espaçamento.
- `buttons.css`: sistema de botões.
- `cards.css`: base visual dos cards.
- `hero.css`: composição da primeira dobra.
- `features.css`: grade desktop de funcionalidades.
- `pricing.css`: planos, preços e destaque do Premium.
- `download.css`: chamada final para download.
- `footer.css`: rodapé e navegação secundária.

### Tokens visuais

As principais decisões de design ficam concentradas em variáveis CSS dentro de `:root`, incluindo:

- cores de fundo, superfície, borda e texto;
- cores de marca;
- família tipográfica;
- pesos de fonte;
- escala de tamanhos;
- espaçamentos verticais e horizontais.

Isso torna o projeto mais fácil de ajustar sem precisar procurar valores espalhados por todos os componentes.

### HTML estático

A página usa HTML direto, sem framework ou renderização no servidor. Essa escolha reduz complexidade, melhora portabilidade e é suficiente para o escopo atual: uma landing page institucional/promocional.

### JavaScript progressivo

O conteúdo principal não depende de JavaScript para existir. Os scripts adicionam movimento e refinamento visual, mas a página continua legível caso as animações não carreguem.

## Responsividade

O layout foi pensado em duas camadas principais:

- **Mobile-first**: estrutura base otimizada para telas menores.
- **Desktop**: ajustes aplicados com media queries a partir de `80em`.

Principais adaptações:

- container central com largura máxima variável;
- ocultação de elementos desktop em mobile com `.desktop-only`;
- grid de funcionalidades mais elaborado em telas grandes;
- hero com imagem de fundo específica para desktop;
- ajuste de escala tipográfica e espaçamentos no breakpoint principal.

## Acessibilidade e UX

O projeto já possui alguns cuidados importantes:

- uso de `alt` em imagens relevantes;
- imagens decorativas com `alt=""`;
- links com `aria-label` quando o texto visual é gerado via CSS;
- navegação por links internos;
- suporte a `prefers-reduced-motion` nos scripts de animação;
- contraste alto entre fundo escuro e texto claro;
- CTAs visíveis nas seções principais.

Ponto de atenção: alguns links ainda usam `href="#"`, principalmente em botões de assinatura, lojas e páginas institucionais. Em um produto real, esses links devem ser substituídos por URLs finais ou rotas válidas.

## Animações

O projeto possui duas frentes de animação:

### Onda sonora

Arquivo: `scripts/sound-wave.js`

Esse script carrega o SVG da onda sonora, divide o path composto em barras individuais e anima a escala vertical de cada barra com `requestAnimationFrame`. Caso o SVG não possa ser processado, existe um fallback usando a Web Animations API.

### Revelação de seções

Arquivo: `scripts/section-reveal.js`

Esse script usa GSAP e ScrollTrigger para animar:

- textos e mockup da seção "Conheça o app";
- cards de funcionalidades;
- título e cards da seção de preços.

Se GSAP ou ScrollTrigger não estiverem disponíveis, o script encerra sem quebrar a página.

## Pontos de manutenção

- O projeto depende de CDNs externos para GSAP, ScrollTrigger e Google Fonts.
- Não existe pipeline de build, minificação ou bundle.
- Não existe suíte automatizada de testes.
- O CSS usa recursos modernos como CSS nesting; vale validar suporte de navegador caso o público-alvo inclua browsers antigos.
- Os preços, nomes dos planos e textos comerciais estão fixos no HTML.
- Links com `href="#"` precisam ser tratados antes de uma publicação real.
- Assets com nomes contendo espaços funcionam, mas exigem mais cuidado em referências e automações.

## Sugestões de evolução

- Corrigir links temporários e apontar CTAs para destinos reais.
- Adicionar metatags de SEO e Open Graph.
- Criar favicon e manifest para melhorar acabamento de produto.
- Adicionar um `package.json` com scripts de desenvolvimento, formatação e validação.
- Introduzir uma etapa de lint/format para HTML, CSS e JavaScript.
- Otimizar imagens para reduzir peso da página.
- Publicar em GitHub Pages, Vercel ou outro host estático.
- Adicionar captura de tela real da landing page no README.
- Separar dados de planos e funcionalidades em uma estrutura reutilizável caso o projeto evolua para framework.

## Licença

Este repositório não possui uma licença definida no momento. Antes de reutilizar, distribuir ou publicar como produto real, adicione uma licença adequada ao objetivo do projeto.
