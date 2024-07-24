import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-totalsubjects',
  templateUrl: './totalsubjects.component.html',
  styleUrls: ['./totalsubjects.component.css']
})
export class TotalsubjectsComponent implements OnInit{
  subjects:any
  displayedColumns:string[] = ["position","name","code","semester","course","staff"]
  
  constructor(private subjectService:SubjectService){}

  ngOnInit(): void {
    this.subjectService.GetSubjectsFullDetails().subscribe(response =>{
      this.subjects = response
    })
  }
}
