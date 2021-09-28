import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album.interface';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.css']
})
export class CardSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() data!:Album | Post;
  @Input() url!:string;

  
}
