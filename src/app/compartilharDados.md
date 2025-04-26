
aqui então criamos o componente com o codigo

ng generate component components/parent-data

```markdown
# 📚 Aula sobre Compartilhar Dados no Angular

## O que é compartilhar dados?

Compartilhar dados no Angular é o processo de **enviar informações de um componente para outro**.

Isso é essencial para construir aplicações reais, onde vários componentes precisam **se comunicar** entre si.

---

# 🎯 Formas de Compartilhar Dados

No Angular, temos **quatro formas principais**:

| Técnica | Para que serve | Exemplo |
|:---|:---|:---|
| `@Input()` | Passar dados **de um componente pai para um filho** | Um produto passado para um card de produto |
| `@Output()` + `EventEmitter` | Enviar eventos **do filho para o pai** | Um botão de "remover item" dentro de um card |
| Services (Serviços) | Compartilhar dados **entre qualquer componente** | Carrinho de compras, login de usuário |
| Router Parameters | Compartilhar dados **via URL** | Exibir detalhes de um item selecionado |

---

# 1️⃣ Compartilhando dados com `@Input()`

### Como funciona?

- O **componente pai** envia o dado para o **componente filho** usando `@Input()`.
  
### Exemplo:

**Arquivo:** `item.component.ts` (Filho)

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: '<p>{{ nome }}</p>',
})
export class ItemComponent {
  @Input() nome!: string;
}
```

**Arquivo:** `app.component.html` (Pai)

```html
<app-item [nome]="'Computador'"></app-item>
<app-item [nome]="'Mouse'"></app-item>
```

---

# 2️⃣ Compartilhando eventos com `@Output()`

### Como funciona?

- O **filho** emite um evento que o **pai** escuta.

### Exemplo:

**Arquivo:** `item.component.ts` (Filho)

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  template: '<button (click)="notificar()">Clique aqui</button>',
})
export class ItemComponent {
  @Output() clicou = new EventEmitter<string>();

  notificar() {
    this.clicou.emit('O botão foi clicado!');
  }
}
```

**Arquivo:** `app.component.html` (Pai)

```html
<app-item (clicou)="responder($event)"></app-item>
```

**Arquivo:** `app.component.ts` (Pai)

```typescript
export class AppComponent {
  responder(mensagem: string) {
    alert(mensagem);
  }
}
```

---

# 3️⃣ Compartilhar dados com Services

### Como funciona?

- Criamos um **Service** com `@Injectable()`.
- Injetamos esse Service onde precisamos acessar ou alterar os dados.

### Exemplo:

**Arquivo:** `dados.service.ts`

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  mensagem = 'Olá de um serviço!';
}
```

**Arquivo:** `componente-a.component.ts`

```typescript
import { Component } from '@angular/core';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-componente-a',
  template: '<p>{{ dadosService.mensagem }}</p>',
})
export class ComponenteA {
  constructor(public dadosService: DadosService) {}
}
```

**Arquivo:** `componente-b.component.ts`

```typescript
import { Component } from '@angular/core';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-componente-b',
  template: '<button (click)="alterarMensagem()">Mudar Mensagem</button>',
})
export class ComponenteB {
  constructor(private dadosService: DadosService) {}

  alterarMensagem() {
    this.dadosService.mensagem = 'Mensagem alterada!';
  }
}
```

- Quando o botão em `ComponenteB` é clicado, a mensagem exibida em `ComponenteA` também muda! 🎯

---

# 4️⃣ Compartilhar dados pela URL (Router Parameters)

### Como funciona?

- Usamos **parâmetros de rota** para passar dados na URL.

### Exemplo:

**Arquivo:** `app-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: 'detalhes/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**Arquivo:** `detalhes.component.ts`

```typescript
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  template: '<p>Id recebido: {{ id }}</p>',
})
export class DetalhesComponent {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
```

**Arquivo:** Algum botão ou link

```html
<a [routerLink]="['/detalhes', 42]">Ver detalhes do item 42</a>
```

- Quando o usuário clica, ele vai para a URL `/detalhes/42` e o `id` 42 é carregado!

---

# 🚀 Resumo Final

| Técnica | Direção | Melhor usar quando... |
|:---|:---|:---|
| `@Input()` | Pai ➡️ Filho | Enviar informações simples como textos, números, objetos |
| `@Output()` | Filho ➡️ Pai | Informar ações do filho para o pai |
| Service | Qualquer lado | Compartilhar estado ou lógica entre vários componentes |
| Router Parameters | Através da URL | Ao navegar para outra página/component |

---

# 📜 Extra: Boas práticas

- Use `@Input()` e `@Output()` para componentes **diretamente ligados** (relacionados).
- Use **Service** para comunicação entre componentes **que não estão diretamente ligados**.
- Para dados sensíveis ou complexos, combine **Services + Observables**.

---

# 🔥 Dica de Ouro

> Se muitos componentes precisam do mesmo dado (ex: usuário logado, tema escuro/claro, carrinho de compras), crie um **Service central** para gerenciar esses dados! 🚀

---

```
