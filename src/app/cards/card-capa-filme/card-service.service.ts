import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';
/*import { Card } from './card';*/

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private readonly API = 'http://localhost:8080/filmes';

  constructor(private http: HttpClient) {}

    list(): Observable<Card[]>{
      return this.http.get<Card[]>(this.API);
    }

}


