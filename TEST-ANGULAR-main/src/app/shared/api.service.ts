import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProdutos(){
    return this.http.get<any>('http://localhost:3000/posts')
    .pipe(map((res:any)=>{
      return res
    }))
  }






}
