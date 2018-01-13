import { Component, OnInit , Input} from '@angular/core';
import { tab } from '../tab';

@Component({
  selector: 'app-usuario-tab',
  templateUrl: './usuario-tab.component.html',
  styleUrls: ['./usuario-tab.component.css']
})
export class UsuarioTabComponent implements OnInit {

  @Input() tabs : tab[];
  constructor() { }

  ngOnInit() {
  }

}
