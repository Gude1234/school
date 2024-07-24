import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { StudentattendenceService } from 'src/app/Services/studentattendence.service';

@Component({
  selector: 'app-studentattendencehistory',
  templateUrl: './studentattendencehistory.component.html',
  styleUrls: ['./studentattendencehistory.component.css']
})
export class StudentattendencehistoryComponent implements OnInit{
  date = ""
  displayedColumns: string[] = ['id', 'subject', 'course', 'status'];
  subjectAttendence: any
  student:any
  display = false

  constructor(private attendence: StudentattendenceService, private studentService:StudentService){}

  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
  }

  onAttendence(){
    this.attendence.GetStudentSttendenceByDateAndStudent(this.student['rollNumber'], this.date).subscribe(response =>{
      this.subjectAttendence = response
      this.display = true
    })
  }

}
