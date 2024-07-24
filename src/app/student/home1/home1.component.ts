import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as echarts from 'echarts';
import { LeaveRequestService } from 'src/app/Services/leave-request.service';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StudentService } from 'src/app/Services/student.service';
import { StudentattendenceService } from 'src/app/Services/studentattendence.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit{

  student:any
  registeredSubjects:any
  leaves:any
  subjectNames = []
  leavesdata: number[] = []
  approvedLeaves = 0
  subjectAttendences = []
  subjectAttendence:any
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


  constructor(private router:Router,private route:ActivatedRoute, private registered: RegisteredsubjectsService, private studentService:StudentService,private leaveService:LeaveRequestService,private attendence:StudentattendenceService){}

  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
    this.registered.GetSubjectbyStudent(this.student['name']).subscribe(response => {
      this.registeredSubjects = response
      for(let i=0;i<this.registeredSubjects.length;i++){
        this.subjectNames.push(this.registeredSubjects[i]['subjectName']);
      }
      for(let i=0;i<this.subjectNames.length;i++){
        this.attendence.GetStudentAttendenceByStudentAndSubject(this.student['name'], this.subjectNames[i]).subscribe(response =>{
          this.subjectAttendence = response
          this.subjectAttendences.push(this.subjectAttendence.length)
          if(i === (this.subjectNames.length -1)){
            this.renderAttendeces(this.subjectAttendences)
          }
        })
      }
    })
    
    this.leaveService.GetLeaveRequestByName(this.student['name']).subscribe(response =>{
      this.leaves = response
      for(let i=0;i<this.leaves.length;i++){
        if(this.leaves[i]['status'] === 'Approved'){
          this.approvedLeaves += this.leaves[i]['days']
        }
      }
    })

    this.leaveService.GetLeaveRequestByName(this.student['name']).subscribe(response => {
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
    this.router.navigate(['subjects'],{relativeTo:this.route})
  }

  onLeave(){
    this.router.navigate(['leavemangement'],{relativeTo:this.route})
  }

  onAttendence(){
    this.router.navigate(['attendencehistory'],{relativeTo:this.route})
  }

  renderAttendeces(data1:any){
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
          data: this.subjectNames,
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
          name: 'Attendence',
          type: 'bar',
          barWidth: '50%',
          data: data1
        }
      ]
    };

    option && myChart.setOption(option);

  }

  renderLeaves(data1:any){
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('leavebarChart')!;
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
