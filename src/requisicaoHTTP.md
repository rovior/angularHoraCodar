
isso é preciso baixar os pacotes com: npm i json-serve 
e depois criamos: db.json na raiz src, que é vamos simular um banco (Nossa api)
logo temos que fazer isso ser reconhecido como inicializavel para isso em package.json em "scripts" atribuimos "server": "json-serve --wotch db.json"

---

# Aula: Requisições HTTP no Angular

## 1. O que é o `HttpClient`?

- O **HttpClient** é um serviço que o Angular fornece para fazer requisições **HTTP** (GET, POST, PUT, DELETE) de forma **fácil** e **segura**.
- Ele faz parte do pacote `@angular/common/http`.

---

## 2. Como configurar o `HttpClient`?

Antes de usar, **você precisa importar** o módulo `HttpClientModule` no seu `AppModule` (`app.module.ts`):

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...],
  imports: [
    HttpClientModule, // <<< Adicione aqui
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

✅ Agora você já pode usar o `HttpClient` em qualquer serviço ou componente!

---

## 3. Fazendo uma Requisição GET

1. Primeiro, **injete o HttpClient** no seu serviço:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:8080/api/exemplo');
  }
}
```

2. Depois, no seu componente, **consuma o serviço**:

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      console.log(response);
    });
  }
}
```

✅ **Explicação:**
- `get()` faz uma requisição HTTP GET.
- `subscribe()` escuta a resposta do servidor.

---

## 4. Fazendo uma Requisição POST

Para enviar dados (por exemplo, para um servidor Java), você usa o `post()`:

```typescript
postData(dados: any) {
  return this.http.post('http://localhost:8080/api/exemplo', dados);
}
```

E no componente:

```typescript
enviarDados() {
  const meuObjeto = {
    nome: 'João',
    idade: 30
  };

  this.apiService.postData(meuObjeto).subscribe(response => {
    console.log('Resposta do servidor:', response);
  });
}
```

✅ O `meuObjeto` vai ser enviado para o servidor Java via HTTP POST!

---

## 5. Outras Operações HTTP

| Operação | Método | Para quê serve? |
|:---------|:-------|:----------------|
| GET      | `get()` | Buscar informações. |
| POST     | `post()` | Enviar informações. |
| PUT      | `put()` | Atualizar informações. |
| DELETE   | `delete()` | Remover informações. |

---

## 6. Como Receber Requisições no Java?

Se você tem um backend **Spring Boot** em Java, o seu endpoint poderia ser assim:

```java
@RestController
@RequestMapping("/api")
public class ExemploController {

    @GetMapping("/exemplo")
    public String getExemplo() {
        return "Hello from Java!";
    }

    @PostMapping("/exemplo")
    public ResponseEntity<String> postExemplo(@RequestBody Map<String, Object> dados) {
        System.out.println("Recebi: " + dados);
        return ResponseEntity.ok("Dados recebidos com sucesso!");
    }
}
```

✅ Esse `postExemplo` recebe o JSON enviado pelo Angular!

---

## 7. Tratando Erros

Para tratar erros de forma elegante, você pode usar o `catchError` do RxJS:

```typescript
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getData() {
  return this.http.get('http://localhost:8080/api/exemplo')
    .pipe(
      catchError(error => {
        console.error('Erro na requisição:', error);
        return throwError(() => new Error('Erro na requisição'));
      })
    );
}
```

---

## 8. Observações Importantes

- **CORS**: Se seu Angular estiver rodando em `localhost:4200` e o Java em `localhost:8080`, pode dar problema de CORS (Cross-Origin Resource Sharing).
  - No seu backend Java, você precisa permitir requisições de outros domínios:

```java
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ExemploController { ... }
```

- **Headers**: Se precisar enviar tokens ou cabeçalhos, use:

```typescript
const headers = { 'Authorization': 'Bearer token_aqui' };
this.http.get('url', { headers });
```

---

# 🚀 Resumo da Aula:

- **HttpClient** é usado para fazer requisições no Angular.
- Você precisa importar o `HttpClientModule`.
- Pode usar `get`, `post`, `put`, `delete` para trabalhar com APIs.
- Dá para conectar seu Angular a **backends Java** tranquilamente.
- Trate erros com `catchError`.

---

Quer que eu também te monte exemplos mais avançados tipo:
- Criar **interceptor** para tratar todos os erros de uma vez.
- Enviar **arquivos** (upload de imagens).
- Fazer **autenticação** com Token?
