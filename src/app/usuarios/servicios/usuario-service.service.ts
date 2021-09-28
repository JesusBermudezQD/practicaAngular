import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  
   urlBase:string="https://jsonplaceholder.typicode.com";

  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.urlBase}/users`);
  }
  getUsuario(id:number){
    return this.http.get<Usuario>(`${this.urlBase}/users/${id}`);
  }

}


//https://jsonplaceholder.typicode.com/posts