import { Component } from '@angular/core';
import { NotasComponent } from './notas/notas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotasComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
