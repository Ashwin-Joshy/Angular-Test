import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = 'dempApi';
  constructor(private http: HttpClient) {}
  posts: any[] = [];
  loadPosts() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts:any) => {
        this.posts=posts;
      });
  }
}
