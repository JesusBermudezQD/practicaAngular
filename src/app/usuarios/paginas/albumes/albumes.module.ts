import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumesRoutingModule } from './albumes-routing.module';
import { AlbumesComponent } from './paginas/albumes/albumes.component';
import { AlbumComponent } from './paginas/album/album.component';
import { CardSimpleComponent } from '../../componentes/card-simple/card-simple.component';
import { UsuariosModule } from '../../usuarios.module';

@NgModule({
  declarations: [AlbumesComponent, AlbumComponent],
  imports: [CommonModule, AlbumesRoutingModule,UsuariosModule],
})
export class AlbumesModule {}
