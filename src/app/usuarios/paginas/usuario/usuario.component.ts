import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../interfaces/album.interface';
import { Post } from '../../interfaces/post.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { AlbumesService } from '../../servicios/albumes-service.service';
import { PostsService } from '../../servicios/posts-service.service';
import { UsuarioService } from '../../servicios/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private usuarioService: UsuarioService,
    private albumesService: AlbumesService,
    private postsServices:PostsService
  ) {}

  usuario!: Usuario;
  albumes!: Album[];
  posts!:Post[];

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;

    this.usuarioService.getUsuario(id).subscribe((usuario) => {
      this.usuario = usuario;

      this.albumesService.getAlbumes(usuario.id).subscribe((resp) => {
        this.albumes = resp;
        console.log(resp);
      });

      this.postsServices.getPosts(id).subscribe(resp=>{
        this.posts=resp;
        console.log(resp);
        
      })
    });
  }
}
