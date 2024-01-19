# Sorteio-Spider


Este projeto é uma aplicação web que realiza sorteios de números aleatórios. O usuário pode escolher a quantidade de números a serem sorteados e a quantidade de ganhadores.

## Como funciona

O código JavaScript é encapsulado em uma função anônima auto-executável para evitar conflitos de escopo. Aqui está uma explicação detalhada de cada parte do código:

### Seleção de Elementos

Os elementos HTML necessários são selecionados usando `document.querySelector` e armazenados em constantes para uso posterior.

```javascript
const btnSorte = document.querySelector(".s-hero-mid .btn-sortear");
const paiMid = document.querySelector(".s-hero-mid .campos");
const sectionPai = document.querySelector(".s-hero-mid .ganhador");
```

### Criação do Botão Voltar

Um botão "Voltar" é criado dinamicamente, que quando clicado, recarrega a página.

```javascript
const btnVoltar = document.createElement("button");
btnVoltar.classList = "btn-sortear volt";
btnVoltar.innerText = "VOLTAR";
btnVoltar.addEventListener("click", () => location.reload(true));
```

### Função getNumber

A função `getNumber` gera um número aleatório ou um array de números aleatórios, dependendo da quantidade de ganhadores.

```javascript
function getNumber(numMax, ganhadores) {
    // ...
}
```

### Função contagemRegresiva

A função `contagemRegresiva` exibe uma contagem regressiva na tela antes de revelar o(s) número(s) vencedor(es).

```javascript
function contagemRegresiva(n) {
    // ...
}
```

### Função getDomGanhador

A função `getDomGanhador` atualiza o DOM para exibir o(s) número(s) vencedor(es).

```javascript
function getDomGanhador(resul) {
    // ...
}
```

### Função sortear

A função `sortear` é o ponto de entrada principal. Ela lê os valores dos campos de entrada, valida-os e, em seguida, inicia o processo de sorteio.

```javascript
function sortear() {
    // ...
}
```

### Event Listener

Finalmente, um event listener é adicionado ao botão de sorteio para iniciar o sorteio quando clicado.

```javascript
btnSorte.addEventListener("click", sortear);
```