import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Page} from '../models/page';

@Injectable()
export class PageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pagesUrl = 'api/pages';

  constructor(private http: Http) { }

  getPages(): Promise<Page[]> {
    return this.http.get(this.pagesUrl)
               .toPromise()
               .then(response => response.json().data as Page[])
               .catch(this.handleError);
  }

  getPage(id: number): Promise<Page> {
    const url = `${this.pagesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Page)
      .catch(this.handleError);
  }

  create(name: string, content: string): Promise<Page> {
    return this.http
      .post(this.pagesUrl, JSON.stringify({name: name, content: content}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Page)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}