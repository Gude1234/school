import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StaffService } from 'src/app/Services/staff.service';
import { StudentattendenceService } from 'src/app/Services/studentattendence.service';

@Component({
  selector: 'app-staffattendence',
  templateUrl: './staffattendence.component.html',
  styleUrls: ['./staffattendence.component.css']
})
export class StaffattendenceComponent implements OnInit{
  students:any
  staff:any
  displayedColumns: string[] = ['id', 'name', 'rollNumber', 'subject', 'course', 'semester','actions'];
  attendence = {
    "id":0,
    "studentId":"",
    "studentName":"",
    "date":"",
    "subjectName":"",
    "course":"",
    "status":"",
    "staffId":0
  }
  mode = true
  minDate =""
  studentNames = []
  constructor(private registered:RegisteredsubjectsService,private stafffService:StaffService,private attendenceService:StudentattendenceService){}

  ngOnInit(): void {
    this.staff = this.stafffService.LoggedStaff
    this.minDate = new Date().toISOString().split('T')[0]
    this.registered.GetSubjectbyStaff(this.staff['id']).subscribe(response => {
      this.students = response
    })
  }

  markPresent(data:any){
    this.attendence.studentId = data['rollNumber']
    this.attendence.studentName = data['studentName']
    this.attendence.subjectName = data['subjectName']
    this.attendence.course = data['course']
    this.attendence.staffId = this.staff['id']
    this.attendence.status = "Present"
    this.attendenceService.PostStudentAttendence(this.attendence).subscribe(response =>{
      this.mode = false
      this.studentNames.push(data['studentName'])
    })
  }

  markAbsent(data:any){
    this.attendence.studentId = data['rollNumber']
    this.attendence.studentName = data['studentName']
    this.attendence.subjectName = data['subjectName']
    this.attendence.course = data['course']
    this.attendence.staffId = this.staff['id']
    this.attendence.status = "Absent"
    this.attendenceService.PostStudentAttendence(this.attendence).subscribe(response =>{
      this.mode = false
      this.studentNames.push(data['studentName'])
    })
  }

}
