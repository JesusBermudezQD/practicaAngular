import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() usuario!:Usuario;
}
