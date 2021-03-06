import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { usuario } from '../usuario';

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

  @Output() newseltab = new EventEmitter();

  mitabs : tab[] =[{
    usuario : { id:0 , nombre: 'Lobby'},
    mensajes : [{
      usuario: { id:0 , nombre: 'Lobby'},
      texto:'Hola Hola'
    }]
  }] ;


  constructor() {

  }

  ngOnInit() {
      this.newseltab.emit({current : this.mitabs[0]});
  }

  onSelect(us: usuario): void {
    this.selusuario = us;
  }

}
