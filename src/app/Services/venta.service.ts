import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Venta } from '../Interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlappi:string = environment.endpoint+"Venta/";

  constructor(private http:HttpClient)
  {

  }

  registrar(request:Venta): Observable<ResponseApi>
  {
    return this.http.post<ResponseApi>(`${this.urlappi}registrar`, request)
  }

  historial(BuscarPor:string, FechaInicio:string, FechaFin:string, NumeroVenta:string): Observable<ResponseApi>
  {
    return this.http.get<ResponseApi>
     (
      `${this.urlappi}historial?
       BuscarPor=${BuscarPor}&
       FechaInicio=${FechaInicio}&
       FechaFin=${FechaFin}&
       NumeroVenta=${NumeroVenta}`
     )
  }

  reporte(FechaInicio:string, FechaFin:string): Observable<ResponseApi>
  {
    return this.http.get<ResponseApi>
     (
      `${this.urlappi}historial?
       FechaInicio=${FechaInicio}&
       FechaFin=${FechaFin}`
     )
  }
}
