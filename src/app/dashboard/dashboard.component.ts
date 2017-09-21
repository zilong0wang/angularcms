import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent {
    title: string = 'Angular CMS'
    description: string = 'Please select a page from the left hand sidebar.'
  
    constructor(
      private cs: ConfigService,
      private router: Router
    ) { }
  }