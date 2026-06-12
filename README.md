# 🐾 PetLux - Banho e Tosa Premium

## 📖 Sobre o Projeto

PetLux é um site institucional para uma Pet Shop Premium especializada em Banho e Tosa. O projeto foi desenvolvido utilizando apenas HTML5, CSS3 e JavaScript puro, com foco em experiência do usuário (UX), design moderno, responsividade e interatividade.

O objetivo do site é apresentar os serviços da empresa e facilitar o agendamento online de atendimentos para clientes.

OBS: A produção inteira desse projeto foi feita pelo ChatGPT para fins de estudos do Têcnico de TI, aonde eu escolhi o ChatGPT e Gemini para fazer uma comparação do qual entregaria um melhor resultado com o mesmo prompt.

Prompt Site Pet Shop de Alto Padrão (especialista em Banho e Tosa)

No bloco [CONTEXTO]: Adicione que o site deve focar na experiência do usuário (UX). Os cards de serviços devem exibir claramente o tempo estimado de cada procedimento (Ex: Banho e Tosa Higiênica - 1h30) e um selo de "Mais Vendido" no serviço principal para induzir o cliente a escolher aquela opção. Adicionar uma seção de comentários de clientes que pagaram os serviços da pet shop;
No bloco [RESTRIÇÕES DE CSS]: Exija que a interface use técnicas modernas de tipografia (fontes sem serifa limpas) e que as cores neon dos botões tenham um efeito de pulsação suave em CSS (keyframes) para guiar o olhar do usuário até a ação de agendar. Como o site e sobre uma Pet Shop cores claras seria uma escolha ideal para cor padrão, logo crie um root para cores do tema claro e tema escuro;
No bloco [RESTRIÇÕES DE JS]: Adicione uma regra de segurança e UX. No formulário de agendamento, o JavaScript deve impedir que o usuário selecione uma data anterior ao dia de hoje no calendário. Além disso, crie uma máscara simples no campo de telefone enquanto o usuário digita. Adicionar botão para mudança de tema claro e escuro;
quero que monte os codigos de HTML, CSS e JS. Como tambem montar um esquema de como ficou as organizações de arquivos nas pastas .

---

## ✨ Funcionalidades

### 🎨 Interface Moderna

* Layout responsivo para Desktop, Tablet e Smartphone.
* Design premium com foco em Pet Shops de alto padrão.
* Tipografia moderna utilizando Google Fonts (Poppins).
* Efeitos visuais suaves e animações.

### 🌗 Tema Claro e Escuro

* Alternância entre Light Mode e Dark Mode.
* Preferência salva automaticamente utilizando LocalStorage.
* Alteração dinâmica das variáveis CSS.

### 📱 Menu Mobile

* Menu hambúrguer para dispositivos móveis.
* Fechamento automático ao selecionar uma opção.
* Fechamento ao clicar fora do menu.

### 🐶 Serviços

* Cards informativos contendo:

  * Nome do serviço
  * Descrição
  * Preço
  * Tempo estimado
* Destaque para o serviço mais vendido.

### ⭐ Depoimentos

* Exibição de avaliações de clientes.
* Sistema visual de estrelas.
* Cards modernos e responsivos.

### 📅 Agendamento

* Formulário de agendamento online.
* Validação obrigatória dos campos:

  * Nome
  * Telefone
  * Serviço
  * Data
* Bloqueio de datas anteriores ao dia atual.
* Máscara automática para telefone.

### ⬆️ Navegação

* Scroll suave.
* Botão "Voltar ao Topo".
* Destaque automático da seção ativa no menu.

### ✨ Animações

* Scroll Reveal implementado em JavaScript puro.
* Efeito Neon Pulsante nos botões CTA.
* Hover Effects nos cards.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Bibliotecas Externas

* Google Fonts

  * Poppins

* Font Awesome

  * Ícones do sistema

---

## 📂 Estrutura do Projeto

```text
PetLux/
│
├── index.html
│
├── styles/
│   └── style.css
│
├── scripts/
│   └── script.js
│
├── assets/
│   └── img/
│       └── dogPetShop.png
│
└── README.md
```

---

## 🎯 Funcionalidades JavaScript

### Alternância de Tema

Permite alternar entre tema claro e escuro utilizando:

```javascript
localStorage
```

---

### Validação de Datas

Impede o usuário de selecionar datas anteriores ao dia atual:

```javascript
dateInput.min = today;
```

---

### Máscara de Telefone

Formata automaticamente o telefone para:

```text
(51) 99999-9999
```

---

### Scroll Reveal

Exibe elementos gradualmente conforme o usuário navega pela página.

---

### Botão Voltar ao Topo

Aparece automaticamente após o usuário rolar a página.

---

## 🎨 Personalização

As cores principais do sistema podem ser alteradas diretamente no arquivo:

```text
styles/style.css
```

Variáveis:

```css
:root {
    --primary: #4CAF50;
    --secondary: #8EF6B1;
    --background: #F8FAFC;
    --card: #FFFFFF;
    --text: #1F2937;
}
```

Tema escuro:

```css
[data-theme="dark"] {
    --primary: #22C55E;
    --background: #0F172A;
    --card: #1E293B;
    --text: #F8FAFC;
}
```

---

## 🚀 Como Executar

1. Faça o download do projeto.

2. Abra a pasta:

```text
PetLux
```

3. Execute o arquivo:

```text
index.html
```

Ou utilize a extensão:

```text
Live Server
```

do Visual Studio Code.

---

## 📈 Melhorias Futuras

* Integração com WhatsApp.
* Integração com banco de dados.
* Painel administrativo.
* Sistema de login para clientes.
* Área exclusiva para acompanhamento de agendamentos.
* Integração com API de pagamentos.
* Sistema de avaliação real dos clientes.
* Upload de fotos dos pets.

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos e de aprendizado de desenvolvimento web utilizando HTML, CSS e JavaScript puro.

---

## 📄 Licença

Este projeto pode ser utilizado para estudos, modificações e aprimoramentos sem restrições.
