import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import Post from 'src/app/models/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postsNumber: number;
  latestPosts: Post[] = [];
  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getPosts().snapshotChanges().subscribe(posts => {
      this.postsNumber = posts.length;
      posts.forEach(post => {
        let key = post.payload.toJSON();
        key['$key'] = post.key;
        this.latestPosts.push(key as Post);
      });
    });
  }

}
