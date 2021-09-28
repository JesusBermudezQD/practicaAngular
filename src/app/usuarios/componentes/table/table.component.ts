import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  
  @Input() usuarios!:Usuario[];
  ngOnInit(): void {
  }

}
