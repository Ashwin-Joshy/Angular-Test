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
      .get<any>('http://localhost:8080/allbooks')
      .subscribe((posts:any) => {
        this.posts=posts;
      });
  }
}
