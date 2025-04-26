
```markdown
# 📚 Aula sobre Interpolação no Angular

## O que é Interpolação?

**Interpolação** em Angular é uma forma de **inserir valores de variáveis** do seu componente **direto no HTML**.

É como se o Angular **"costurasse"** o valor da variável dentro do texto da página.

A sintaxe é **bem simples**:

```html
{{ expressão }}
```

O que estiver dentro das `{{ }}` será **avaliado** e o resultado será exibido no HTML.

---

## Exemplo Básico

**Arquivo:** `app.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Bem-vindo ao Angular!';
}
```

**Arquivo:** `app.component.html`

```html
<h1>{{ titulo }}</h1>
```

**Resultado na tela:**

```
Bem-vindo ao Angular!
```

---

## Como funciona?

- O Angular **vê** as chaves `{{ }}`
- **Procura** o valor da variável no `ts`
- **Substitui** o `{{ titulo }}` pelo valor da variável `titulo`.

---

## 🎯 O que posso usar dentro de {{ }}

Você pode:

| Pode                         | Exemplo                           |
|:-----------------------------|:----------------------------------|
| Variáveis                    | `{{ nome }}`                     |
| Expressões matemáticas       | `{{ 2 + 2 }}` → 4                 |
| Funções                      | `{{ saudacao() }}`               |
| Acessar propriedades de objetos | `{{ pessoa.nome }}`          |
| Usar operadores ternários    | `{{ idade >= 18 ? 'Maior' : 'Menor' }}` |

---

## 📌 Exemplo com Função

**Arquivo:** `app.component.ts`

```typescript
export class AppComponent {
  nome = 'Ana';

  saudacao() {
    return 'Olá, ' + this.nome + '!';
  }
}
```

**Arquivo:** `app.component.html`

```html
<p>{{ saudacao() }}</p>
```

**Resultado:**

```
Olá, Ana!
```

---

## 🚨 Importante: Dicas sobre desempenho

- **Evite funções muito pesadas** dentro da interpolação.
- Toda vez que o Angular atualiza a tela (**detecta mudanças**), ele chama a função de novo.
- Se for algo **pesado**, melhor **criar uma variável** já com o valor pronto no `ts`.

---

## 🛠️ Casos onde NÃO se usa interpolação

Existem situações onde você **não usa** `{{ }}`:

| Para                          | Usamos                |
|:------------------------------|:----------------------|
| Atributos HTML (ex: src, href) | `[property]` binding  |
| Eventos (ex: click, submit)    | `(event)` binding     |

**Exemplo para imagem usando property binding:**

```html
<img [src]="urlImagem">
```

**(em vez de interpolação tradicional com `{{ }}`)**

> Obs: Também funciona com `{{ }}`, mas o recomendado no Angular é usar `[ ]` para atributos.

---

## 🎨 Resumo Visual

```plaintext
HTML:             <p>{{ mensagem }}</p>
TS:               mensagem = 'Interpolação é fácil!';

🔽
Resultado:        Interpolação é fácil!
```

---

# 🚀 Conclusão

- Interpolação é **fácil** e **poderosa** para **mostrar dados no HTML**.
- Basta usar `{{ expressão }}` dentro do seu template.
- Ideal para textos, valores simples e funções leves.
- Tome cuidado com funções pesadas (impactam o desempenho).

---

# 📜 Extra: Como lembrar sempre?

**Interpolação = "Injetar informação do TypeScript dentro do HTML usando {{ }}"**

Simples assim! 😎
```
