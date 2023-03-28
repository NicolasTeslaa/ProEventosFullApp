import { EventoEditComponent } from './components/Eventos/evento-edit/evento-edit.component';
import { EventoAddComponent } from './components/Eventos/evento-add/evento-add.component';
import { EventosListComponent } from './components/Eventos/eventos-list/eventos-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventos', component: EventosListComponent },
  { path: 'eventoAdd', component: EventoAddComponent },
  { path: 'eventoEdit', component: EventoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
