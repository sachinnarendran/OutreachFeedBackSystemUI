import { Component, OnInit, } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    ofmMenuItems: MenuItem[];
    constructor(public navbarService: NavbarService) { }

    ngOnInit() {
        this.ofmMenuItems = [
            {
                label: 'Dashboard',
                items:[
                    {
                        label: 'Reports',
                        routerLink: 'report'
                    },
                    {
                        label:'Dashboard',
                        routerLink:'Dashboard'
                    }
                ]
            },
            {
                label: 'Maintenance',
                items: [
                    {
                        label: 'Feedback Questions',
                        routerLink: 'questions'
                    },
                    {
                        label: 'Feedback Options',
                        routerLink: 'feedbackoptions'
                    },
                    {
                        label: 'Feedback',
                        routerLink: 'feedback'
                    },
                    {
                        label: 'File Upload',
                        routerLink: 'fileupload'
                    }
                ]
            }
        ];
    }
}
