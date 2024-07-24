import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisteredsubjectsService {

  constructor(private http:HttpClient) { }

  GetAll(){
    return this.http.get('http://localhost:5286/api/RegisteredSubjects')
  }

  GetSubjectbyStudent(name:string){
    return this.http.get(`http://localhost:5286/api/RegisteredSubjects/student/${name}`)
  }

  GetSubjectbySubject(name:string){
    return this.http.get(`http://localhost:5286/api/RegisteredSubjects/subject/${name}`)
  }

  GetSubjectbyStaff(id:number){
    return this.http.get(`http://localhost:5286/api/RegisteredSubjects/staff/${id}`)
  }

  PostRegisteredSubjects(data:any){
    return this.http.post('http://localhost:5286/api/RegisteredSubjects',data)
  }
}
