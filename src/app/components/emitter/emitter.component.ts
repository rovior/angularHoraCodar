import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0; // Corrigido aqui!

  constructor() { }

  ngOnInit(): void { }

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10); // Corrigido aqui também!
  }

}

/*
Vamos revisar o **`EmitterComponent`** em detalhes, linha por linha, para garantir que tudo esteja claro. Vou comentar cada parte para você entender completamente o que está acontecendo.

---

### **Classe: `EmitterComponent`**

```typescript
import { Component, OnInit } from '@angular/core';
```
- **Importação do `Component` e `OnInit`**: 
  - `Component`: Utilizado para definir que a classe será um **componente Angular**.
  - `OnInit`: Interface de ciclo de vida do Angular, usada para realizar ações logo após a inicialização do componente.

```typescript
@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
```
- **@Component Decorator**:
  - `selector: 'app-emitter'`: Define o nome da tag do HTML que usará este componente. Ou seja, `<app-emitter></app-emitter>` será onde este componente é inserido.
  - `templateUrl: './emitter.component.html'`: Referência para o arquivo de **template** HTML que define a estrutura visual do componente.
  - `styleUrls: ['./emitter.component.css']`: Referência para os **estilos** CSS do componente, onde você pode definir como o componente se parecerá na tela.

```typescript
export class EmitterComponent implements OnInit {
```
- **Classe `EmitterComponent`**: 
  - Define a classe do componente, que implementa a interface `OnInit`, permitindo a execução de código no momento da **inicialização** do componente.

```typescript
  myNumber: number = 0; // Corrigido aqui!
```
- **`myNumber`**: 
  - A variável `myNumber` é do tipo `number` e armazena um número. Inicialmente é definido como `0`.
  - Este número será alterado quando o evento do filho (`ChangeNumberComponent`) for disparado, conforme explicamos no fluxo.

```typescript
  constructor() { }
```
- **Construtor**: 
  - O Angular chama o construtor quando cria uma instância do componente. Nesse caso, o construtor está vazio porque não há nenhuma dependência ou lógica inicial que precise ser configurada aqui.

```typescript
  ngOnInit(): void { }
```
- **`ngOnInit`**:
  - Este é o **método do ciclo de vida do Angular** que é chamado **logo após o componente ser inicializado**.
  - No momento, ele está vazio, o que significa que o componente não está realizando nenhuma ação nesse ponto da vida útil. Se precisar executar alguma lógica na inicialização, você colocaria o código aqui.

```typescript
  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10); // Corrigido aqui também!
  }
```
- **`onChangeNumber`**:
  - Esta é a função que será chamada quando o **evento `changeNumber`** for **emitido** pelo componente filho (`ChangeNumberComponent`).
  - A lógica da função é:
    - Ela altera o valor da variável `myNumber` para um **número aleatório entre 0 e 9**.
    - O `Math.floor(Math.random() * 10)` gera um número aleatório entre 0 (inclusive) e 10 (exclusive).
  
### Conclusão sobre o `EmitterComponent`

- **Objetivo**: Este componente serve para **ouvir** o evento **emitido pelo `ChangeNumberComponent`** e, quando o evento é disparado, ele gera um novo número aleatório e atualiza a tela.
- **Responsabilidade**: Ele **não emite eventos**, apenas **escuta** o evento do filho e reage a ele alterando o valor de `myNumber`.

---

## Resumo do fluxo entre `EmitterComponent` e `ChangeNumberComponent`

1. O **`EmitterComponent`** exibe o **`ChangeNumberComponent`**.
2. O **`ChangeNumberComponent`** emite o evento `changeNumber` quando o botão é clicado.
3. O **`EmitterComponent`** ouve esse evento e executa a função `onChangeNumber()`.
4. A função `onChangeNumber()` gera um número aleatório e atualiza a variável `myNumber`.
5. A tela é automaticamente atualizada, mostrando o novo valor de `myNumber`.

---

Agora você tem uma compreensão clara do `EmitterComponent`. Quer continuar com a análise do `ChangeNumberComponent` ou algum outro código?
*/