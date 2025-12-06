import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Nota {
  titulo: string;
  texto: string;
  imagen?: string;
  color: string;
}

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent {

  
  titulo: string = '';
  texto: string = '';
  imagenSeleccionada: string | undefined;

  
  notas: Nota[] = [];

 //color 5 dif
private colores = [
  '#ffdede',
  '#fff3cd',
  '#d4edda',
  '#d1ecf1',
  '#e2e3f3'
];
  colorIndex = 0;

  
  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.imagenSeleccionada = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  agregarNota() {
    if (!this.titulo.trim() && !this.texto.trim()) return;

    const nueva: Nota = {
      titulo: this.titulo,
      texto: this.texto,
      imagen: this.imagenSeleccionada,
      color: this.colores[this.colorIndex],
    };

    // colores 
    this.colorIndex = (this.colorIndex + 1) % this.colores.length;

    this.notas.push(nueva);

    //eliminacion auto
    this.titulo = '';
    this.texto = '';
    this.imagenSeleccionada = undefined;
  }

  eliminarNota(i: number) {
    this.notas.splice(i, 1);
  }
}
