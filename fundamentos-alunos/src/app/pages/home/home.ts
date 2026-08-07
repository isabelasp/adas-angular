import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo: string = 'Seja Bem Vindo!'
  subtitulo: string = 'Este é um sistema de gerenciamente Escolar'
  ativarDesabilitado: boolean = false


}
