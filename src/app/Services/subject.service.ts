import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  GetSubjects(){
    return this.http.get('http://localhost:5286/api/Subjects')
  }

  GetSubjectsbyId(id:number){
    return this.http.get(`http://localhost:5286/api/Subjects/${id}`)
  }

  GetSubjectsbyCourse(id:number){
    return this.http.get(`http://localhost:5286/api/Subjects/course/${id}`)
  }

  GetSubjectsbyStaff(id:number){
    return this.http.get(`http://localhost:5286/api/Subjects/staff/${id}`)
  }
}
