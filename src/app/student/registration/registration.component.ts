import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  Course:any
  displayedColumns: string[] = ['id', 'name', 'code', 'semester','action'];
  registeredSubjects = {
    "id":0,
    "studentName":"",
    "rollNumber":"",
    "subjectName":"",
    "subjectCode":"",
    "semester":0,
    "course":"",
    "staff_Id":0
  }
  registeredsubjects1:any
  subjectNames = []
  studentNames = []
  constructor(private studentService:StudentService,private cdr: ChangeDetectorRef,private courseService:CourseService,private subjectService:SubjectService, private registered:RegisteredsubjectsService){}

  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
    this.subjectService.GetSubjectsbyCourse(this.student['course_Id']).subscribe(response => {
      this.subjects = response
    })
    this.fetchSubjectsRegistered()
    this.courseService.GetCoursebyId(this.student['course_Id']).subscribe(response =>{
      this.Course = response
    })
  }

  fetchSubjectsRegistered(){
    this.registered.GetSubjectbyStudent(this.student['name']).subscribe(response =>{
      this.registeredsubjects1 = response
      for(let i=0;i<this.registeredsubjects1.length;i++){
        this.subjectNames.push(this.registeredsubjects1[i]['subjectName']);
      }
    })
  }

  register(element:any){
    this.registeredSubjects.studentName = this.student['name']
    this.registeredSubjects.rollNumber = this.student['rollNumber']
    this.registeredSubjects.subjectName = element['name']
    this.registeredSubjects.subjectCode= element['code']
    this.registeredSubjects.semester = element['semester']
    this.registeredSubjects.course = this.Course['name']
    this.registeredSubjects.staff_Id = element['staff_Id']
    this.registered.PostRegisteredSubjects(this.registeredSubjects).subscribe(response => {    
      this.subjectNames.push(this.registeredSubjects['subjectName'])
    })
  }
}
