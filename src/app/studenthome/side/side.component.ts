import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit{

  student:any

  constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.student = this.studentService.LoggedStudent
  }

  onRegistration(){
    this.router.navigate(['registration'],{relativeTo:this.route})
  }

  onHome(){
    this.router.navigate(['/studenthome'])
  }

  onLogout(){
    this.router.navigate(['/home'])
  }

  onLeave(){
    this.router.navigate(['/studenthome/leaverequest'])
  }

}
