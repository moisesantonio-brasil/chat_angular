import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  btn_user1:boolean = true;
  btn_user2:boolean = false;
  btn_user3:boolean = true;
  btn_user4:boolean = false;
  btn_user5:boolean = true;
  btn_user6:boolean = false;
  btn_user7:boolean = true;
  btn_user8:boolean = false;

  seguir1():void{
this.btn_user1 = !this.btn_user1;
this.btn_user2 = !this.btn_user2;
  }
  seguir2():void{
this.btn_user3 = !this.btn_user3;
this.btn_user4 = !this.btn_user4;
  }
  seguir3():void{
this.btn_user5 = !this.btn_user5;
this.btn_user6 = !this.btn_user6;
  }
  seguir4():void{
this.btn_user7 = !this.btn_user7;
this.btn_user8 = !this.btn_user8;
  }
 
}
