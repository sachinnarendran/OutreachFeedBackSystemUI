import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionslistComponent } from './admin/questions/questionslist/questionslist.component';
import { LoginComponent } from './login/login.component';
import { VolunteerComponent } from './volunteer-ui/volunteer.component';
import { AdminComponent } from './admin/ui/admin/admin.component';
import { FileuploadComponent } from './admin/fileupload/fileupload/fileupload.component';
import { FeedbackoptionsComponent } from './admin/feedbackoptions/feedbackoptions.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackemailComponent } from './feedbackemail/feedbackemail.component';
import { AuthGuard } from './guards/_authguard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReportsComponent } from './admin/reports/reports.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'questions', component: QuestionslistComponent },
    { path: 'feedbackoptions', component: FeedbackoptionsComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'fileupload', component: FileuploadComponent },
    {path:'dashboard',component:DashboardComponent},
    {path:'report',component:ReportsComponent},
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
