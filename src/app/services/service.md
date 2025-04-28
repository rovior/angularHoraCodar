foir criado com: ng generate service services/list

```markdown
# Aula Completa sobre Services no Angular

## O que são Services no Angular?

Services são **classes** que têm como objetivo **compartilhar dados e funcionalidades** entre diferentes componentes da aplicação.

- Eles ajudam a manter o código **organizado**, **reutilizável** e **separado** (seguindo o princípio da **responsabilidade única**).
- São usados para **lógica de negócio**, **regras de sistema**, **requisições HTTP**, **armazenamento de dados** e muito mais.

👉 **Resumo**:  
Service é onde você coloca funções ou dados que vários componentes vão precisar.

---

## Por que usar Services?

- Compartilhar informações entre componentes.
- Evitar duplicação de código.
- Manter componentes "enxutos" e focados só na interface.
- Melhorar a manutenção do código.
- Facilitar testes.

---

## Como criar um Service no Angular?

### 1. Criando com Angular CLI

O jeito mais rápido:

```bash
ng generate service nome-do-service
```
ou
```bash
ng g s nome-do-service
```

Exemplo:

```bash
ng g s user
```

Isso cria:
- `user.service.ts`
- `user.service.spec.ts` (arquivo de testes)

---

### 2. Estrutura de um Service

Um service é apenas uma **classe normal TypeScript** com o decorator `@Injectable()`.

Exemplo:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserName() {
    return "Aluno Angular";
  }
}
```

O decorator `@Injectable({ providedIn: 'root' })` diz ao Angular que o service está disponível **globalmente** na aplicação, sem precisar registrá-lo manualmente no `providers` do `app.module.ts`.

---

## Como usar um Service em um Componente?

### 1. Importar o service

No seu componente, importe o service:

```typescript
import { UserService } from '../user.service';
```

### 2. Injetar o service no construtor

Use o construtor da classe para injetar o service:

```typescript
constructor(private userService: UserService) {}
```

### 3. Usar o service

Agora você pode usar as funções do service:

```typescript
nomeUsuario: string = '';

ngOnInit(): void {
  this.nomeUsuario = this.userService.getUserName();
}
```

### HTML:

```html
<p>Nome do Usuário: {{ nomeUsuario }}</p>
```

---

## Explicação Detalhada

| Parte | Função |
| --- | --- |
| `@Injectable` | Permite que o Angular injete dependências nessa classe. |
| `providedIn: 'root'` | Faz o Angular criar automaticamente uma única instância do service (singleton). |
| Injeção no construtor | O Angular entrega uma instância pronta do service para o componente. |
| Uso no componente | Você chama os métodos do service normalmente. |

---

## Services e Injeção de Dependência

- Angular usa o conceito de **Injeção de Dependência** (DI).
- Isso quer dizer que, em vez de criarmos instâncias com `new`, o Angular cuida disso para nós.
- Isso traz vantagens como:
  - Código mais limpo.
  - Melhor testabilidade.
  - Reaproveitamento fácil.

---

## Services com Dados Compartilhados

Exemplo de service que guarda dados:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mensagem: string = "Mensagem inicial";

  constructor() { }

  setMensagem(novaMensagem: string) {
    this.mensagem = novaMensagem;
  }

  getMensagem() {
    return this.mensagem;
  }
}
```

Agora qualquer componente pode alterar ou ler a `mensagem`!

---

## Services com HTTP Requests

Os services também são perfeitos para fazer chamadas HTTP.

Exemplo com `HttpClient`:

1. Importe o módulo no `app.module.ts`:

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class AppModule { }
```

2. Crie o service:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

3. Use no componente:

```typescript
import { ApiService } from '../api.service';

@Component({
  // ...
})
export class MeuComponente {
  usuarios: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.usuarios = data;
    });
  }
}
```

4. No HTML:

```html
<ul>
  <li *ngFor="let usuario of usuarios">
    {{ usuario.name }}
  </li>
</ul>
```

---

## Escopos de Services

| Escopo | Explicação |
| --- | --- |
| Global (`providedIn: 'root'`) | Service único para toda aplicação. |
| Módulo | Service criado dentro de um módulo específico. |
| Componente | Service disponível apenas para um componente (não muito comum). |

Você pode configurar um service para ser fornecido apenas em um módulo ou componente se quiser mais controle.

---

## Conclusão

- Services deixam o código **mais limpo e organizado**.
- São fundamentais para **compartilhar dados** e **lógicas de negócios**.
- Facilitam **requisições HTTP** e **trabalho em equipe**.
- Funcionam junto com **Injeção de Dependência** do Angular.

---

# Resumo Final:

✅ Crie o service com `ng g s nome`.  
✅ Use `@Injectable({ providedIn: 'root' })` para registro automático.  
✅ Importe e injete no construtor dos componentes.  
✅ Use para lógica, dados ou requisições.  
✅ Mantenha seus componentes enxutos!

---

# Exercício para você praticar

1. Crie um service chamado `MensagemService`.
2. Crie duas funções: `getMensagem()` e `setMensagem(novaMensagem: string)`.
3. Em dois componentes diferentes, use esse service para:
   - Alterar a mensagem.
   - Exibir a mensagem atualizada.

---
```
