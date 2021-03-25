import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }

  public posts: Post[] = [
    {title: 'Выучить angular', text: 'выполнить задание', id: 1},
    {title: 'Выучить react', text: 'выполнить задание # 2', id: 2},
  ];

  public updatePosts(post: Post): void {
    this.posts.unshift(post);
  }
}
