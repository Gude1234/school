import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  loginMode:string = "student"

  constructor(private router:Router, private studentService:StudentService){}

  ngOnInit(): void {
  }
  
  onLoginType(value:string){
    this.loginMode = value
  }

}
