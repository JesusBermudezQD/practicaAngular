import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './paginas/posts/posts.component';
import { PostComponent } from './paginas/post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { UsuariosModule } from '../../usuarios.module';

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [CommonModule, PostsRoutingModule,UsuariosModule],
})
export class PostsModule {}
