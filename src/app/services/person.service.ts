import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Person } from "../person";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private apiBaseUrl = environment.apiBaseUrl;
  private entityApiUrl = "api/persons";

  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<Person[]> {
    return this.http
      .get<Person[]>(this.apiBaseUrl + this.entityApiUrl)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  getAllDescendants(personId: number) {
    
    return this.http
      .get<Person[]>(this.apiBaseUrl 
        + this.entityApiUrl + "/" + personId)
      .pipe(retry(1), catchError(this.errorHandler)).toPromise();
  }

  getAncestor(personId: number) {
    return this.http
    .get<Person[]>(this.apiBaseUrl 
      + "api/ancestors" + "/" + personId)
    .pipe(retry(1), catchError(this.errorHandler)).toPromise();
  }

  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
