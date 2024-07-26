import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  RequestCategory:string

  constructor(private http:HttpClient) { }

  PostLeaveRequest(data:any){
    return this.http.post('http://localhost:5286/api/LeaveRequests', data)
  }

  GetLeaveRequestByName(name:string){
    return this.http.get(`http://localhost:5286/api/LeaveRequests/Name/${name}`)
  }

  GetLeaveRequestByCategory(name:string){
    return this.http.get(`http://localhost:5286/api/LeaveRequests/category/${name}`)
  }

  PutLeaveRequest(id:number,data:any){
    return this.http.put(`http://localhost:5286/api/LeaveRequests/${id}`,data)
  }

}
