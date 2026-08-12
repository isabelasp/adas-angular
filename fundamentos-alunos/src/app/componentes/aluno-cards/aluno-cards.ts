import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { required } from '@angular/forms/signals';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-aluno-cards',
  imports: [NgClass],
  templateUrl: './aluno-cards.html',
  styleUrl: './aluno-cards.css',
})
export class AlunoCards {

  @Input({required: true}) aluno!: Aluno
}
