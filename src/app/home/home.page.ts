import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  
holamundo:string= '';
mensaje:any;
direccion:any;
colonia:any;


constructor(){
  this.mensaje="a";
  console.log(this.mensaje);
}

}
