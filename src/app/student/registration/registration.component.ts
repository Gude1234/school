import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StudentService } from 'src/app/Services/student.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  student:any
  subjects:any
  displayedColumns: string[] = ['id', 'name', 'code', 'semester','action'];
  registeredSubjects = {
    "id":0,
    "student_Id":0,
    "name":"",
    "code":"",
    "semester":0,
    "course_Id":0,
    "staff_Id":0
  }
  mode = false
  registeredsubjects1:any
  subjectIds = []
  constructor(private studentService:StudentService,private courseService:CourseService,private subjectService:SubjectService, private registered:RegisteredsubjectsService){}

  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
    this.subjectService.GetSubjectsbyCourse(this.student['course_Id']).subscribe(response => {
      this.subjects = response
    })
    this.registered.GetAll().subscribe(response =>{
      this.registeredsubjects1 = response
      for(let i=0;i<this.registeredsubjects1.length;i++){
        this.subjectIds.push(this.registeredsubjects1[i]['id'])
      }
    })
  }

  register(element:any){
    this.registeredSubjects.student_Id = this.student['id']
    this.registeredSubjects.name = element['name']
    this.registeredSubjects.code = element['code']
    this.registeredSubjects.semester = element['semester']
    this.registeredSubjects.course_Id = element['course_Id']
    this.registeredSubjects.staff_Id = element['staff_Id']
    this.registered.PostRegisteredSubjects(this.registeredSubjects).subscribe(response => {
      this.mode = true
    })
  }
}
