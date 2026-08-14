import { Component } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { AlunoCards } from "../../componentes/aluno-cards/aluno-cards";

@Component({
  selector: 'app-aluno-lista',
  imports: [AlunoCards],
  templateUrl: './aluno-lista.html',
  styleUrl: './aluno-lista.css',
})
export class AlunoLista {
  
  modoExibicao: String = 'cards'

  listaAlunos: Aluno[] = [
    {nome: 'Peter Parker',
    idade: 23,
    imagem: 'https://i.pinimg.com/736x/42/77/17/427717ba1bf4326fd9510a0e3d7518d4.jpg',
    email: 'peter@proway.com',
    turma: 'Superdev',
    notaFinal: 6.5,
   }, 
   {nome: 'Mary Jane',
    idade: 20,
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/ca/Invincible_Iron_Man_Vol_2_4.jpg/250px-Invincible_Iron_Man_Vol_2_4.jpg',
    email: 'mj@proway.com',
    turma: 'Adas Dev',
    notaFinal: 9,
   },
   {nome: 'Octopus',
    idade: 21,
    imagem: 'https://static.wikia.nocookie.net/viloes/images/d/d7/SM1994_dr_octopus_by_bruxurso.png/revision/latest/scale-to-width-down/1200?cb=20260328063702&path-prefix=pt-br',
    email: 'Octopus@proway.com',
    turma: 'Adas Dev',
    notaFinal: 3,
   }
  ]
  
  verCards(): void {
    this.modoExibicao = 'cards'
  }

  verTabela(): void {
    this.modoExibicao = 'tabela'
  }

  todos(): void {
    this.listaAlunos = this.listaAlunos
  }

  aprovados(): void {
    this.listaAlunos = this.listaAlunos.filter(Aluno => Aluno.notaFinal >= 7)
  }

  reprovados(): void {
    this.listaAlunos = this.listaAlunos.filter(Aluno => Aluno.notaFinal < 7)
  }

}
