import { Component, Input, OnInit } from '@angular/core';
import { Comment, Post } from '../../interfaces/post.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { PostsService } from '../../servicios/posts-service.service';
import { UsuarioService } from '../../servicios/usuario-service.service';

@Component({
  selector: 'app-post-componente',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponentComponente implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private postService: PostsService
  ) {}

  @Input() post!: Post;

  comments!: Comment[];
  usuario!: Usuario;

  ngOnInit(): void {
    if (this.post) {
      console.log(this.post);
      this.postService
        .getPostComentarios(this.post.id)
        .subscribe((comentarios) => {
          this.comments = comentarios;
        });

        this.usuarioService.getUsuario(this.post.userId).subscribe((usuario) => {
          this.usuario = usuario;
        });
    }
  }
}
