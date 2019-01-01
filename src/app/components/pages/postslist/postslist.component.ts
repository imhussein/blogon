import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {
  trimmed: string;
  posts: Post[] = [];
  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getPosts().snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let key = action.payload.toJSON();
        key['$key'] = action.key;
        this.posts.push(key as Post);
        this.posts.sort((a, b) => {
          if(a.createdAt > b.createdAt){
            return -1;
          } else {
            return 1;
          }
        });
        this.posts.map(post => {
          post.details = post.details.substring(0, 80) + '....';
        });
      });
    });
  }

}


