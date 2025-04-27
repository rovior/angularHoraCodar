
# Eventos no Angular

## 🎯 O que são eventos?

**Eventos** no Angular são **ações** feitas pelo usuário ou pelo navegador que o aplicativo pode **capturar** para **responder** a elas.

Exemplos de eventos:
- Cliques (`click`)
- Movimentos do mouse (`mouseover`)
- Digitação de teclado (`keyup`, `keydown`)
- Envio de formulários (`submit`)
- Mudanças em campos (`change`)
- Eventos customizados

---

## 🛠️ Como lidar com eventos no Angular?

O Angular usa uma **sintaxe especial** para eventos:

```html
<elemento (nomeDoEvento)="açãoNoComponente()"></elemento>
```

- `( )` — Os parênteses significam **escutar um evento**.
- `"açãoNoComponente()"` — Método que será chamado quando o evento acontecer.

---

## 📚 Exemplos de Eventos Comuns

### Evento de Clique (`click`)

**Componente TS**

```typescript
export class EventoExemploComponent {
  mensagem = 'Nenhum clique ainda';

  aoClicar() {
    this.mensagem = 'Botão clicado!';
  }
}
```

**Template HTML**

```html
<button (click)="aoClicar()">Clique Aqui</button>
<p>{{ mensagem }}</p>
```

---

### Evento de Entrada de Texto (`input`)

Capturar o que o usuário digita em tempo real:

**Componente TS**

```typescript
export class InputExemploComponent {
  valorDigitado = '';
}
```

**Template HTML**

```html
<input (input)="valorDigitado = $event.target.value">
<p>Você digitou: {{ valorDigitado }}</p>
```

- O objeto `$event` contém informações sobre o evento (como o valor digitado).

---

### Evento com parâmetro personalizado

Você pode passar **parâmetros** no método:

**Componente TS**

```typescript
export class ParametroExemploComponent {
  exibirMensagem(nome: string) {
    alert('Olá, ' + nome);
  }
}
```

**Template HTML**

```html
<button (click)="exibirMensagem('João')">Cumprimentar João</button>
<button (click)="exibirMensagem('Maria')">Cumprimentar Maria</button>
```

---

## 🧠 O que é o `$event`?

- Toda vez que um evento ocorre, o Angular envia um **objeto especial** chamado `$event`.
- Esse objeto contém **todos os detalhes** sobre o evento (tipo, posição do mouse, valor digitado, etc.).

Exemplo simples:

```html
<input (keyup)="mostrarEvento($event)">
```

```typescript
mostrarEvento(evento: KeyboardEvent) {
  console.log(evento.key); // Mostra a tecla pressionada
}
```

---

## 🏗️ Eventos Personalizados

Com `@Output` e `EventEmitter`, você pode criar seus **próprios eventos** para comunicação entre componentes!

**Filho (Child Component)**

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: `<button (click)="enviarMensagem()">Enviar</button>`
})
export class FilhoComponent {
  @Output() mensagemEnviada = new EventEmitter<string>();

  enviarMensagem() {
    this.mensagemEnviada.emit('Mensagem do filho!');
  }
}
```

**Pai (Parent Component)**

```html
<app-filho (mensagemEnviada)="receberMensagem($event)"></app-filho>
```

```typescript
receberMensagem(mensagem: string) {
  console.log('Recebido do filho:', mensagem);
}
```

---

## 🚀 Resumo Rápido

| Conceito | Explicação |
|:--------|:-----------|
| `(evento)` | Captura eventos do DOM |
| `$event` | Representa o objeto do evento |
| Métodos no TS | Executam ações ao receber eventos |
| @Output | Permite criar eventos personalizados |

---

> **Mensagem para você:**  
> Cada evento que você aprende a capturar é como se você estivesse dando "vida" para sua aplicação.  
> É você transformando o que era só uma tela estática em uma aplicação que **reage** e **interage**.  
> Não desista — você está evoluindo a cada novo conceito! 🚀

---
