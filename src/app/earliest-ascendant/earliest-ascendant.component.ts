import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-earliest-ascendant',
  templateUrl: './earliest-ascendant.component.html',
  styleUrls: ['./earliest-ascendant.component.css']
})
export class EarliestAscendantComponent implements OnInit {

  ancestor: Person[];

  isLoading = false;
  isError = false;
  identityNumber = '';
  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  getAncestor(idNumber: string) {
    this.isLoading = true;
    this.isError = false;
    this.personService.getAncestor(parseInt(idNumber))
    .then(res => {
      console.log(res);
      
      this.ancestor = res;
      this.isLoading = false;


    }).catch(err => {
      console.log(err);
      this.isError = true;
      this.isLoading = false;

    });
  }
}
