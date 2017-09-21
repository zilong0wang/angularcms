import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Page }                from '../models/page';
import { PageService }         from '../services/page.service';
import { ConfigService }       from '../services/config.service';

@Component({
    selector: 'page-list',
    templateUrl: './pages.component.html',
    styleUrls: [ './pages.component.css' ]
  })
  export class PagesComponent implements OnInit {
    pages: Page[];
    selectedPage: Page;
  
    constructor(
      private cs: ConfigService,
      private pageService: PageService,
      private router: Router) {
        this.getPages(); 
      }
  
    getPages(): void {
      this.pageService
          .getPages()
          .then(pages => {
            this.pages = pages;
            this.cs.setOption('pages', pages);
          });
    }
  
    ngOnInit(): void {
      this.pages = this.cs.config['pages'];
    }
  
    gotoDetail(page: Page): void {
      this.selectedPage = page;
      this.router.navigate(['/page', this.selectedPage.id]);
    }
  }