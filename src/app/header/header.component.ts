import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() login1 = new EventEmitter<string>();

  StudentLogin(){
    this.login1.emit("student")
  }

  StaffLogin(){
    this.login1.emit("staff")
  }

  AdminLogin(){
    this.login1.emit("admin")
  }

}
