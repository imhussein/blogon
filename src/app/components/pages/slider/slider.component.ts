import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
declare var $ :any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides: Post[] = [];
  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getSlides(5).snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let key = action.payload.toJSON();
        key['$key'] = action.key;
        this.slides.push(key as Post);
        this.slides.sort((a, b) => {
          if(a.createdAt > b.createdAt){
            return -1;
          } else {
            return 1;
          }
        });
      });
    });
    $(document).ready(function(){
      function waitElement(element){
        if(document.querySelector(element) != null){
          $('.slider').slick({
            autoplay: true,
            centerMode: true,
            arrows: false,
            autoplaySpeed: 6000,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
          return;
        } else {
          setTimeout(function(){
            waitElement(element);
          }, 100);
        }
      }
      waitElement('.slider');
    });
  }

}
