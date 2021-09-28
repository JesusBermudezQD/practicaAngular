import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  urlBase: string = 'https://jsonplaceholder.typicode.com';

  getPosts(id:number){
    if(id!=0){
      return this.http.get<Post[]>(`${this.urlBase}/posts?userId=${id}`)
    }else{
      return this.http.get<Post[]>(`${this.urlBase}/posts`)
    }
  }

  getPost(id:number){
    return this.http.get<Post>(`${this.urlBase}/posts/${id}`)
  }

  getPostComentarios(id:number){
    return this.http.get<Comment[]>(`${this.urlBase}/comments?postId=${id}`)
  }
}
