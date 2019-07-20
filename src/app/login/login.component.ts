import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../login/authentication.service';
import { MessageService } from 'primeng/primeng';
import { NavbarService } from '../shared/navbar/navbar.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

    userId: number;
    password: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private messageService: MessageService,
        private navbarService: NavbarService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
    }

    login() {
        if (this.userId && this.password) {
            this.authenticationService.login(this.userId, this.password)
                .pipe(first())
                .subscribe(
                    data => {
                        this.router.navigate(['questions']);
                    },
                    error => {
                        this.messageService.add({ key: 'tc', severity: 'error', summary: '', detail: error.message });
                    });
        } else {
            this.messageService.add({ key: 'tc', severity: 'error', summary: '', detail: 'Please enter the UserId/Password' });
        }
    }
}