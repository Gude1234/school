import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-totalstudents',
  templateUrl: './totalstudents.component.html',
  styleUrls: ['./totalstudents.component.css']
})
export class TotalstudentsComponent implements OnInit{

  displayedColumns:string[] = ["position","name","rollnumber","gender","email","phonenumber","course"]
  students:any

  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    this.studentService.GetStudentFullDetails().subscribe(response =>{
      this.students = response
    })
  }
}
