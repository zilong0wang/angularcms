import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {ConfigService} from '../services/config.service';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: [ 
        '../dashboard/dashboard.component.css',
        './login.component.css' 
    ]
})

export class LoginComponent {
    private uname = 'admin';
    private pass = 'password';

    constructor(
        private cs: ConfigService,
        private router: Router
    ) {}

    login(username: string, password: string): void {
        if((username === this.uname) && (password === this.pass)) {
            this.cs.setOption('isLogin', true);
            let link = ['/'];
            this.router.navigate(link);
        } else {
            alert('incorrect login. Please try again.')
        }
    }
}