import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staffside',
  templateUrl: './staffside.component.html',
  styleUrls: ['./staffside.component.css']
})
export class StaffsideComponent implements OnInit{

  staff:any
  
  constructor(private staffService:StaffService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.staff = this.staffService.LoggedStaff
  }

  onHome(){
    this.router.navigate(['/staffhome'])
  }

  onLogout(){
    this.router.navigate(['/home'])
  }

  onLeave(){
    this.router.navigate(['/staffhome/leaverequest'])
  }

  onAttendence(){
    this.router.navigate(['/staffhome/attendence'])
  }
}
