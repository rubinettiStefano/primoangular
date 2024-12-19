import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Es1Component} from './components/es1/es1.component';
import {BananaInScatolaComponent} from './components/banana-in-scatola/banana-in-scatola.component';
import {Es2Component} from './components/es2/es2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Es1Component, BananaInScatolaComponent, Es2Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
//pensate ad export come public
export class AppComponent
{

  testo = "CIAO SONO UN TESTO";
  persona = {nome:"Stefano",cognome:"Rubinetti"};

  mostraAlert()
  {
    alert("CIAO");
  }

  cambiaTesto()
  {
    this.testo+="-";
  }



}
