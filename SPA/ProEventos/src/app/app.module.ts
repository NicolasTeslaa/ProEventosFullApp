import { EventosService } from './../Services/eventos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosListComponent } from './components/Eventos/eventos-list/eventos-list.component';
import { EventoAddComponent } from './components/Eventos/evento-add/evento-add.component';
import { EventoEditComponent } from './components/Eventos/evento-edit/evento-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventosListComponent,
    EventoAddComponent,
    EventoEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
