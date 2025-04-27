

---

# Aula: Como Emitir Eventos em Angular

## 📚 Introdução

No Angular, para **comunicar um componente filho com o componente pai**, usamos o **EventEmitter**.  
Ou seja: **o filho emite um evento** → **o pai recebe** e faz algo com isso.

Essa comunicação é essencial para criar aplicações dinâmicas!

---

## 🎯 Objetivo

Aprender a:

- Declarar um evento no componente filho.
- Emitir esse evento.
- Capturar e tratar o evento no componente pai.

---

## 🛠️ Passo a Passo

### 1. Importar `EventEmitter` e `Output`

No **componente filho**, importe:

```ts
import { Component, Output, EventEmitter } from '@angular/core';
```

### 2. Criar um EventEmitter

Dentro da classe do **componente filho**, declare um atributo do tipo `EventEmitter` e adicione o decorator `@Output`.

```ts
@Output() enviarMensagem = new EventEmitter<string>();
```

- `@Output()` → diz para o Angular que o **pai pode escutar** este evento.
- `new EventEmitter<string>()` → diz que **quando emitirmos**, vamos enviar uma **string**.

### 3. Emitir o evento

Agora, em algum método do componente filho, **chamamos `.emit()`** para disparar o evento:

```ts
enviar() {
  this.enviarMensagem.emit('Olá, pai!');
}
```

- Aqui o filho está mandando a mensagem `"Olá, pai!"` para o pai!

Você pode disparar isso, por exemplo, num clique de botão:

```html
<button (click)="enviar()">Enviar Mensagem</button>
```

---

### 4. Capturar o evento no Pai

No **template do componente pai**, onde você usa o componente filho, escute o evento com `()`.

Exemplo:

```html
<app-filho (enviarMensagem)="receberMensagem($event)"></app-filho>
```

- `(enviarMensagem)` → é o evento que o filho vai emitir.
- `receberMensagem($event)` → é o método no pai que recebe o valor enviado.

### 5. Criar o método no Pai

No **TS do componente pai**, crie o método:

```ts
receberMensagem(mensagem: string) {
  console.log('Mensagem recebida do filho:', mensagem);
}
```

---

## 📋 Exemplo Completo

### Componente Filho (`filho.component.ts`)

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: `<button (click)="enviar()">Enviar Mensagem</button>`
})
export class FilhoComponent {
  @Output() enviarMensagem = new EventEmitter<string>();

  enviar() {
    this.enviarMensagem.emit('Olá, pai!');
  }
}
```

### Componente Pai (`pai.component.ts`)

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  template: `<app-filho (enviarMensagem)="receberMensagem($event)"></app-filho>`
})
export class PaiComponent {
  receberMensagem(mensagem: string) {
    console.log('Mensagem recebida do filho:', mensagem);
  }
}
```

---

## 🚀 Resumo Rápido

| Etapa | Descrição |
|:-----|:----------|
| `@Output` | Marca um evento para ser escutado de fora. |
| `EventEmitter` | Permite emitir um evento manualmente. |
| `(evento)="ação($event)"` no pai | Captura o evento no HTML do pai. |

---

## 🔥 Dicas

- Um EventEmitter pode emitir **qualquer tipo de dado**: `string`, `number`, `boolean`, objetos, etc.
- Você pode ter vários eventos diferentes no mesmo componente filho.
- Lembre de importar `Output` e `EventEmitter` sempre!

---

# 🧠 Praticando

Tente criar:

- Um botão que emite um número aleatório para o pai.
- Um formulário no filho que envia um objeto `{nome: string, idade: number}` para o pai.

---
