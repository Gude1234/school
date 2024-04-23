import { Component, OnInit } from '@angular/core';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StaffService } from 'src/app/Services/staff.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  staff:any
  registeredStudents:any

  displayedColumns: string[] = ['id', 'name', 'rollNumber', 'subject', 'course', 'semester'];


  constructor(private registered:RegisteredsubjectsService,private studentService:StudentService, private staffService:StaffService){}

  ngOnInit(): void {
    this.staff = this.staffService.LoggedStaff
    this.registered.GetSubjectbyStaff(this.staff['id']).subscribe(response => {
      this.registeredStudents = response
    })
  }

}
