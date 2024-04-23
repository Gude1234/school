import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StudentService } from 'src/app/Services/student.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit{

  student:any
  registeredSubjects:any
  displayedColumns: string[] = ['id', 'name', 'code', 'semester'];
  course:any
  constructor(private studentService:StudentService, private registered:RegisteredsubjectsService, private subjectService:SubjectService,private courseService:CourseService){}

  
  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
    this.registered.GetSubjectbyStudent(this.student['id']).subscribe(response => {
      this.registeredSubjects = response
    })
    this.courseService.GetCoursebyId(this.student['course_Id']).subscribe(response => {
      this.course = response
    })
  }

}
