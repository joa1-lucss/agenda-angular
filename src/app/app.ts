import { Component } from '@angular/core';
import { AdicionaContato } from "./adiciona-contato/adiciona-contato";

@Component({
  selector: 'app-root',
  imports: [AdicionaContato],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Agenda';

}
