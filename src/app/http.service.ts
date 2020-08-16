import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('https://us-central1-estudo-974fe.cloudfunctions.net/front_end');
  }
}
