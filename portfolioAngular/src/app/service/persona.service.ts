import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 // url = 'http://localhost:8080/personas/';
  url = 'https://web-production-1c5c.up.railway.app/personas';
  // url = 'https://backend-productionn.herokuapp.com/personas';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.url+'traer');
  }




}
