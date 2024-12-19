import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-es2',
  imports: [
    NgForOf,
    FormsModule,
    NgStyle
  ],
  templateUrl: './es2.component.html',
  standalone: true,
  styleUrl: './es2.component.css'
})
export class Es2Component {


  merce = {name:"",price:"",weight:""};

  merci:any[] = []

  salvaMerce()
  {

    let clone = {...this.merce};
    this.merci.push(clone);
    this.merce= {name:"",price:"",weight:""};

  }

  chooseColor(peso:number)
  {
    if(peso>10)
      return "red";

    if(peso>5)
      return "yellow";

    return "green";

  }

  aCaso()
  {
    return Math.random()*100;
  }
}
