import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course:string

  constructor(private http:HttpClient) { }

  GetCourses(){
    return this.http.get('http://localhost:5286/api/Courses')
  }

  GetCoursebyId(id:number){
    return this.http.get(`http://localhost:5286/api/Courses/${id}`)
  }
}
