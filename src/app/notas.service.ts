import { Injectable } from '@angular/core';

export interface Nota {
  id: number;
  texto: string;
  imagen?: string;   // base natural o64
  fechaModificado: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private notas: Nota[] = [];

  constructor() {}

  getNotas() {
    // orden de fech a
    return this.notas.sort(
      (a,b) => b.fechaModificado.getTime() - a.fechaModificado.getTime()
    );
  }

  agregarNota(texto: string, imagen?: string) {
    const nueva: Nota = {
      id: this.notas.length + 1,
      texto,
      imagen,
      fechaModificado: new Date()
    };
    this.notas.push(nueva);
  }

  eliminarNota(id: number) {
    this.notas = this.notas.filter(n => n.id !== id);
  }
}
