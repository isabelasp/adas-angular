import { Component, inject } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { AlunoCards } from "../../componentes/aluno-cards/aluno-cards";
import { AlunoService } from '../../services/aluno';

@Component({
  selector: 'app-aluno-lista',
  imports: [AlunoCards],
  templateUrl: './aluno-lista.html',
  styleUrl: './aluno-lista.css',
})
export class AlunoLista {

  private readonly alunoService = inject(AlunoService)
  
  modoExibicao: String = 'tabela'

  listaAlunosFiltro: Aluno[] = []

  ngOnInit(): void {
    this.listaAlunosFiltro = this.alunoService.listar()

  }

  // //Otimizar a troca de vosuaiação em apenas uma função
   trocarModoExibicao(): void {

    if (this.modoExibicao === 'cards'){
      this.modoExibicao = 'tabela'
      //Return vazio  Sai do bloco de códigos ignorando o abaixo dessa linha
       return
     }

     if (this.modoExibicao === 'tabela'){
       this.modoExibicao = 'cards'
     }
   }

  // todos(): void {
  //   this.listaAlunosFiltro = this.listaAlunos
  // }

  // aprovados(): void {
  //   this.listaAlunosFiltro = this.listaAlunos.filter(aluno => aluno.notaFinal >= 7)
  // }

  // reprovados(): void {
  //   this.listaAlunosFiltro = this.listaAlunos.filter(aluno => argumentsluno.notaFinal < 7)
  // }

}
