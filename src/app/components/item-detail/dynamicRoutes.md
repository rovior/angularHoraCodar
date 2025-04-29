# Aula de Rotas Dinâmicas no Angular

## O que são Rotas Dinâmicas?

Rotas dinâmicas permitem que você crie caminhos que variam de acordo com algum valor, como o ID de um item. Isso é ótimo para criar páginas de detalhes, edição, etc.

Exemplo clássico:

```
/detalhes/1
/detalhes/2
/detalhes/3
```

Cada URL mostra detalhes de um item diferente!

---

## 1. Configurando uma Rota Dinâmica

No seu arquivo `app-routing.module.ts`, você cria uma rota com `:parametro`.

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

> **Nota:** O `:id` é um "parâmetro de rota".

---

## 2. Pegando o Parâmetro dentro do Component

No seu `detalhes.component.ts`, você precisa acessar o parâmetro via `ActivatedRoute`:

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
```

- `snapshot.paramMap.get('id')` pega o valor diretamente.
- Exemplo: se acessar `/detalhes/5`, então `id = '5'`.

---

## 3. Exibindo o Valor no HTML

No `detalhes.component.html`:

```html
<h1>Detalhes do item com ID: {{ id }}</h1>
```

Simples!

---

## 4. Navegando com Links Dinâmicos

Se quiser criar links para essas rotas dinâmicas, use:

```html
<a [routerLink]="['/detalhes', animal.id]">Ver detalhes</a>
```

Esse `routerLink` monta a URL assim: `/detalhes/1`, `/detalhes/2`, etc.

---

## 5. Melhorando com `params` (Forma Reativa)

Em vez de usar `snapshot`, é possível se inscrever nos `params`, caso o parâmetro mude dinâmicamente:

```typescript
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
  });
}
```

Assim, mesmo que você já esteja no componente e mude de rota, ele atualiza corretamente.

---

## 6. Exemplo Completo

**Arquivo:** `app-routing.module.ts`

```typescript
const routes: Routes = [
  { path: 'detalhes/:id', component: DetalhesComponent },
];
```

**Arquivo:** `detalhes.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
}
```

**Arquivo:** `detalhes.component.html`

```html
<h1>Detalhes do item com ID: {{ id }}</h1>
```

**Arquivo de link (por exemplo):**

```html
<a [routerLink]="['/detalhes', animal.id]">Ver detalhes do {{ animal.name }}</a>
```

---

## 7. Dicas Finais

- Sempre trate se o `id` puder ser `null` ou inválido.
- Você pode pegar vários parâmetros, ex: `/detalhes/:id/:nome`
- Ótimo para fazer páginas de Detalhes, Perfil, Produto, etc.

---

## 8. Extra: Exemplo com vários parâmetros

No `app-routing.module.ts`:

```typescript
{ path: 'produto/:id/:categoria', component: ProdutoComponent }
```

Pegando os dois:

```typescript
this.route.paramMap.subscribe(params => {
  this.id = params.get('id');
  this.categoria = params.get('categoria');
});
```

**Link com dois parâmetros:**

```html
<a [routerLink]="['/produto', produto.id, produto.categoria]">Detalhes</a>
```

---

# Fim da aula! 🚀

---

Se quiser, posso montar um projeto de exemplo para você treinar. Que
