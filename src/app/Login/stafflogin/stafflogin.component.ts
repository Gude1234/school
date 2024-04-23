import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit{

  staff ={
    "email":"",
    "password":""
  }

  staffs:any

  constructor(private router:Router, private staffService:StaffService){}

  ngOnInit(): void {
    this.staffService.GetStaffs().subscribe(response => {
      this.staffs = response
    })
  }

  onAuth(){
    for(let i=1;i<=this.staffs.length;i++){
      this.staffService.GetStaffbyId(i).subscribe(response => {
        if(this.staff.email === response['email'] && this.staff.password === response['password']){
          this.staffService.LoggedStaff = response
          this.router.navigate(['/staffhome'])
        }
      })
    }
  }

}
