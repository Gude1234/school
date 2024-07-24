import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/Services/leave-request.service';
import { StaffService } from 'src/app/Services/staff.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-studentleave',
  templateUrl: './studentleave.component.html',
  styleUrls: ['./studentleave.component.css']
})
export class StudentleaveComponent implements OnInit{

  leaves:any
  student:any
  displayedColumns: string[] = ['id', 'type', 'days', 'fromDate', 'toDate', 'description', 'status'];

  totalleaves= 25
  availableleaves = 0
  pendingleaves = 0
  declinedleaves = 0
  approvedleaves = 0


  constructor(private leave:LeaveRequestService, private studentService:StudentService){}

  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
    this.leave.GetLeaveRequestByName(this.student['name']).subscribe(response =>{
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
