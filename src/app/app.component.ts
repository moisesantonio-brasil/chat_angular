import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
primeiro :boolean = false;
segundo : boolean = true;
terceiro :boolean = true;
quarto : boolean = false;
quinto :boolean = true;
sexto : boolean = false;

corFuncao1():void{
  this.primeiro = false;
  this.segundo = true;
  this.terceiro = true;
  this.quarto = false;
  this.quinto = true;
  this.sexto = false;
}
corFuncao2():void{
  this.primeiro = true;
  this.segundo = false;
  this.terceiro = false;
  this.quarto = true;
  this.quinto = true;
  this.sexto = false;
}
corFuncao3():void{
  this.primeiro = true;
  this.segundo = false;
  this.terceiro = true;
  this.quarto = false;
  this.quinto = false;
  this.sexto = true;
}
}
