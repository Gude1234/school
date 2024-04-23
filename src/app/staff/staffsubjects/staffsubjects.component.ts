import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/staff.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-staffsubjects',
  templateUrl: './staffsubjects.component.html',
  styleUrls: ['./staffsubjects.component.css']
})
export class StaffsubjectsComponent implements OnInit{
  subjects:any
  staff:any

  displayedColumns: string[] = ['id', 'name', 'code', 'semester'];

  constructor(private subjectService:SubjectService, private staffService:StaffService){}
  ngOnInit(): void {
    this.staff = this.staffService.LoggedStaff
    this.subjectService.GetSubjectsbyStaff(this.staff['id']).subscribe(response => {
      this.subjects =response
    })
  }
}
