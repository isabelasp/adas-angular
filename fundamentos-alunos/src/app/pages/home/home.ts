import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo: string = 'Lista de alunos'
  subtitulo: string = 'Levantamento de todos os alunos cadastrados na turma'
  ativarDesabilitado: boolean = false

  // Dados dos alunos
  aluno1 = {
    nome: 'Peter Parker',
    idade: 23,
    imagem: 'https://i.pinimg.com/736x/42/77/17/427717ba1bf4326fd9510a0e3d7518d4.jpg',
    email: 'peter@proway.com',
    turma: 'Superdev',
    notaFinal: 6.5,
    status: 'RECUPERAÇÃO'
  }

  aluno2 = {
    nome: 'Mary Jane',
    idade: 20,
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/ca/Invincible_Iron_Man_Vol_2_4.jpg/250px-Invincible_Iron_Man_Vol_2_4.jpg',
    email: 'mj@proway.com',
    turma: 'Adas Dev',
    notaFinal: 9,
    status: 'APROVADO'
  }

  // nome: string = 'Peter Parker'
  // idade: number = 23
  // imagem: string = 'https://i.pinimg.com/736x/42/77/17/427717ba1bf4326fd9510a0e3d7518d4.jpg'
  // email: string = 'peter@proway.com'
  // turma: string = 'Adas Dev 2026'
  // notaFinal: number = 8.5
  // status: string = 'APROVADO'

}
