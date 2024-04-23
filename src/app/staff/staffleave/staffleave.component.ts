import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/Services/leave-request.service';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staffleave',
  templateUrl: './staffleave.component.html',
  styleUrls: ['./staffleave.component.css']
})
export class StaffleaveComponent implements OnInit{
  leaves:any
  staff:any
  displayedColumns: string[] = ['id', 'type', 'days', 'fromDate', 'toDate', 'description', 'status'];

  totalleaves= 25
  availableleaves = 0
  pendingleaves = 0
  declinedleaves = 0
  approvedleaves = 0


  constructor(private leave:LeaveRequestService, private staffService:StaffService){}

  ngOnInit(): void {
    this.staff = this.staffService.LoggedStaff
    this.leave.GetLeaveRequestByName(this.staff['name']).subscribe(response =>{
      this.leaves = response
      for(let i=0;i<this.leaves.length;i++){
        if(this.leaves[i]['status'] === 'Pending'){
          this.pendingleaves += this.leaves[i]['days']
        }
        else if(this.leaves[i]['status'] === 'Declined'){
          this.declinedleaves += this.leaves[i]['days']
        }
        else if(this.leaves[i]['status'] === 'Approved'){
          this.approvedleaves += this.leaves[i]['days']
        }
      }
      this.availableleaves = this.totalleaves - this.approvedleaves - this.pendingleaves
    })
  }

}
