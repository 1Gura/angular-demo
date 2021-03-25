import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // @ts-ignore
  @Input() post: Post;


  constructor() {
  }

  ngOnInit(): void {
  }

}
