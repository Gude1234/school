import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  LoggedAdmin:any

  constructor(private http:HttpClient) { }

  GetAllAdmins(){
    return this.http.get('http://localhost:5286/api/Admins')
  }

  GetAdmin(id:number){
    return this.http.get(`http://localhost:5286/api/Admins/${id}`)
  }
}
