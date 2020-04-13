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

  // data = {
  //   json: [
  //     {
  //       "guid": "bc4c7a02-5379-4046-92be-12c67af4295a",
  //       "displayName": "Elentrix",
  //       "children": [{
  //         "guid": "85d412c2-ebc1-4d56-96c9-7da433ac9bb2",
  //         "displayName": "Child 1",
  //       }
          
  //       ]
  //     }
  //   ],
  //   config: {
  //     nodeWidth: 200,
  //     nodeHeight: 100
  //   }
  // }


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
      console.log(res);
      
      this.persons = res;
      this.isLoading = false;


    }).catch(err => {
      console.log(err);
      this.isError = true;
      this.isLoading = false;

    });
  }
}
