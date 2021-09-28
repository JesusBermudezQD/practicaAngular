import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/usuarios/interfaces/photo.interfaces';
import { AlbumesService } from 'src/app/usuarios/servicios/albumes-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {

  photos!:Photo[];

  constructor(
    private albumServices: AlbumesService,
    private activatedRouter: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.albumServices.getPhotosAlbumes(id).subscribe((resp) => {
      this.photos=resp;
      console.log(resp);
    });
  }
}
