import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';  //aqui atribuimos valores para a variavel que foi declarada em parent-data.component.ts e por fim exibir em app.component.html
  userData = {  //inicializando valores para o objeto declarado em parent-data.component.ts e por fim exibir em app.component.html
    email: 'joaquim@email.com',
    role: 'Admin',
  }
  title = 'curso-angular';
}


/*

```markdown
# 📚 Aula: Para que serve o `app.component.ts` no Angular

## ✨ O que é o `app.component.ts`?

O `app.component.ts` é o **arquivo TypeScript principal** do primeiro componente da sua aplicação Angular.

Esse componente é chamado de **AppComponent**.

Ele é o "pai de todos os componentes" — é como o "coração" ou a "raiz" da aplicação.

---

# 🏗️ O que o `app.component.ts` faz?

Ele:

- Define o que vai ser exibido primeiro no navegador
- Carrega outros componentes filhos dentro dele
- Define as propriedades (variáveis) e comportamentos (métodos) que a página principal usa
- Se conecta ao template `app.component.html`

---

# 🔍 Estrutura do `app.component.ts`

Um arquivo `app.component.ts` típico:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // seletor usado em index.html
  templateUrl: './app.component.html', // qual HTML ele usa
  styleUrls: ['./app.component.css'] // qual CSS ele usa
})
export class AppComponent {
  title = 'Minha Aplicação Angular'; // propriedade de exemplo
}
```

---

# 🎯 Detalhes importantes:

| Parte | O que é | Exemplo |
|:---|:---|:---|
| `@Component` | Um **decorador** que define como o componente se comporta | `{ selector, templateUrl, styleUrls }` |
| `selector` | Nome da tag HTML que representa o componente | `<app-root></app-root>` |
| `templateUrl` | Caminho para o arquivo HTML desse componente | `app.component.html` |
| `styleUrls` | Caminho(s) para os arquivos CSS | `app.component.css` |
| `class AppComponent` | A classe que contém os dados e lógicas do componente | `title = 'Minha Aplicação Angular';` |

---

# 🧩 Onde o `AppComponent` é usado?

Ele é chamado dentro do `index.html` da aplicação.

**Arquivo:** `src/index.html`

```html
<body>
  <app-root></app-root> <!-- Aqui o Angular coloca todo o conteúdo do AppComponent -->
</body>
```

Quando a aplicação Angular inicializa, ela vê a tag `<app-root>`, carrega o `AppComponent`, e **a partir dele** carrega todo o resto.

---

# 📌 Em resumo:

| Item | Explicação |
|:---|:---|
| É o primeiro componente da aplicação | Sim |
| Controla o que aparece no navegador no começo | Sim |
| Pode ter componentes filhos dentro dele | Sim |
| Tem HTML, CSS e lógica separados | Sim |
| É usado no `index.html` através da tag `<app-root>` | Sim |

---

# 🔥 Dica de Ouro

> No Angular, **tudo começa pelo `AppComponent`**, mas ele **não precisa fazer tudo sozinho**!  
> O ideal é quebrar sua aplicação em **vários componentes pequenos** e deixar o AppComponent apenas **organizar** esses componentes.

---

```

---

Se quiser, posso também criar um **mapinha visual** mostrando a hierarquia de um projeto Angular começando pelo `AppComponent`.  
Quer? 🚀🎯


*/