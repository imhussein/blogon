import { Component, OnInit } from '@angular/core';
import Post from '../../../models/Post';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  id: string;
  post: Post = {
    title: '',
    details: '',
    image: '',
    createdAt: Date.now(),
  }
  createdAt;
  imageErr: string = '';
  uploadPercent: string;
  isDone: boolean = false;
  imageUrl: string;
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public afStorage: AngularFireStorage,
    public postsService: PostsService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postsService.getPost(<string> this.id).valueChanges().subscribe(post => {
      this.post.title = post.title;
      this.post.details = post.details;
      this.post.image = post.image;
      this.createdAt = post.createdAt;
    });
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

  updatePost({value, valid}: {value: any, valid: boolean}){
    if(valid){
      value.image = this.imageUrl || '';
      value.createdAt = this.createdAt;
      
      this.postsService.updatePost(<string> this.id, <any> value);
      this.flashMessagesService.show('Post Added', {
        cssClass: 'alert alert-success',
        timeout: 3000,
      });
      this.router.navigate(['/admin/posts']);
      console.log(value);
      
    } else {
      this.flashMessagesService.show('Please Fill In All Fields', {
        cssClass: 'alert alert-danger',
        timeout: 3000,
      });
      this.router.navigate(['/admin/posts/add']);
    }
  }

}
