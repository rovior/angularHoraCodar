
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importando os dois compoenentes que vamos usar 
/*
agora trabalhando com requisições vamos ter que baixar dois pacotes: HttpClient e HttpHeadersab
baixamos então esses pacotes com: npm i json-server
Neste exemplo utilizamos uma API local para simular as request, com json-serve
Por último, é necesário inicializar o módulo HttpClientModule em app.module.ts;
*/
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent},
  { path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
 
export class AppRoutingModule{}



/**********************************
 * 
---

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
```
✅ Aqui estamos **importando** duas coisas:
- `NgModule`: para criar um módulo Angular.
- `RouterModule` e `Routes`: para configurar o sistema de **rotas** da aplicação.

---

```typescript
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
```
✅ Aqui estamos **importando os componentes** que serão usados nas rotas:
- `FirstComponentComponent` (provavelmente o componente inicial da aplicação).
- `ListRenderComponent` (um componente que deve listar algo, como uma lista de itens).

---

```typescript
const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent},
];
```
✅ Agora estamos **criando o array de rotas**:

- `path: ''` → **Rota vazia**, ou seja, quando o usuário acessar **só o domínio** (ex: `localhost:4200`), ele verá o `FirstComponentComponent`.
- `path: 'list'` → Quando acessar `/list` (ex: `localhost:4200/list`), o Angular vai renderizar o `ListRenderComponent`.

Ou seja:
| URL | Componente carregado |
|:---|:---|
| `/` | FirstComponentComponent |
| `/list` | ListRenderComponent |

---

```typescript
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
```
✅ Aqui estamos criando um **módulo Angular** (`@NgModule`):

- `declarations: []` → **Nada a declarar** aqui, porque este módulo só cuida de rotas, não de componentes.
- `imports: [RouterModule.forRoot(routes)]` → 
  - Importamos o **RouterModule**, configurado com as **rotas** que definimos (`routes`).
  - Usamos o `.forRoot(routes)` porque esse é o **roteador principal** da aplicação.
- `exports: [RouterModule]` → Estamos **exportando o RouterModule** para que ele possa ser usado no `AppModule` e em outros módulos que precisarem.

---

```typescript
export class AppRoutingModule{}
```
✅ Finalmente, estamos **criando e exportando a classe `AppRoutingModule`**.

- É esse módulo que você importa no `app.module.ts` para ativar o sistema de rotas da aplicação.

---

# Resumindo:

Este arquivo faz o seguinte:
- Configura duas rotas (`/` e `/list`).
- Prepara o sistema de roteamento da aplicação.
- Cria o módulo `AppRoutingModule` para gerenciar essas rotas.

> **Dica de prática:** Para o roteamento funcionar, lembre-se que no `app.component.html` precisa ter um `<router-outlet>`! Senão o Angular não sabe onde renderizar os componentes das rotas.

---

Quer que eu também te monte um **fluxo visual** (tipo um diagrama) mostrando como essas rotas se conectam? 🎨🚀
Acho que vai te ajudar a enxergar ainda melhor! Quer? 🎯
 * 
 ***********************************************/




/**********************************


Aqui está:

```markdown
# Aula Completa sobre Router no Angular

## O que é o Router no Angular?

O **Router** do Angular é o sistema que permite a **navegação entre páginas** ou **componentes** dentro da aplicação **Single Page Application (SPA)**.

Em uma SPA:
- Não há recarregamento de página.
- Tudo acontece dinamicamente dentro da mesma aplicação.
- A navegação muda só o que for necessário na tela.

---

## Conceitos principais

- **Rotas**: Configurações que definem para qual componente o Angular deve ir ao acessar uma URL.
- **RouterLink**: Diretiva usada para navegar usando links no HTML.
- **RouterOutlet**: Lugar no HTML onde os componentes serão renderizados conforme a rota.

---

## Como configurar o Router?

### 1. Importar o RouterModule

No seu `app.module.ts`, importe `RouterModule` e `Routes`:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Definimos as rotas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
```

O método `forRoot()` diz que estamos configurando o roteamento principal da aplicação.

---

### 2. Definindo rotas

Exemplo: temos dois componentes:

- `HomeComponent`
- `SobreComponent`

Definimos as rotas assim:

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent }
];
```

Explicação:
| Caminho | Componente que será carregado |
| :--- | :--- |
| `/` | HomeComponent |
| `/sobre` | SobreComponent |

---

### 3. Usar o RouterOutlet

No `app.component.html`, coloque o `RouterOutlet`:

```html
<router-outlet></router-outlet>
```

👉 O `router-outlet` é o espaço onde o Angular vai **inserir o componente** da rota atual.

---

### 4. Navegar entre páginas

Existem duas formas:

#### a) Usar `routerLink` no HTML

```html
<a routerLink="/">Home</a>
<a routerLink="/sobre">Sobre</a>
```

- Não usa `href`, usa `routerLink`!
- Isso evita recarregar a página.

#### b) Navegar programaticamente no TypeScript

No seu componente:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

navegarParaSobre() {
  this.router.navigate(['/sobre']);
}
```

HTML:

```html
<button (click)="navegarParaSobre()">Ir para Sobre</button>
```

---

## Wildcard Route (Página Não Encontrada)

Você pode criar uma rota para capturar URLs inválidas:

```typescript
{ path: '**', component: PaginaNaoEncontradaComponent }
```

Assim, qualquer URL não configurada vai cair no `PaginaNaoEncontradaComponent`.

---

## Redirecionamento de Rotas

Se quiser redirecionar, exemplo: acessar `/home` e cair em `/`:

```typescript
{ path: 'home', redirectTo: '', pathMatch: 'full' }
```

O `pathMatch: 'full'` é necessário para redirecionar apenas quando o caminho for exatamente igual.

---

## Roteamento com parâmetros

### Enviando parâmetros na rota

Exemplo: uma rota de perfil de usuário:

```typescript
{ path: 'usuario/:id', component: UsuarioComponent }
```

- `:id` é um **parâmetro dinâmico**.

Navegando:

```html
<a [routerLink]="['/usuario', 5]">Perfil do Usuário 5</a>
```

### Pegando o parâmetro no componente

No `UsuarioComponent`:

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.params.subscribe(params => {
    console.log(params['id']); // Aqui você usa o parâmetro
  });
}
```

---

## Roteamento com Children (Rotas Filhas)

Para criar rotas dentro de outras:

```typescript
const routes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]
  }
];
```

- `/admin/dashboard`
- `/admin/usuarios`

No `AdminComponent`, você também precisa ter um `<router-outlet>` para carregar as rotas filhas.

---

## Roteamento Lazy Loading (Carregar módulos sob demanda)

Para projetos grandes, você pode carregar módulos só quando necessários:

```typescript
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];
```

Isso **melhora o desempenho** da aplicação!

---

## Guardas de Rotas (Route Guards)

Quer proteger uma rota (por exemplo, só logados podem acessar)? Use **Guards**.

Exemplo de Guard básico:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('usuarioLogado')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

Depois na rota:

```typescript
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

---

# Resumo Final

✅ Configurar `RouterModule` e `Routes`.  
✅ Usar `<router-outlet>` para exibir os componentes.  
✅ Navegar com `[routerLink]` ou `router.navigate()`.  
✅ Tratar páginas 404 com `path: '**'`.  
✅ Passar e receber parâmetros nas rotas.  
✅ Criar rotas filhas e Lazy Loading para otimização.  
✅ Proteger rotas com Guards.

---

# Exercício para Praticar

1. Crie três componentes: `HomeComponent`, `ContatoComponent`, `ProdutosComponent`.
2. Configure o roteamento para esses três componentes.
3. Crie um link de navegação para cada página usando `routerLink`.
4. Adicione um parâmetro na rota de Produtos para abrir detalhes de um produto (`/produtos/1`).
5. Faça uma rota coringa para exibir uma página 404 personalizada.

---
```

---



*/