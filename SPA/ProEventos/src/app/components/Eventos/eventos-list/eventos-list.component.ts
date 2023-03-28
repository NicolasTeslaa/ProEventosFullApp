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
  eventos: any
  constructor(private eventosService: EventosService, private http: HttpClient) {
    this.reloadEventos()
  }
  GetAllEventos2(): void {
    this.http.get('https://localhost:5252/api/Evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    )

  }

  reloadEventos(){
    this.eventosService.GetAllEventos().subscribe((resultado)=>{
      this.eventos = resultado;
    })
  }
}
