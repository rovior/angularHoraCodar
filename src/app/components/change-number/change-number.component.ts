import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  // Criamos um EventEmitter chamado changeNumber
  // Esse EventEmitter vai permitir que este componente envie eventos para o componente pai
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  // Esta função é chamada quando, por exemplo, clicamos em um botão
  // Quando chamada, ela emite (dispara) um evento através do changeNumber
  handleClick() {
    this.changeNumber.emit();
  }

}

/*
Vamos agora comentar detalhadamente o código do `ChangeNumberComponent`:

### **Código: `change-number.component.ts`**

```typescript
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  // Criamos um EventEmitter chamado changeNumber
  // Esse EventEmitter vai permitir que este componente envie eventos para o componente pai
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  // Esta função é chamada quando, por exemplo, clicamos em um botão
  // Quando chamada, ela emite (dispara) um evento através do changeNumber
  handleClick() {
    this.changeNumber.emit();
  }

}
```

### **Explicação detalhada do código:**

#### 1. **Importações**
```typescript
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
```
- **`Component`**: Serve para definir a classe como um componente Angular.
- **`OnInit`**: Interface que é implementada para que o método `ngOnInit` seja executado quando o componente for inicializado. Neste caso, ele não está sendo utilizado.
- **`Output`** e **`EventEmitter`**: Esses dois itens são utilizados para **emitir eventos** do componente filho para o componente pai.

#### 2. **Anotação `@Component`**
```typescript
@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
```
- **`selector: 'app-change-number'`**: Define o seletor que será usado para inserir esse componente na interface. Ou seja, em um arquivo HTML, para usar esse componente, você escreverá `<app-change-number></app-change-number>`.
- **`templateUrl: './change-number.component.html'`**: Define o caminho para o arquivo HTML onde a interface do componente está definida.
- **`styleUrls: ['./change-number.component.css']`**: Define o caminho para o arquivo de estilo (CSS) que aplica estilos ao componente.

#### 3. **Propriedade `@Output` e `EventEmitter`**
```typescript
@Output() changeNumber: EventEmitter<any> = new EventEmitter();
```
- **`@Output`**: É um decorador usado para **emitar eventos do componente filho** para o componente pai. Com isso, o componente pai pode **escutar eventos** disparados pelo componente filho.
- **`changeNumber`**: É a variável que representa o **EventEmitter**. Aqui, usamos `EventEmitter<any>` para indicar que o evento pode carregar qualquer tipo de valor (porém, você poderia especificar um tipo mais restrito se necessário, como `EventEmitter<number>` se o evento for sempre um número).
- **`new EventEmitter()`**: Cria uma nova instância do **EventEmitter**.

#### 4. **Construtor**
```typescript
constructor() { }
```
- O construtor está vazio, o que significa que não há dependências ou lógica a ser executada quando o componente é instanciado.

#### 5. **Método `ngOnInit`**
```typescript
ngOnInit(): void { }
```
- **`ngOnInit()`**: Esse método é chamado quando o componente é inicializado. No caso, ele não está realizando nenhuma ação, mas é um **gancho de ciclo de vida** importante no Angular, que poderia ser usado para inicializar variáveis ou chamar métodos quando o componente for carregado.

#### 6. **Método `handleClick`**
```typescript
handleClick() {
  this.changeNumber.emit();
}
```
- **`handleClick()`**: Este método é chamado quando algo (geralmente um clique em um botão) acontece. Ele é responsável por **emitir o evento**. No caso, ele chama `this.changeNumber.emit()`, o que **dispara o evento**.
  
  - **`emit()`**: A função `emit()` é usada para **enviar o evento** para o componente pai. No caso, o evento `changeNumber` será capturado pelo **componente pai** e a função associada será executada.

---

### **Resumo geral do fluxo no `ChangeNumberComponent`:**

1. O componente **filho** (`ChangeNumberComponent`) possui um botão ou outra interação que chama o método `handleClick()`.
2. Quando o método `handleClick()` é chamado, ele **dispara um evento** usando `this.changeNumber.emit()`.
3. O **componente pai** (no caso, o `EmitterComponent`) pode **escutar** esse evento e executar uma ação quando o evento é disparado.
4. O **evento emitido** por `changeNumber` não carrega dados diretamente, mas pode ser configurado para enviar informações ao pai.

---

Se você tiver mais dúvidas sobre esse fluxo ou quiser passar algum outro código para analisar, fique à vontade para enviar!
*/