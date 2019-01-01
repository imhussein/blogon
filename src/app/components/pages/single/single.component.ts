import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  postTitle: string;
  postImage: string;
  postDetails: string;
  postDate: number;
  id: string;
  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postsService.getPost(this.id).valueChanges().subscribe(post => {
      this.postTitle = post.title;
      this.postImage = post.image;
      this.postDetails = post.details;
      this.postDate = post.createdAt;
    });
  }

}
