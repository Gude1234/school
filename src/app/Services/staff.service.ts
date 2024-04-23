import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  LoggedStaff:any

  constructor(private http:HttpClient) { }

  GetStaffs(){
    return this.http.get('http://localhost:5286/api/Staffs')
  }

  GetStaffbyId(id:number){
    return this.http.get(`http://localhost:5286/api/Staffs/${id}`)
  }
}
