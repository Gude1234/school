import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as echarts from 'echarts';
import { CourseService } from 'src/app/Services/course.service';
import { LeaveRequestService } from 'src/app/Services/leave-request.service';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StaffService } from 'src/app/Services/staff.service';
import { SubjectService } from 'src/app/Services/subject.service';
import { StudentsData } from 'src/app/Shared/studentsdata.model';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit{
  registeredStudents:any
  subjects:any
  staff:any
  data: StudentsData[] = []
  courses:any
  leaves:any
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  leavesdata: number[] = []
  approvedLeaves = 0


  constructor(private router:Router,private route:ActivatedRoute, private subjectService:SubjectService,private staffService:StaffService, private registered:RegisteredsubjectsService, private courseService:CourseService, private leaveService:LeaveRequestService){}

  ngOnInit(): void {
    this.staff = this.staffService.LoggedStaff
    this.subjectService.GetSubjectsbyStaff(this.staff['id']).subscribe(response => {
      this.subjects = response
    })
    this.leaveService.GetLeaveRequestByName(this.staff['name']).subscribe(response =>{
      this.leaves = response
      for(let i=0;i<this.leaves.length;i++){
        if(this.leaves[i]['status'] === 'Approved'){
          this.approvedLeaves += this.leaves[i]['days']
        }
      }
    })
    this.registered.GetSubjectbyStaff(this.staff['id']).subscribe(response => {
      this.registeredStudents = response
      this.courseService.GetCourses().subscribe(response1 => {
        this.courses = response1
        for(let course of this.courses){
          var value = 0
          for(let student of this.registeredStudents){
            if(course['name'] == student['course']){
              value +=1
            }
          }
          this.data.push(new StudentsData(value,course['name']))
        }
        this.renderstudents(this.data);
      })
    })
    this.leaveService.GetLeaveRequestByName(this.staff['name']).subscribe(response => {
      this.leaves = response
      for(let j=0;j<this.months.length;j++){
        var leaves1 = 0
        for(let i=0;i<this.leaves.length;i++){
          const fromDate = new Date(this.leaves[i]['fromDate'])
          const toDate = new Date(this.leaves[i]['toDate'])
          if(this.months[j] == this.months[fromDate.getMonth()] && this.months[j] == this.months[toDate.getMonth()] && this.leaves[i]['status'] == "Approved"){
            leaves1 += this.leaves[i]['days']
          }
        }
        this.leavesdata.push(leaves1)
      }
      this.renderLeaves(this.leavesdata);
    })
  }

  onSubjects(){
    this.router.navigate(["subjects"],{relativeTo:this.route})
  }

  onStudents(){
    this.router.navigate(['students'],{relativeTo:this.route})
  }

  onLeave(){
    this.router.navigate(['leavemangement'],{relativeTo:this.route})
  }

  renderstudents(data2:any){
    var chartDom = document.getElementById('pieChart');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: 'Students From Different Departments',
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
          data: data2,
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

    option && myChart.setOption(option);
  }

  renderLeaves(data1:any){
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('barChart')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: this.months,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Leaves',
          type: 'bar',
          barWidth: '60%',
          data: data1
        }
      ]
    };

    option && myChart.setOption(option);

  }

}
