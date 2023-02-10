import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/shared/fecha.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  public fecha = new Date
  public fechaObservable: Observable<Date>;
  

  constructor(public servicio: FechaService){}

  ngOnInit(): void {
  
  
   this.fechaObservable = this.servicio.getFecha();
}
}
