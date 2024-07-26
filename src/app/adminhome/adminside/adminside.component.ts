import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { LeaveRequestService } from 'src/app/Services/leave-request.service';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent implements OnInit{
  admin:any

  constructor(private router:Router, private route:ActivatedRoute,private adminService:AdminService, private leaveService:LeaveRequestService){}

  ngOnInit(): void {
    this.admin = this.adminService.LoggedAdmin
  }

  onHome(){
    this.router.navigate(["/adminhome"])
  }

  onStaffLeave(){
    this.leaveService.RequestCategory = "Staff"
    this.router.navigate(['/adminhome/staffleaverequests'])
  }
  onStudentLeave(){
    this.leaveService.RequestCategory = "Student"
    this.router.navigate(['/adminhome/studentsleaverequests'])
  }

  AddCourse(){
    this.router.navigate(['/adminhome/addcourse'])
  }

  onAttendence(){}

  onLogout(){
    this.router.navigate(["/home"])
  }

}
