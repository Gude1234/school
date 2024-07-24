import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { StaffService } from 'src/app/Services/staff.service';
import { StudentService } from 'src/app/Services/student.service';
import { SubjectService } from 'src/app/Services/subject.service';
import type { EChartsOption } from 'echarts';
import { StudentsData } from 'src/app/Shared/studentsdata.model';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit{

  students:any
  staff:any
  subjects:any
  courses:any
  initOpts = {
    renderer: 'svg',
  };
  options:any
  options1:any
  options2:any
  options3:any
  TotalStudents:any
  TotalStaff:any

  constructor(private router:Router,private route:ActivatedRoute,private registered:RegisteredsubjectsService,private studentService:StudentService, private staffService:StaffService, private subjectService:SubjectService, private courseService:CourseService){}

  ngOnInit(): void {
    this.studentService.GetStudents().subscribe(reponse =>{
      this.students = reponse
      this.TotalStudents = this.students.length
      this.checkAndRenderComparison()
    })
    this.staffService.GetStaffs().subscribe(response =>{
      this.staff = response
      this.TotalStaff= this.staff.length
      this.checkAndRenderComparison()
    })
    this.courseService.GetCourses().subscribe(response =>{
      this.courses = response
      this.rendersubjectsbycourse()
      this.renderstudentsbycourse()
    })
    this.subjectService.GetSubjects().subscribe(response =>{
      this.subjects = response
      this.renderstudentsbysubject()
    })
  }

  onStudents(){
    this.router.navigate(['students'],{relativeTo:this.route})
  }

  onStaff(){
    this.router.navigate(['staff'],{relativeTo:this.route})
  }

  onCourses(){
    this.router.navigate(['courses'],{relativeTo:this.route})
  }

  onSubjects(){
    this.router.navigate(['subjects'],{relativeTo:this.route})
  }

  checkAndRenderComparison(): void {
    if (this.TotalStudents !== undefined && this.TotalStaff !== undefined) {
      this.RenderComparison(this.TotalStaff, this.TotalStudents);
    }
  }

  RenderComparison(data1:any, data2:any){
    const option:EChartsOption = {
      title: {
        text: 'Staff-Students Overview',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          // name: 'Staff-Students',
          type: 'pie',
          radius: '50%',
          data: [
            { value: data1, name: 'Staff' },
            { value: data2, name: 'Students' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.options = option;
  }

  rendersubjectsbycourse(){
    var data1: StudentsData[] = []
    let completedRequests = 0;

  const checkCompletion = () => {
    completedRequests++;
    if (completedRequests === this.courses.length) {
      const option: EChartsOption = {
        title: {
          text: 'Subjects based on Course',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Subjects',
            type: 'pie',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data:data1
          }
        ]
      };
      this.options1 = option;
    }
  };

  for (let course of this.courses) {
    var subject:any
    this.subjectService.GetSubjectsbyCourse(course['id']).subscribe(response => {
      subject = response
      data1.push(new StudentsData(subject.length, course['name']));
      checkCompletion();
    });
  }
  }

  renderstudentsbycourse(){
    var data1: StudentsData[] = []
    let completedRequests = 0;

    const checkCompletion = () => {
      completedRequests++;
      if (completedRequests === this.courses.length) {
        const option: EChartsOption = {
          title: {
            text: 'Students based on Course',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Students',
              type: 'pie',
              radius: '50%',
              data: data1,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.options2 = option;
      }
    };

    for (let course of this.courses) {
      var student:any
      this.studentService.GetStudentsbyCourse(course['id']).subscribe(response => {
        student = response
        data1.push(new StudentsData(student.length, course['name']));
        checkCompletion();
      });
    }
  }

  renderstudentsbysubject(){
    var data1: StudentsData[] = []
    let completedRequests = 0;

    const checkCompletion = () => {
      completedRequests++;
      if (completedRequests === this.courses.length) {
        const option: EChartsOption = {
          title: {
            text: 'Students based on Subjects',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Students',
              type: 'pie',
              radius: '50%',
              data: data1,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.options3 = option;
      }
    };

    for (let subject of this.subjects) {
      var student:any
      this.registered.GetSubjectbySubject(subject['name']).subscribe(response => {
        student = response
        data1.push(new StudentsData(student.length, subject['name']));
        checkCompletion();
      });
    }
  }
}
