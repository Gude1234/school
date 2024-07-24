import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{

  admin = {
    "email":"",
    "password":""
  }

  admins:any

  constructor(private adminService:AdminService, private router:Router){}
  ngOnInit(): void {
    this.adminService.GetAllAdmins().subscribe(response =>{
      this.admins = response
    })
  }

  onAuth(){
    for(let i=1;i<=this.admins.length;i++){
      this.adminService.GetAdmin(i).subscribe(response => {
        if(this.admin.email == response['email'] && this.admin.password == response['password']){
          this.adminService.LoggedAdmin = response
          this.router.navigate(['/adminhome'])
        }
      })
    }
  }

}
