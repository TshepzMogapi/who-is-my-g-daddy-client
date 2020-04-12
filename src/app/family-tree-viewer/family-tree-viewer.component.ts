import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../person";
import { PersonService } from "../services/person.service";

@Component({
  selector: "app-family-tree-viewer",
  templateUrl: "./family-tree-viewer.component.html",
  styleUrls: ["./family-tree-viewer.component.css"],
})
export class FamilyTreeViewerComponent implements OnInit {
  persons: Person[] = [];

  isLoading = false;
  isError = false;
  identityNumber = '';

  more = [];

  end = 10;
  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getTestPersons();
  }

  loadMore() {
    this.end += 10;
  }
  getTestPersons() {
    // this.persons$ = this.personService.getAllPersons();
    for (let index = 0; index < 100; index++) {

      this.more.push({
        name : 'Name ' + index,
        surname : 'Surname ' + index,
      })
      
    }
  }

  getMyDescendants(idNumber: string) {
    this.persons= [];
    this.isLoading = true;
    this.isError = false;
    this.personService.getAllDescendants(parseInt(idNumber))
    .then(res => {
      this.persons = res;
      this.isLoading = false;


    }).catch(err => {
      console.log(err);
      this.isError = true;
      this.isLoading = false;

    });
  }
}
