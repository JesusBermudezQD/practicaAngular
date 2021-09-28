import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment, Post } from 'src/app/usuarios/interfaces/post.interface';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interface';
import { PostsService } from 'src/app/usuarios/servicios/posts-service.service';
import { UsuarioService } from 'src/app/usuarios/servicios/usuario-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private activatedRouter: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  post!: Post;
  comments!: Comment[];
  usuario!: Usuario;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;

    

    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
      console.log(post);

      this.postService
        .getPostComentarios(this.post.id)
        .subscribe((comentarios) => {
          this.comments = comentarios;
        });

        this.usuarioService.getUsuario(this.post.userId).subscribe((usuario) => {
          this.usuario = usuario;
        });
    });
  }
}
