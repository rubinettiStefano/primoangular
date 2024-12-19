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
    let giaPresente = false;


    // for(let i=0; i<this.merci.length;i++)
    //   if(this.merci[i].name==this.merce.name)
    //       giaPresente = true;

    for(let m of this.merci)
      if(m.name==this.merce.name)
           giaPresente = true;

    giaPresente = this.merci.filter(m=>m.name==this.merce.name).length!=0;

    giaPresente = this.merci.map(m => m.merce).includes(this.merce.name);

    giaPresente = this.merci.find(m=>m.name==this.merce.name);

    if(giaPresente)
    {
      alert("Merce già presente");
      return;
    }

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
