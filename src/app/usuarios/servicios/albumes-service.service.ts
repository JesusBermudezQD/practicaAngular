import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album.interface';
import { Photo } from '../interfaces/photo.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlbumesService {
  constructor(private http: HttpClient) {}
  urlBase: string = 'https://jsonplaceholder.typicode.com';



  getAlbumes(id: number) {
    if(id!=0){
      return this.http.get<Album[]>(`${this.urlBase}/albums?userId=${id}`)
    }else{
      return this.http.get<Album[]>(`${this.urlBase}/albums`)
    }
  }

  getPhotosAlbumes(id:number){
    return this.http.get<Photo[]>(`${this.urlBase}/albums/${id}/photos`)
  }
}
