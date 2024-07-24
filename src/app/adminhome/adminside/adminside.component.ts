import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent implements OnInit{
  admin:any

  constructor(private router:Router, private adminService:AdminService){}

  ngOnInit(): void {
    this.admin = this.adminService.LoggedAdmin
  }

  onHome(){
    this.router.navigate(["/adminhome"])
  }

  onLeave(){}

  onAttendence(){}

  onLogout(){
    this.router.navigate(["/home"])
  }

}
