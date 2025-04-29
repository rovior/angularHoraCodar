import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  //fazendo a requisição
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { 
    
  }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  //pegando os dados da api
  getAll(): Observable<Animal[]> { 
    return this.http.get<Animal[]>(this.apiUrl)
  } 

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
  
}
