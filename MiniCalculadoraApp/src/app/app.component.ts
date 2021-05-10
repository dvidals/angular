import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  n1:string="0";
  n2:string="0";
  resultado:number=0;
  operacion:string="";
  sumar():void{
    this.resultado=parseInt(this.n1)+ parseInt(this.n2);
  }
  restar():void{
    this.resultado=parseInt(this.n1)- parseInt(this.n2);
  }
  multiplicar():void{
    this.resultado=parseInt(this.n1)* parseInt(this.n2);
  }
  dividir():void{
    this.resultado=parseInt(this.n1)/ parseInt(this.n2);
  }
}
