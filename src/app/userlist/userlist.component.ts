import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { USUARIOS } from '../lista-usuarios';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  usuarios = USUARIOS;
  selusuario: usuario;

  constructor() {}
  ngOnInit() {}

  onSelect(us: usuario): void {
    this.selusuario = us;
  }

}
