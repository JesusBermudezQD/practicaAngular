import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TableComponent } from './componentes/table/table.component';
import { AccordionComponent } from './componentes/accordion/accordion.component';
import { CardSimpleComponent } from './componentes/card-simple/card-simple.component';
import { PostComponentComponente } from './componentes/post/post.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioComponent,
    TableComponent,
    AccordionComponent,
    CardSimpleComponent,
    PostComponentComponente,
  ],
  imports: [CommonModule, UsuariosRoutingModule],
  exports:[CardSimpleComponent,PostComponentComponente]
})
export class UsuariosModule {}
