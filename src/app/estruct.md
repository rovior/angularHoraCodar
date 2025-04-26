
#Instalação e Criação Do Projeto 
Primeiramente vamos intalar o CLI do Angular com: npm install -g @angular/cli
Agora podemos criar projetos mais facilmente, utilizamos o: ng new <nome_do_projeto>
Para testar o projeto basta digitar o comando: ng serve ou npm start
Podemos alterar os arquivos dentro da pasta app para refletir mudanças no navegador

#Criando Componente
Para criar um componente podemos utilizar o CLI;
O comando é: ng generate <nome_do_componente>   
  ex: ng generate component components/first-component
  esse comando gera toda a estrutura do componente para a gente 
Para importar o componente basta utilizar o seu selector em um THML de outro componente;

---

# 📚 Aula Completa: Estrutura do Angular

## 🛠️ Introdução ao Angular

**Angular** é um framework front-end baseado em **TypeScript**, criado pelo Google, utilizado para construir aplicações **web** **escaláveis**, **modulares** e **eficientes**.

Ele utiliza o conceito de **componentes** para estruturar a interface e **serviços** para separar responsabilidades de lógica e dados.

---

## 📁 Estrutura Básica de Um Projeto Angular

Quando você cria um projeto usando `ng new nome-projeto`, a estrutura padrão será algo como:

```
nome-projeto/
├── e2e/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── component-1/
│   │   ├── component-2/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── tsconfig.app.json
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

Agora, vamos entender **cada parte**:

## nome_modules
é onde temos todas as dependencias para rodar o projeto, esse pacote é muito pesado e para subir o projeto para o github é preciso fazer o .gitignore na raiz src para a possibilidade dos commits ja que esse arquivo é muito pesado então o git vai fingir que os arquivos dentro do gitignore não existem.

---

## 🧩 Diretórios Importantes

### `/src/`

É o **coração** da aplicação.

- **`/app/`**  
  Contém os módulos, componentes, serviços e pipes da aplicação.
  
- **`/assets/`**  
  Imagens, fontes, ícones e arquivos estáticos.

- **`/environments/`**  
  Arquivos de ambiente para diferentes builds (ex: `environment.prod.ts`, `environment.ts`).

---

### `/e2e/`

- Pasta de **testes end-to-end** (automatizados) usando ferramentas como **Protractor** ou **Cypress**.

---

## 📄 Arquivos Importantes

| Arquivo               | Função |
|:----------------------|:-------|
| `angular.json`         | Configura o projeto Angular (builds, assets, estilos globais). |
| `package.json`         | Lista dependências, scripts e versão do projeto. |
| `tsconfig.json`        | Configurações do compilador TypeScript. |
| `README.md`            | Descrição básica do projeto. |
| `main.ts`              | **Ponto de entrada** da aplicação (bootstrap). |
| `index.html`           | HTML principal que carrega a aplicação Angular. |
| `polyfills.ts`         | Scripts para compatibilidade entre navegadores. |
| `styles.css`           | Estilos globais da aplicação. |

---

## 🧱 Estrutura de Um Componente Angular

Um **componente** Angular é formado por 4 principais arquivos:

| Arquivo                  | Função |
|:--------------------------|:-------|
| `nome.component.ts`       | Código TypeScript (classe, lógica e decorators). |
| `nome.component.html`     | Template HTML. |
| `nome.component.css`      | Estilos específicos. |
| `nome.component.spec.ts`  | Arquivo de testes unitários. |

**Exemplo de um Componente:**

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nome da tag para usar este componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Aplicação Angular';
}
```

---

## 🏗️ Entendendo o `app.module.ts`

O **AppModule** é o **módulo principal** que reúne todos os componentes, serviços e outros módulos.

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Componentes, pipes e diretivas
    AppComponent
  ],
  imports: [ // Outros módulos que este módulo precisa
    BrowserModule
  ],
  providers: [], // Serviços que ficarão disponíveis na aplicação
  bootstrap: [AppComponent] // Componente inicial
})
export class AppModule { }
```

---

## 🔄 Sistema de Rotas

O Angular usa um **módulo de rotas** para navegação.

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

- **`path`**: URL
- **`component`**: Qual componente será exibido

---

## 🧹 Serviços (Services)

**Services** são usados para **compartilhar dados** ou **lógica de negócio** entre componentes.

```typescript
// exemplo de service: exemplo.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {
  getMensagem() {
    return 'Mensagem vinda do serviço!';
  }
}
```

Você injeta um serviço no componente usando o **construtor**:

```typescript
constructor(private exemploService: ExemploService) { }
```

---

## 🧪 Testes Unitários

O Angular gera arquivos `.spec.ts` que utilizam o framework **Jasmine** para testar funcionalidades dos componentes e serviços.

Exemplo básico de teste:

```typescript
describe('AppComponent', () => {
  it('deve criar o componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
```

---

## 🎯 Boas Práticas de Estrutura

- **Organize componentes** em pastas específicas (`/pages`, `/shared`, `/core`, etc).
- **Use módulos** para dividir a aplicação em partes menores (feature modules).
- **Centralize serviços comuns** no `/core`.
- **Use componentes reutilizáveis** dentro de `/shared`.
- **Mantenha código de template (HTML) e lógica (TS) separados**.

---

## 📝 Conclusão

A estrutura do Angular foi pensada para:

- Favorecer a escalabilidade.
- Facilitar manutenção em projetos grandes.
- Permitir o reuso de componentes e serviços.

Entender essa estrutura é essencial para criar aplicações **robustas**, **modulares** e **fáceis de testar**.

---

# 🚀 Próximos Passos

- Criar seu primeiro componente com `ng generate component`.
- Criar seu primeiro serviço com `ng generate service`.
- Trabalhar com rotas e formulários.

---

> **Dica:** Pratique criando pequenos projetos, como um sistema de tarefas ou um gerenciador de contatos, para fixar melhor a estrutura!

---
