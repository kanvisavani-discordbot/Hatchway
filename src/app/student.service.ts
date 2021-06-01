import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from './students';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL = "https://api.hatchways.io/assessment/students";

  constructor(private httpClient: HttpClient) {  }

  public getStudentList(): Observable<any> {
    return this.httpClient.get<Students[]>(this.baseURL);
  }
}
