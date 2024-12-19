import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../model/Person';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mostra-persone',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './mostra-persone.component.html',
  standalone: true,
  styleUrl: './mostra-persone.component.css'
})
export class MostraPersoneComponent
{

  persons:Person[]=[];

  constructor(private http: HttpClient)
  {
     this.http.get<Person[]>("/api/persons").subscribe(
       response => this.persons = response
     )
  }
  personToInsert:Person = {firstName:"",lastName:"",birthDate:new Date()}

  salva()
  {
    this.http.post<Person>("/api/persons",this.personToInsert).subscribe(

      response =>
      {
          this.persons.push(response);
          this.personToInsert = {firstName:"",lastName:"",birthDate:new Date()}
      }

    )
  }
}
