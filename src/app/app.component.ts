import { Component } from '@angular/core';
import { tab } from './tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cubaneando 1.0';
  seltab = tab ;

  newseltab(e):void{
    this.seltab = e.current;
  }
}
