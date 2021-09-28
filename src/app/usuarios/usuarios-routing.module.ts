import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    pathMatch: 'full',
  },
  {
    path: 'usuarios/:id',
    component: UsuarioComponent,
  },
  {
    path: 'albumes',
    loadChildren: () =>
      import('./paginas/albumes/albumes.module').then((m) => m.AlbumesModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./paginas/posts/posts.module').then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
