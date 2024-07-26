import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/Services/leave-request.service';

@Component({
  selector: 'app-leaverequests',
  templateUrl: './leaverequests.component.html',
  styleUrls: ['./leaverequests.component.css']
})
export class LeaverequestsComponent implements OnInit{

  leaverequests:any
  displayedColumns:string[] = ["position","name","type","reason","fromdate","todate","actions"]
  show:boolean = true
  status:string[] = ["Approved","Declined"]
  category:string

  constructor(private leaverequestService:LeaveRequestService){}

  ngOnInit(): void {
    this.category = this.leaverequestService.RequestCategory
    this.leaverequestService.GetLeaveRequestByCategory(this.category).subscribe(response =>{
      this.leaverequests = response
    })
  }

  Approve(data:any){
    data['status'] = "Approved"
    this.leaverequestService.PutLeaveRequest(data['id'],data).subscribe(response =>{
    })
  }

  Decline(data:any){
    data['status'] = "Declined"
    this.leaverequestService.PutLeaveRequest(data['id'],data).subscribe(response =>{      
    })
  }

}
