import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts = 0;
  @Input() date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.loveIts = 1;
  }

  onDontLove() {
    this.loveIts = -1;
  }

  getSuccess() {
    if (this.loveIts > 0) { return true; }
  }

  getDanger() {
    if (this.loveIts < 0) { return true; }
  }
}
