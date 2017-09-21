import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Page} from '../models/page';
import {PageService} from '../services/page.service';
import {ConfigService} from '../services/config.service';

@Component({
    selector: 'page-create',
    templateUrl: './page-create.component.html',
    styleUrls: [ 
        '../dashboard/dashboard.component.css',
        './page-create.component.css'
     ]
})

export class PageCreateComponent implements OnInit {
    pages: Page[];

    constructor(
        private cs: ConfigService,
        private pageService: PageService,
        private router: Router
    ) { }
    
    add(name: string, content: string): void {
        name = name.trim();
        if(!name) {
            alert('Please enter a page name!')
            return;
        }
        this.pageService.create(name, content)
            .then(page => {
                this.pages.push(page);
                this.cs.setOption('pages', this.pages);
                alert('Page has been created!')
                let link = ['/'];
                this.router.navigate(link);
            });
    }

    ngOnInit(): void {
        this.pages = this.cs.config['pages'];
    }
}