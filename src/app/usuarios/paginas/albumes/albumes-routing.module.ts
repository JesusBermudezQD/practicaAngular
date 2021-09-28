import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './paginas/album/album.component';
import { AlbumesComponent } from './paginas/albumes/albumes.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumesComponent,
    pathMatch: 'full'
  },
  {
    path:"album/:id",
    component:AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumesRoutingModule {}
