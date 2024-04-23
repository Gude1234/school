import { Component, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { LeaveRequestService } from '../Services/leave-request.service';

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
    "fromDate":new Date(),
    "toDate":new Date(),
    "days":0,
    "status":"Pending"
  }

  constructor(private leave:LeaveRequestService){}

  onLeave(){
    const fromDate = new Date(this.leaveRequest.fromDate);
    const toDate = new Date(this.leaveRequest.toDate);
    this.leaveRequest.days = toDate.getDate() - fromDate.getDate()
    this.leave.PostLeaveRequest(this.leaveRequest).subscribe(response => {
    })
  }

}
