

```markdown
# Aula Completa sobre Two-Way Data Binding no Angular

## O que é Two-Way Data Binding?

**Two-Way Data Binding** é o processo de **ligar o componente (TypeScript)** e a **view (HTML)** de forma **bidirecional**.

Isso significa que:
- Quando o usuário altera um valor na tela (por exemplo, digitando em um `<input>`), o valor da variável no TypeScript é **atualizado automaticamente**.
- Quando o valor da variável no TypeScript muda, o que aparece na tela **também é atualizado automaticamente**.

Ou seja: **qualquer mudança de um lado reflete no outro**.

---

## Como fazer Two-Way Data Binding?

O Angular fornece o **diretório especial `[(ngModel)]`** para facilitar o two-way binding.

A sintaxe é:

```html
<input [(ngModel)]="nomeVariavel">
```

- O `[( )]` representa a combinação de:
  - `[]` → Property Binding (manda dados do componente para a view)
  - `()` → Event Binding (escuta eventos da view e manda para o componente)

Por isso, chamamos de **banana in a box** 🍌📦 (porque o formato `[( )]` parece uma banana dentro de uma caixa).

---

## Exemplo Básico

### No seu componente TypeScript:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html'
})
export class MeuComponenteComponent {
  nome: string = 'Angular!';
}
```

### No HTML:

```html
<input [(ngModel)]="nome">
<p>O nome digitado é: {{ nome }}</p>
```

- Conforme você digita no input, o valor de `nome` é atualizado **em tempo real**.
- O parágrafo `<p>` também é atualizado automaticamente.

---

## Importante: Habilitar FormsModule

Para usar `[(ngModel)]`, você precisa importar o **FormsModule**.

No `app.module.ts`:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ /* seus componentes */ ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Sem o FormsModule, o Angular não entende o `[(ngModel)]`!

---

## Funcionamento Interno

Quando usamos `[(ngModel)]`, o Angular faz duas coisas:

1. **Property Binding** (`[value]="nome"`)  
   Atribui o valor inicial para o input.

2. **Event Binding** (`(input)="nome = $event.target.value"`)  
   Atualiza a variável `nome` sempre que o usuário digita algo.

Então isso:

```html
<input [(ngModel)]="nome">
```

É equivalente a:

```html
<input [value]="nome" (input)="nome = $event.target.value">
```

---

## Two-Way Binding com Objetos

Funciona também com objetos!

### Exemplo:

```typescript
usuario = {
  nome: '',
  idade: 0
};
```

No HTML:

```html
<input [(ngModel)]="usuario.nome" placeholder="Nome">
<input [(ngModel)]="usuario.idade" placeholder="Idade" type="number">

<p>Nome: {{ usuario.nome }}</p>
<p>Idade: {{ usuario.idade }}</p>
```

---

## Two-Way Binding em Componentes Personalizados

Se você quiser criar **seus próprios componentes** que suportam `[(ngModel)]`, precisa implementar a interface `ControlValueAccessor`.

Exemplo prático é mais avançado, mas a ideia é:

- Permitir que o Angular trate o seu componente como se fosse um input normal.

---

## Diferença entre One-Way e Two-Way Binding

| One-Way Binding (`[property]` ou `(event)`) | Two-Way Binding (`[(ngModel)]`) |
| --- | --- |
| Fluxo de dados em uma única direção | Fluxo de dados em ambas as direções |
| Atualiza a View com dados do Component | Atualiza a View e o Component ao mesmo tempo |
| Mais controle, mais verboso | Mais rápido e prático para formulários simples |

---

## Exemplo Completo

### TypeScript:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  email: string = '';
}
```

### HTML:

```html
<h2>Cadastro</h2>

<form>
  <label for="email">Email:</label>
  <input id="email" [(ngModel)]="email" name="email">
</form>

<p>Email digitado: {{ email }}</p>
```

---

## Problemas comuns

- ❌ Esquecer o atributo `name` no input:

  Para `[(ngModel)]` funcionar dentro de `<form>`, o input precisa ter o `name`:

  ```html
  <input [(ngModel)]="email" name="email">
  ```

- ❌ Não importar `FormsModule`.

- ❌ Tentar fazer Two-Way Binding em propriedades que não podem ser alteradas diretamente (como propriedades de objetos imutáveis).

---

## Conclusão

O **Two-Way Data Binding** (`[(ngModel)]`) no Angular é uma forma prática e poderosa de **sincronizar** dados entre o componente e a interface do usuário de forma automática.

Ideal para formulários, inputs, selects, radios e para construir interfaces **reativas** de maneira simples!

---

**Fim da Aula!**
```
