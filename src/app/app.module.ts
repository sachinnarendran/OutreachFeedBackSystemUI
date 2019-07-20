import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomPrimengModule } from './shared/primeng.module';
import { CustomMaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ApiService } from './services/api.service';

import { QuestionslistComponent } from './admin/questions/questionslist/questionslist.component';
import { QuestionsService } from './admin/questions/questions.service';
import { FeedbackoptionsComponent } from './admin/feedbackoptions/feedbackoptions.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { LoginComponent } from './login/login.component';
import { VolunteerComponent } from './volunteer-ui/volunteer.component';
import { FileuploadComponent } from './admin/fileupload/fileupload/fileupload.component';
import { AdminComponent } from './admin/ui/admin/admin.component'
import { FeedbackOptionsService } from './admin/feedbackoptions/feedbackoptions.service';
import { AuthenticationService } from './login/authentication.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackemailComponent } from './feedbackemail/feedbackemail.component';
import { NavbarService } from './shared/navbar/navbar.service';
import { FileUploadService } from './admin/fileupload/fileupload/fileupload.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReportsComponent } from './admin/reports/reports.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        QuestionslistComponent,
        FeedbackoptionsComponent,
        LoginComponent,
        VolunteerComponent,
        FileuploadComponent,
        AdminComponent,
        FeedbackComponent,
        FeedbackemailComponent,
        DashboardComponent,
        ReportsComponent               
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CustomPrimengModule,
        CustomMaterialModule,
        FlexLayoutModule        
    ],
    providers: [ApiService, AuthenticationService, QuestionsService, FeedbackOptionsService, NavbarService,FileUploadService],
    bootstrap: [AppComponent]
})
export class AppModule { }
