import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/Post';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  @Input() slide: Post;
  constructor() { }

  ngOnInit() {
  }

}
