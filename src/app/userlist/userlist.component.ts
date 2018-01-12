import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { mensaje } from '../mensaje';

import { USUARIOS } from '../lista-usuarios';
import { tab } from '../tab';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  usuarios = USUARIOS;
  selusuario: usuario;
  tabs : tab[] = [

  ]


  constructor() {

  }
  ngOnInit() {}

  onSelect(us: usuario): void {
    this.selusuario = us;
  }

}
