import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private cs: ConfigService,
    private router: Router
  ) { }
}
