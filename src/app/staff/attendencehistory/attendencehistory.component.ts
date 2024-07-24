import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/staff.service';
import { StudentattendenceService } from 'src/app/Services/studentattendence.service';

@Component({
  selector: 'app-attendencehistory',
  templateUrl: './attendencehistory.component.html',
  styleUrls: ['./attendencehistory.component.css']
})
export class AttendencehistoryComponent implements OnInit{

  date = ""
  studentsAttendence:any
  staff:any
  displayedColumns: string[] = ['id', 'name', 'rollNumber', 'subject', 'course', 'status'];
  display = false

  constructor(private attendenceService:StudentattendenceService, private staffService:StaffService){
  }

  ngOnInit(): void {
    this.staff = this.staffService.LoggedStaff
  }

  onAttendence(){
    this.attendenceService.GetStudentSttendenceByDateAndStaff(this.staff['id'], this.date).subscribe(response =>{
      this.studentsAttendence = response
      this.display = true
    })
  }

}
