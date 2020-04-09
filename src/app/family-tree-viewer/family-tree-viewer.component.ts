import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-family-tree-viewer',
  templateUrl: './family-tree-viewer.component.html',
  styleUrls: ['./family-tree-viewer.component.css']
})
export class FamilyTreeViewerComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    this.persons$ =this.personService.getAllPersons();
  }

}
