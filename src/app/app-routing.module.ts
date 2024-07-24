import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { StudenthomeComponent } from "./studenthome/studenthome.component";
import { Home1Component } from "./student/home1/home1.component";
import { RegistrationComponent } from "./student/registration/registration.component";
import { SubjectsComponent } from "./student/subjects/subjects.component";
import { StaffhomeComponent } from "./staffhome/staffhome.component";
import { Home2Component } from "./staff/home2/home2.component";
import { StaffsubjectsComponent } from "./staff/staffsubjects/staffsubjects.component";
import { StudentsComponent } from "./staff/students/students.component";
import { StaffleaveComponent } from "./staff/staffleave/staffleave.component";
import { LeaveRequestComponent } from "./leave-request/leave-request.component";
import { StaffattendenceComponent } from "./staff/staffattendence/staffattendence.component";
import { StudentleaveComponent } from "./student/studentleave/studentleave.component";
import { AttendencehistoryComponent } from "./staff/attendencehistory/attendencehistory.component";
import { StudentattendencehistoryComponent } from "./student/studentattendencehistory/studentattendencehistory.component";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { Home3Component } from "./admin/home3/home3.component";
import { TotalstudentsComponent } from "./admin/totalstudents/totalstudents.component";
import { TotalstaffComponent } from "./admin/totalstaff/totalstaff.component";
import { TotalcoursesComponent } from "./admin/totalcourses/totalcourses.component";
import { TotalsubjectsComponent } from "./admin/totalsubjects/totalsubjects.component";

const routes:Routes = [
    {path:"home", component:HomeComponent},
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"studenthome",component:StudenthomeComponent, children:[
        {path:"", component:Home1Component},
        {path:"registration", component:RegistrationComponent},
        {path:"subjects",component:SubjectsComponent},
        {path:"leaverequest",component:LeaveRequestComponent},
        {path:"leavemangement", component:StudentleaveComponent},
        {path:"attendencehistory", component:StudentattendencehistoryComponent}
    ]},
    {path:"staffhome",component:StaffhomeComponent,children:[
        {path:"",component:Home2Component},
        {path:"subjects",component:StaffsubjectsComponent},
        {path:"students",component:StudentsComponent},
        {path:"leavemangement", component:StaffleaveComponent},
        {path:"leaverequest",component:LeaveRequestComponent},
        {path:"attendence",component:StaffattendenceComponent},
        {path:"attendencehistory", component:AttendencehistoryComponent}
    ]},
    {path:"adminhome", component:AdminhomeComponent, children:[
        {path:"", component:Home3Component},
        {path:"students",component:TotalstudentsComponent},
        {path:"staff",component:TotalstaffComponent},
        {path:"courses",component:TotalcoursesComponent},
        {path:"subjects",component:TotalsubjectsComponent}
    ]}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}