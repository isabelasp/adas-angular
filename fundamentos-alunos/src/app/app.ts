import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { AlunoLista } from "./pages/aluno-lista/aluno-lista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AlunoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fundamentos-alunos');
}
