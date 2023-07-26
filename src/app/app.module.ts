import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { HomeComponent } from './components/home/home.component';
import { NotifComponent } from './components/notif/notif.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Conteudo1Component } from './components/conteudo1/conteudo1.component';
import { Conteudo2Component } from './components/conteudo2/conteudo2.component';
import { Conteudo3Component } from './components/conteudo3/conteudo3.component';
import { Conteudo4Component } from './components/conteudo4/conteudo4.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent,
    HomeComponent,
    NotifComponent,
    PerfilComponent,
    Conteudo1Component,
    Conteudo2Component,
    Conteudo3Component,
    Conteudo4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
