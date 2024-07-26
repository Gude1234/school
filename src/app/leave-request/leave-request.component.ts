import { Component, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { LeaveRequestService } from '../Services/leave-request.service';
import { StudentService } from '../Services/student.service';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent {

  leaveRequest = {
    "name":"",
    "type":"",
    "description":"",
    "category":"",
    "fromDate":new Date(),
    "toDate":new Date(),
    "days":0,
    "status":"Pending"
  }

  constructor(private leave:LeaveRequestService, private studentService:StudentService, private staffService:StaffService){}

  onLeave(){
    const fromDate = new Date(this.leaveRequest.fromDate);
    const toDate = new Date(this.leaveRequest.toDate);
    this.leaveRequest.days = toDate.getDate() - fromDate.getDate()
    if (this.studentService.LoggedStudent !==undefined){
      this.leaveRequest.category = "Student"
    }
    if (this.staffService.LoggedStaff !==undefined){
      this.leaveRequest.category = "Staff"
    }
    this.leave.PostLeaveRequest(this.leaveRequest).subscribe(response => {
    })
  }

}
