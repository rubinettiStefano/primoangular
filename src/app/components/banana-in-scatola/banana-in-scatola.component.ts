import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-banana-in-scatola',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './banana-in-scatola.component.html',
  standalone: true,
  styleUrl: './banana-in-scatola.component.css'
})
export class BananaInScatolaComponent
{
  valoreCasellaInput = "ciao";
  persone:any[] = [];
  persona ={name:"",surname:"",age:""}

  stampaValore()
  {
    alert(this.valoreCasellaInput);
  }

  cambiaValore()
  {
    this.valoreCasellaInput = "Arrivederci";
  }

  salvaPersona()
  {
    //ciao sono un commento
    let cloneDellaPers = {...this.persona};

    this.persone.push(cloneDellaPers);

    this.persona ={name:"",surname:"",age:""}
  }
}
