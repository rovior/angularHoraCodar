
```markdown
# Aula Completa sobre Pipe Operators no Angular

## Introdução

No Angular, **pipes** são usados para transformar valores diretamente no template HTML. Eles são operadores visuais muito poderosos para **formatar dados** sem a necessidade de alterar o valor real da variável no TypeScript.

Por exemplo:
- Transformar texto em maiúsculas.
- Formatar datas, moedas e porcentagens.
- Criar pipes personalizados para transformar dados específicos.

Pipes deixam o código mais limpo e focado apenas em exibir informações no formato desejado.

---

## Sintaxe Básica

Para usar um **pipe operator**, utilizamos a barra vertical `|` no template HTML:

```html
{{ valor | nomeDoPipe }}
```

Por exemplo:

```html
{{ nome | uppercase }}
```

Este exemplo transforma o valor de `nome` em letras **maiúsculas**.

---

## Pipes Built-in (nativos) do Angular

O Angular já oferece vários pipes prontos para uso. Vamos ver os principais:

### 1. **uppercase** / **lowercase**

Transforma o texto para **maiúsculas** ou **minúsculas**.

```html
<p>{{ 'Angular é incrível' | uppercase }}</p> <!-- ANGULAR É INCRÍVEL -->
<p>{{ 'Angular é incrível' | lowercase }}</p> <!-- angular é incrível -->
```

---

### 2. **date**

Formata datas.

```html
<p>{{ hoje | date }}</p> <!-- Ex: Sep 27, 2025 -->
<p>{{ hoje | date:'fullDate' }}</p> <!-- Ex: Saturday, September 27, 2025 -->
<p>{{ hoje | date:'short' }}</p> <!-- Ex: 9/27/25, 12:00 AM -->
```

`hoje` deve ser um `Date` no TypeScript:

```typescript
hoje: Date = new Date();
```

---

### 3. **currency**

Formata valores como moeda.

```html
<p>{{ preco | currency:'BRL' }}</p> <!-- R$ valor -->
```

Exemplo em TypeScript:

```typescript
preco: number = 199.99;
```

Outros exemplos:

```html
<p>{{ preco | currency:'USD' }}</p> <!-- $199.99 -->
<p>{{ preco | currency:'EUR' }}</p> <!-- €199.99 -->
```

---

### 4. **percent**

Formata valores como porcentagem.

```html
<p>{{ 0.85 | percent }}</p> <!-- 85% -->
```

---

### 5. **json**

Exibe um objeto no formato JSON.

```html
<pre>{{ user | json }}</pre>
```

Se `user` for:

```typescript
user = { nome: 'Maria', idade: 30 };
```

O HTML exibirá:

```json
{
  "nome": "Maria",
  "idade": 30
}
```

---

### 6. **slice**

Corta parte de um array ou string.

```html
<p>{{ 'Angular' | slice:1:5 }}</p> <!-- ngul -->
```

```html
<ul>
  <li *ngFor="let item of lista | slice:0:3">{{ item }}</li>
</ul>
```

---

## Encadeamento de Pipes

Você pode **combinar vários pipes** em sequência:

```html
<p>{{ preco | currency:'BRL' | uppercase }}</p>
```

Aqui o valor de `preco` será formatado como real brasileiro e o símbolo "R$" será colocado em **maiúsculas** (não muda muito visualmente nesse exemplo, mas em outros pode ser útil).

---

## Pipes com Argumentos

Alguns pipes aceitam **parâmetros**.

Exemplo com `date`:

```html
<p>{{ hoje | date:'dd/MM/yyyy' }}</p> <!-- 27/04/2025 -->
```

O primeiro parâmetro (depois dos dois-pontos `:`) configura o formato da data.

---

## Criando Pipes Personalizados

Você pode criar seus próprios pipes!

### Exemplo de Pipe para inverter texto

1. Crie o pipe com o Angular CLI:

```bash
ng generate pipe reverse
```

Isso cria dois arquivos:
- `reverse.pipe.ts`
- `reverse.pipe.spec.ts`

2. Edite o `reverse.pipe.ts`:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

Esse pipe **inverte** o texto.

3. Use no HTML:

```html
<p>{{ 'Angular' | reverse }}</p> <!-- ralugnA -->
```

---

## Pipes Assíncronos (async)

O `async` pipe é usado para trabalhar com:
- **Observables**
- **Promises**

Ele se inscreve automaticamente no Observable e retorna o último valor emitido.

### Exemplo usando Promise:

```typescript
valorPromessa = new Promise((resolve) => {
  setTimeout(() => resolve('Dado carregado!'), 3000);
});
```

No HTML:

```html
<p>{{ valorPromessa | async }}</p>
```

Depois de 3 segundos, o texto "Dado carregado!" será exibido.

### Exemplo usando Observable:

```typescript
import { interval } from 'rxjs';

contador = interval(1000); // Emite 0,1,2,3 a cada 1 segundo
```

No HTML:

```html
<p>{{ contador | async }}</p>
```

---

## Diferença entre Pipe e Serviço

| Pipe | Serviço |
| --- | --- |
| Transforma a exibição de dados no template | Faz lógica de negócios, comunicação com API, manipulação complexa |
| Declarado no módulo | Declarado como `@Injectable` |
| Usa a barra vertical `|` | Usado em componentes e serviços diretamente |

---

## Boas Práticas com Pipes

- Pipes devem ser **puros** sempre que possível (sem alterar o estado da aplicação).
- Para operações pesadas (como ordenar ou filtrar listas grandes), crie **pipes impuros** com `pure: false`, mas use com cuidado pois eles impactam a performance.
- Pipes personalizados devem ser usados para **formatar** e **preparar** dados para visualização, **não para lógica de negócios**.

---

## Conclusão

O **Pipe Operator** no Angular é uma ferramenta fundamental para transformar dados de maneira rápida e elegante dentro dos templates. Ele melhora a legibilidade do código, evita funções desnecessárias no TypeScript e mantém a separação de responsabilidades entre lógica e apresentação.

Saber usar pipes nativos, criar pipes personalizados e trabalhar com `async` pipes são habilidades essenciais para qualquer desenvolvedor Angular!

---

**Fim da Aula!**
```