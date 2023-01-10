import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
public valorSwitch : String;
public materias = ['Metodología de la investigación','Ciencias sociales',
'Geografía','Economía','Medio ambiente','Biografías','Arte']
}
