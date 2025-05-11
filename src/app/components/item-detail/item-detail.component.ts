import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;         // Animal que vem da API
  newAnimal: Animal = {     // Animal novo para cadastro
    id: 0,
    name: '',
    type: '',
    age: 0
  };

  constructor(private listService: ListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = Number(idParam);
      this.listService.getItem(id).subscribe({
        next: (animal) => {
          this.animal = animal;
        },
        error: () => {
          // Se não encontrar o animal, limpa para mostrar formulário
          this.animal = undefined;
        }
      });
    } else {
      // Se não tem id na rota, é novo cadastro
      this.animal = undefined;
    }
  }

  createAnimal() {
    this.listService.addAnimal(this.newAnimal).subscribe(() => {
      alert('Animal cadastrado com sucesso!');
    });
  }
}
