import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo2',
  templateUrl: './conteudo2.component.html',
  styleUrls: ['./conteudo2.component.css']
})
export class Conteudo2Component {
  name3 : string = 'Usuário03';

  valorcomentario1: boolean = true;
  valorcomentario1_s :boolean = false;
  valorshare1:boolean = true;
  valorshare1_s :boolean = false;
  valorcurtir1:boolean = true;
  valorcurtir1_s: boolean = false;
  valorview1: boolean = true;
  valorview1_s: boolean = false;
  comentario_atv:boolean = false;
  resposta:boolean = false;
  visualizacao:boolean = false;
  botao_retirar:boolean = false;
  
  base_share: boolean = false;
  mostrar_comentario():void{
  this.comentario_atv = !this.comentario_atv;
  }
  
  add_comentario():void{
    this.valorcomentario1 = false;
    this.valorcomentario1_s = true;
    this.resposta = true;
    this.botao_retirar = true;
  }
  rtr_comentario():void{
    this.valorcomentario1 = true;
    this.valorcomentario1_s = false;
    this.resposta = false;
    this.botao_retirar = false;
  }
  
  
  mostrar_share():void{
  this.base_share = !this.base_share;
  }
  
  compartilhado():void{
  this.valorshare1 = false;
  this.valorshare1_s = true;
  this.base_share = false;
  }
  
  curtir():void{
  this.valorcurtir1 = !this.valorcurtir1;
  this.valorcurtir1_s = !this.valorcurtir1_s;
  }
  
  mostrar_imagem():void{
    this.visualizacao = !this.visualizacao;
    this.valorview1 = false;
    this.valorview1_s = true;
  }
}
