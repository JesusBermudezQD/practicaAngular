import { Component, OnInit } from '@angular/core';
import { Comment, Post } from 'src/app/usuarios/interfaces/post.interface';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interface';
import { PostsService } from 'src/app/usuarios/servicios/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postService: PostsService,
    
  ) {}

  posts!: Post[];
  comments!: Comment[];
  usuario!: Usuario;

  ngOnInit(): void {
    this.postService.getPosts(0).subscribe((resp) => {
      this.posts=resp;
      console.log(resp);
    });
  }
}
