import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Page }        from '../models/page';
import { PageService } from '../services/page.service';

@Component({
  selector: 'page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: [ 
    '../dashboard/dashboard.component.css',
    './page-detail.component.css'
   ]
})
export class PageDetailComponent implements OnInit {
  page: Page;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.pageService.getPage(+params.get('id')))
      .subscribe(page => this.page = page);
  }

  goBack(): void {
    this.location.back();
  }
}