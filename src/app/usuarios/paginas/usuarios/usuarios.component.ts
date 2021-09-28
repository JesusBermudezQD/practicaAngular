import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../servicios/usuario-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  usuarios!: Usuario[];
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((resp) => {
      this.usuarios = resp;
      console.log(resp);
    });
  }
}
