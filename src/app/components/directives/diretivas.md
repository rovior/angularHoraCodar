
criamos com o codigo: ng generate component components/directives
para iniciar o serve temos: ng serve ou npm start

```markdown
# 📚 Aula: O que são Diretivas no Angular

## ✨ Definição

**Diretivas** no Angular são **instruções** no código que dizem para o Angular **como manipular o DOM** (Document Object Model).

Elas permitem:

- Adicionar comportamento a elementos HTML
- Alterar a aparência ou estrutura da página
- Criar componentes reutilizáveis

**Resumo:**  
> Diretivas = ensinar o Angular a fazer algo especial no HTML.

---

## 🔥 Tipos de Diretivas

No Angular existem **3 tipos principais** de diretivas:

| Tipo | Explicação | Exemplo |
|:---|:---|:---|
| **Diretivas de Atributo** | Alteram a aparência ou comportamento de um elemento | `ngClass`, `ngStyle` |
| **Diretivas Estruturais** | Alteram o **layout**, adicionando ou removendo elementos do DOM | `*ngIf`, `*ngFor`, `*ngSwitch` |
| **Componentes** | São diretivas especiais com template próprio | `@Component` (por exemplo, `app-root`) |

---

## 🛠️ Exemplos de cada tipo

### 1. Diretiva de Atributo

**Altera o estilo ou o comportamento de um elemento HTML.**

```html
<p [ngStyle]="{color: 'blue'}">Texto Azul</p>
<p [ngClass]="'classe-exemplo'">Texto com classe</p>
```

- `ngStyle`: altera o estilo dinamicamente.
- `ngClass`: altera classes CSS dinamicamente.

---

### 2. Diretiva Estrutural

**Controla a presença de elementos no DOM.**

```html
<p *ngIf="estaLogado">Bem-vindo!</p>

<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

- `*ngIf`: exibe o elemento **apenas se** a condição for verdadeira.
- `*ngFor`: repete o elemento **para cada item** de uma lista.

---

### 3. Componente (Diretiva com Template)

**São diretivas que possuem um visual (template) associado.**

```html
<app-meu-componente></app-meu-componente>
```

- Esse `app-meu-componente` é uma **diretiva** baseada em **`@Component`**.
- Um componente é sempre também uma diretiva!

---

## 🎯 Como criar uma Diretiva personalizada

Você pode criar sua própria diretiva!

Exemplo de uma diretiva que muda a cor ao passar o mouse:

```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
```

Usando no HTML:

```html
<p appHighlight>Passe o mouse aqui!</p>
```

---

## 🧠 Resumo Rápido

| Item | O que é |
|:---|:---|
| Diretiva | Comando que altera o DOM |
| Diretiva de Atributo | Muda o visual ou comportamento |
| Diretiva Estrutural | Adiciona ou remove elementos do HTML |
| Componente | Diretiva + Template próprio |
| Pode criar suas próprias diretivas | Sim! |

---

# 🔥 Dica Final

> Quase **tudo no Angular** que interage com o HTML é feito usando **Diretivas**!

Quando você vê um `*`, colchetes `[ ]`, ou usa um componente `<meu-componente>`, está usando **diretivas**.

---

```
