import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  constructor() { }

  public getFecha(): Observable<any>{
    return interval(1000).pipe(map(_ => Date()));
  }
}
