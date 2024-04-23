import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent {

  student = {
    "email":"",
    "password":""
  }

  students:any

  constructor(private router:Router, private studentService:StudentService){}

  ngOnInit(): void {
    this.studentService.GetStudents().subscribe(response => {
      this.students = response
    })
  }
  onAuth(){
    for(let i=1;i<=this.students.length;i++){
      this.studentService.GetStudentsbyId(i).subscribe(response => {
        if(this.student.email === response['email'] && this.student.password === response['password']){
          this.studentService.LoggedStudent = response
          this.router.navigate(['/studenthome'])
        }
      })
    }
  }

}
