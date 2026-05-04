import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  // Objeto de Formulário
  formulario = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(null),
    cidade: new FormControl('')
  })
}
