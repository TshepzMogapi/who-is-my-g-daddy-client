import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-earliest-ascendant',
  templateUrl: './earliest-ascendant.component.html',
  styleUrls: ['./earliest-ascendant.component.css']
})
export class EarliestAscendantComponent implements OnInit {

  ancestors: Person[] =[];

  earlyAncestor: Person;

  isLoading = false;
  isError = false;
  identityNumber = '';
  constructor(private personService: PersonService) { }

  ngOnInit() {
  }
  
  showAncestor() {
    this.ancestors = this.ancestors.sort((a, b) => new Date(a.BirthDate).getTime() - new Date(b.BirthDate).getTime());
    this.earlyAncestor = this.ancestors[this.ancestors.length - 1];
    console.log(this.earlyAncestor);
    
  }

  getAncestor(idNumber: string) {
    this.isLoading = true;
    this.isError = false;
    this.personService.getAncestor(parseInt(idNumber))
    .then(res => {
      console.log(res);
      
      this.ancestors = res.slice(1,);
      this.earlyAncestor = this.ancestors[this.ancestors.length - 1];
      this.isLoading = false;


    }).catch(err => {
      console.log(err);
      this.isError = true;
      this.isLoading = false;

    });
  }
}
