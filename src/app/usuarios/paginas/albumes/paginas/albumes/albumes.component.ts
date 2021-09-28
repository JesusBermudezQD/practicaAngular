import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/usuarios/interfaces/album.interface';
import { AlbumesService } from 'src/app/usuarios/servicios/albumes-service.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  constructor(private albumesService:AlbumesService) { }
  
  albumes!:Album[];
  
  ngOnInit(): void {

    this.albumesService.getAlbumes(0).subscribe(resp=>{
      this.albumes=resp;
      console.log(resp);
    })
  }


}
