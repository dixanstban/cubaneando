import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsuarioTabComponent } from './usuario-tab/usuario-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    UserlistComponent,
    UsuarioTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
