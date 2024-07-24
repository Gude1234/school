import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-totalstaff',
  templateUrl: './totalstaff.component.html',
  styleUrls: ['./totalstaff.component.css']
})
export class TotalstaffComponent implements OnInit{
  staff:any
  displayedColumns:string[] = ["position","name","rollnumber","gender","email","phonenumber"]

  constructor(private staffService:StaffService){}

  ngOnInit(): void {
    this.staffService.GetStaffs().subscribe(response =>{
      this.staff = response
    })
  }
}
