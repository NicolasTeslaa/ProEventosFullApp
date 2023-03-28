import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  eventos: any
  private baseUrl = environment.ApiUrl;


  constructor(private http: HttpClient) { }

  GetAllEventos(): Observable<any> {
    let url = `/Evento`
    return this.http.get<any>(this.baseUrl + url)
  }


}
