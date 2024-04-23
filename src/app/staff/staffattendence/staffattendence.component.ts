import { Component, OnInit } from '@angular/core';
import { RegisteredsubjectsService } from 'src/app/Services/registeredsubjects.service';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staffattendence',
  templateUrl: './staffattendence.component.html',
  styleUrls: ['./staffattendence.component.css']
})
export class StaffattendenceComponent implements OnInit{
  students:any
  staff:any
  displayedColumns: string[] = ['id', 'name', 'rollNumber', 'subject', 'course', 'semester','actions'];
  constructor(private registered:RegisteredsubjectsService,private stafffService:StaffService){}

  ngOnInit(): void {
    this.staff = this.stafffService.LoggedStaff
    this.registered.GetSubjectbyStaff(this.staff['id']).subscribe(response => {
      this.students = response
    })
  }

  markPresent(data:any){}

  markAbsent(data:any){}

}
