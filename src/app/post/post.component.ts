import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  // @ts-ignore
  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef | undefined;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log(this.infoRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('CHECK');
  }

  ngAfterContentInit(): void {
    console.log('AFTER');
  }

  ngAfterContentChecked() {
    console.log('CHECKED');
  }

  ngAfterViewInit(): void {
    console.log('VIEWINIT');
  }

  ngAfterViewChecked(): void {
    console.log('ViewChecked');
  }

}
