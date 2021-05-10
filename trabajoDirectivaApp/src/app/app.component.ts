import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:object[];

  constructor(){
    this.entradas=[
      {titulo:"Python cada días más presente", texto:"dafdfdf"},
      {titulo:"Java presente desde hacemás de 20 años", texto:"dafdfdf"},
      {titulo:"Javascript cada vez más funcional", texto:"dafdfdf"},
      {titulo:"Kotlin, potencia para tus apps", texto:"dafdfdf"},
      {titulo:"Python cada días más presente", texto:"dafdfdf"},
      {titulo:"¿Dónde quedó Pascal?", texto:"dafdfdf"},
    ]
  }

  registro(){
    this.registrado=true;
    if(this.nombre.length>0 && this.apellido.length>0)
    this.mensaje="Usuario registrado con éxito con el nombre de ";
  }
}
