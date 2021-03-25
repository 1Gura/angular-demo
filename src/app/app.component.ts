import { Component } from '@angular/core';

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
}
