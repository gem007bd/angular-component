import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endpoint = 'http://jsonplaceholder.typicode.com/posts';
  constructor(public http: Http) {
    console.log('comes from data service');
   }
  getPosts() {
    return this.http.get(this.endpoint)
      .pipe(map(res => res.json()));
  }
}
