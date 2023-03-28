import { HttpClient } from '@angular/common/http';
import { EventosModel } from './../../../../Models/EventosModel';
import { EventosService } from './../../../../Services/eventos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent {
  eventos: any = []
  public eventosFiltrados: any = [];
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }
  public set filtroLista(value: string) {
    this._filtroLista = value;
    //if ternario
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }
  filtrarEventos(filtrarPor: string): any {
    //não importa se é maiuscula ou minuscula
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
  constructor(private eventosService: EventosService, private http: HttpClient) {
    this.reloadEventos()
  }


  reloadEventos() {
    this.eventosService.GetAllEventos().subscribe((resultado) => {
      this.eventos = resultado;
      this.eventosFiltrados = this.eventos
    })
  }
}
