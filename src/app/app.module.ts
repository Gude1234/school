import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './studenthome/main/main.component';
import { SideComponent } from './studenthome/side/side.component';
import { Home1Component } from './student/home1/home1.component';
import { RegistrationComponent } from './student/registration/registration.component';
import { SubjectsComponent } from './student/subjects/subjects.component';
import { StudentloginComponent } from './Login/studentlogin/studentlogin.component';
import { StaffloginComponent } from './Login/stafflogin/stafflogin.component';
import { AdminloginComponent } from './Login/adminlogin/adminlogin.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { StaffmainComponent } from './staffhome/staffmain/staffmain.component';
import { StaffsideComponent } from './staffhome/staffside/staffside.component';
import { Home2Component } from './staff/home2/home2.component';
import { StaffsubjectsComponent } from './staff/staffsubjects/staffsubjects.component';
import { StudentsComponent } from './staff/students/students.component';
import { StaffleaveComponent } from './staff/staffleave/staffleave.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { StaffattendenceComponent } from './staff/staffattendence/staffattendence.component';
import { StudentleaveComponent } from './student/studentleave/studentleave.component';
import { AttendencehistoryComponent } from './staff/attendencehistory/attendencehistory.component';
import { StudentattendencehistoryComponent } from './student/studentattendencehistory/studentattendencehistory.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminsideComponent } from './adminhome/adminside/adminside.component';
import { AdminmainComponent } from './adminhome/adminmain/adminmain.component';
import { Home3Component } from './admin/home3/home3.component';
import { TotalcoursesComponent } from './admin/totalcourses/totalcourses.component';
import { TotalsubjectsComponent } from './admin/totalsubjects/totalsubjects.component';
import { TotalstudentsComponent } from './admin/totalstudents/totalstudents.component';
import { TotalstaffComponent } from './admin/totalstaff/totalstaff.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudenthomeComponent,
    MainComponent,
    SideComponent,
    Home1Component,
    RegistrationComponent,
    SubjectsComponent,
    StudentloginComponent,
    StaffloginComponent,
    AdminloginComponent,
    StaffhomeComponent,
    StaffmainComponent,
    StaffsideComponent,
    Home2Component,
    StaffsubjectsComponent,
    StudentsComponent,
    StaffleaveComponent,
    LeaveRequestComponent,
    StaffattendenceComponent,
    StudentleaveComponent,
    AttendencehistoryComponent,
    StudentattendencehistoryComponent,
    AdminhomeComponent,
    AdminsideComponent,
    AdminmainComponent,
    Home3Component,
    TotalcoursesComponent,
    TotalsubjectsComponent,
    TotalstudentsComponent,
    TotalstaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
