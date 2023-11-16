import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';

import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlappi:string = environment.endpoint+"Producto/";

  constructor(private http:HttpClient)
  {

  }
  Lista(): Observable<ResponseApi>
  {
    return this.http.get<ResponseApi>(`${this.urlappi}Lista`)
  }

  Guardar(request:Producto): Observable<ResponseApi>
  {
    return this.http.post<ResponseApi>(`${this.urlappi}Guardar`, request)
  }

  editar(request:Producto): Observable<ResponseApi>
  {
    return this.http.put<ResponseApi>(`${this.urlappi}editar`, request)
  }

  eliminar(id:number): Observable<ResponseApi>
  {
    return this.http.delete<ResponseApi>(`${this.urlappi}eliminar/${id}`)
  }
}
