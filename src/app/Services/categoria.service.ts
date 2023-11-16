import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlappi:string = environment.endpoint+"Categoria/";

  constructor(private http:HttpClient)
  {

  }

  Lista(): Observable<ResponseApi>
  {
    return this.http.get<ResponseApi>(`${this.urlappi}Lista`)
  }
}
