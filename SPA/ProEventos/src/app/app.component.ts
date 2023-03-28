import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private el: ElementRef){

  }
  title = 'ProEventos';
  toogleMenu() {

    let myTag = this.el.nativeElement.querySelector("#sidebarToggle");
    myTag.classList.toggle('sidenav-toggled');
    document.body.classList.toggle('sidenav-toggled');
  }
}
