import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  // Objeto de Formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  // Visibilidade dos botões
  btnCadastrar: boolean = true

  // Vetor
  vetor: Pessoa[] = []

  // Função de cadastro
  cadastrar() {

    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa)

    // Limpeza dos inputs
    this.formulario.reset()

    // Vizualição via console
    console.table(this.vetor)
  }
}
