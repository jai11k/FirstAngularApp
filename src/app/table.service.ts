import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
private baseURL='https://localhost:44355/api/Student/GetAllStudentsAndTheirMarksTemp'

  constructor(private http: HttpClient ) { }

  getData()
  {
    console.log(this.baseURL);
    return this.http.get(this.baseURL);
  }
}
