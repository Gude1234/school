import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  LoggedStudent:any

  constructor(private http:HttpClient) { }

  GetStudents(){
    return this.http.get('http://localhost:5286/api/Students')
  }

  GetStudentsbyId(id:number){
    return this.http.get(`http://localhost:5286/api/Students/${id}`)
  }
}
