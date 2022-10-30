
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUser } from '../model/nuevo-user';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
   authUrl = 'https://back-end-prod.herokuapp.com/auth/';
  //authUrl = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUser: NuevoUser): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUser);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);
  }


}
