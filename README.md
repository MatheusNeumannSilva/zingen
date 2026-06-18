<div align="center">
  <img src="assets/icons/logo.svg" alt="Zingen" width="180" />

  <h1>Zingen</h1>

  <p>
    Landing page responsiva para um aplicativo de karaokê que usa inteligência
    artificial para transformar músicas em experiências de canto.
  </p>

  <p>
    <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-FC4A1A?style=for-the-badge" alt="Status: em desenvolvimento" />
    <img src="https://img.shields.io/badge/HTML5-ESTRUTURA-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-ESTILOS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JAVASCRIPT-INTERAÇÕES-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

  <a href="https://github.com/MatheusNeumannSilva/zingen">Ver repositório</a>
</div>

---

## 🎤 Sobre o projeto

O **Zingen** apresenta um aplicativo fictício de karaokê por meio de uma página promocional moderna e responsiva. A interface conduz o visitante da proposta do produto até seus recursos, planos e chamada para download.

O projeto é estático e não exige build: toda a estrutura foi feita com HTML, CSS modular e JavaScript puro. As animações de entrada usam GSAP e ScrollTrigger carregados por CDN.

## ✨ Funcionalidades

- navegação interna entre as seções da página;
- hero com onda sonora animada;
- apresentação dos recursos e telas do aplicativo;
- cards de funcionalidades com layout responsivo;
- comparação entre os planos Básico, Premium e Família;
- chamada para download nas lojas de aplicativos;
- animações de entrada ativadas pela rolagem;
- suporte a `prefers-reduced-motion`;
- rodapé com navegação institucional e redes sociais.

## 🛠️ Tecnologias

### Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Animações

![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![ScrollTrigger](https://img.shields.io/badge/ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Web Animations API](https://img.shields.io/badge/Web_Animations_API-5A0FC8?style=flat-square&logo=webcomponents.org&logoColor=white)
![requestAnimationFrame](https://img.shields.io/badge/requestAnimationFrame-333333?style=flat-square&logo=javascript&logoColor=F7DF1E)

### Recursos e ferramentas

![SVG](https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logo=svg&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

## 🗂️ Arquitetura do projeto

```text
zingen/
│
├── assets/                         ← Imagens e recursos visuais
│   ├── icons/                      ← Logo, ícones, botões e fundos em SVG
│   ├── App mockups.png             ← Mockups principais do aplicativo
│   ├── Tela 1.png                  ← Tela usada nos cards de recursos
│   ├── Tela 2.png
│   └── Tela 3.png
│
├── scripts/                        ← Comportamentos e animações
│   ├── section-reveal.js           ← Entradas com GSAP e ScrollTrigger
│   └── sound-wave.js               ← Animação da onda sonora do hero
│
├── styles/                         ← CSS separado por responsabilidade
│   ├── index.css                   ← Ponto central dos imports
│   ├── global.css                  ← Reset, tokens e estilos globais
│   ├── utility.css                 ← Classes utilitárias
│   ├── buttons.css                 ← Botões e variações
│   ├── header.css                  ← Cabeçalho e navegação
│   ├── hero.css                    ← Seção principal
│   ├── about.css                   ← Apresentação do aplicativo
│   ├── cards.css                   ← Base visual dos cards
│   ├── features.css                ← Grade de funcionalidades
│   ├── pricing.css                 ← Planos e preços
│   ├── download.css                ← Chamada para download
│   ├── footer.css                  ← Rodapé
│   ├── sections.css                ← Regras compartilhadas entre seções
│   └── social.css                  ← Ícones das redes sociais
│
├── index.html                      ← Estrutura completa da landing page
└── README.md                       ← Documentação do projeto
```

## 🎨 Decisões técnicas

- **CSS modular:** cada seção possui seu próprio arquivo e `styles/index.css` centraliza os imports.
- **Mobile-first:** o layout base atende telas menores e ganha uma composição ampliada a partir de `80em`.
- **JavaScript progressivo:** o conteúdo permanece acessível mesmo se os scripts ou CDNs não carregarem.
- **Movimento acessível:** as animações são desativadas quando o sistema sinaliza preferência por movimento reduzido.
- **Sem dependências locais:** GSAP, ScrollTrigger e Google Fonts são carregados externamente.

## 🚀 Como executar

O projeto não possui dependências para instalar nem processo de build.

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusNeumannSilva/zingen.git
   ```

2. Entre na pasta:

   ```bash
   cd zingen
   ```

3. Inicie um servidor estático. Com Python:

   ```bash
   python -m http.server 5500
   ```

4. Acesse `http://localhost:5500` no navegador.

Também é possível abrir `index.html` diretamente, mas o servidor local é recomendado porque a animação da onda sonora carrega um arquivo SVG via `fetch`.

## ⚠️ Estado atual

O projeto ainda usa links temporários (`href="#"`) nos botões de assinatura, lojas e redes sociais. Eles precisam ser substituídos por destinos reais antes de uma publicação final. Também não há testes automatizados, pipeline de build ou licença definida.

---

<div align="center">
  Desenvolvido por <a href="https://github.com/MatheusNeumannSilva">Matheus Neumann</a>
</div>
