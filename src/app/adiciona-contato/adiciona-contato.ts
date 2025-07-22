import { Component } from '@angular/core';
import { Contato, TipoContato } from './contato';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrls: ['./adiciona-contato.scss']
})
export class AdicionaContato {
  contatos: Contato[] = [];
  nome: string = '';
  telefone: string = '';
  email: string = '';
  aniversario: string = '';
  tipo: TipoContato = TipoContato.Outro;

  tipos = Object.values(TipoContato);

  adicionar() {
    const novoContato = new Contato(
      this.nome,
      this.telefone,
      this.email,
      new Date(this.aniversario),
      this.tipo
    );
    this.contatos.push(novoContato);

    // Limpar formulário
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.aniversario = '';
    this.tipo = TipoContato.Outro;
  }
}
