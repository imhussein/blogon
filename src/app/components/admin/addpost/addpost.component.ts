import { Component, OnInit } from '@angular/core';
import Post from '../../../models/Post';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  newPost: Post = {
    title: '',
    details: '',
    image: '',
    createdAt: Date.now(),
  }
  imageErr: string = '';
  uploadPercent: string;
  isDone: boolean = false;
  imageUrl: string;
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public afStorage: AngularFireStorage,
    public postsService: PostsService,
  ) { }

  ngOnInit() {
  }

  uploadImage(e){
    const image = e.target.files[0];
    const path = `posts/${image.name}`;
    if(image.type.split('/')[0] !== 'image'){
      this.imageErr = 'Only Upload Images';
    } else {
      const uploadTask = this.afStorage.upload(path, image);
      const imageRef = this.afStorage.ref(path);
      uploadTask.percentageChanges().subscribe(value => {
        this.uploadPercent = `${value}%`;
        if(value == 100){
          this.isDone = true;
        } else {
          this.isDone = false;
        }
      })
      imageRef.getDownloadURL().subscribe(url => {
        this.imageUrl = url;
      });
    }
  }

  addPost({value, valid}: {value: Post, valid: boolean}){
    if(valid){
      value.createdAt = Date.now();
      value.image = this.imageUrl;
      this.postsService.addPost(<Post> value);
      this.flashMessagesService.show('Post Added', {
        cssClass: 'alert alert-success',
        timeout: 3000,
      });
      this.router.navigate(['/admin/posts']);
    } else {
      this.flashMessagesService.show('Please Fill In All Fields', {
        cssClass: 'alert alert-danger',
        timeout: 3000,
      });
      this.router.navigate(['/admin/posts/add']);
    }
  }

}
