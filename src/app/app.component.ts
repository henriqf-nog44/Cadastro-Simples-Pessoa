import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CadastroSP';
  pessoas = [];
  pessoa = ''
  adicionar() {
    this.pessoas.push(this.pessoa);
    this.pessoa = null;
  }
}
