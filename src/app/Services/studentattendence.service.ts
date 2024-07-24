import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentattendenceService {

  constructor(private http:HttpClient) { }

  PostStudentAttendence(data:any){
    return this.http.post("http://localhost:5286/api/StudentAttendences",data)
  }

  GetStudentSttendenceByDateAndStaff(staffid:number, date:string){
    return this.http.get(`http://localhost:5286/api/StudentAttendences/${date}/${staffid}`)
  }

  GetStudentSttendenceByDateAndStudent(studentid:string, date:string){
    return this.http.get(`http://localhost:5286/api/StudentAttendences/${date}/student/${studentid}`)
  }

  GetStudentAttendenceByStaff(id:number){
    return this.http.get(`http://localhost:5286/api/StudentAttendences/staff/${id}`)
  }

  GetStudentAttendenceByStudentAndSubject(studentName:string, subjectName:string){
    return this.http.get(`http://localhost:5286/api/StudentAttendences/student/${studentName}/subject/${subjectName}`)
  }
}
