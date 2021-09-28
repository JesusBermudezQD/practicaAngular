import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './paginas/post/post.component';
import { PostsComponent } from './paginas/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    pathMatch: 'full',
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
