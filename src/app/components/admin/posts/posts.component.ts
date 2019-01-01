import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import Post from 'src/app/models/Post';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    public postsService: PostsService,
    public flashMessagesService: FlashMessagesService,
    public router: Router,
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
        })
      });
    });
  }

  deletePost(id: string, event){
    event.preventDefault();
    this.postsService.deletePost(<string> id);
    this.flashMessagesService.show('Post Deleted', {
      cssClass: 'alert alert-success',
      timeout: 3000,
    });
    this.router.navigate(['/admin/posts']);
  }

}
