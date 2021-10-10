import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-tata';
  imageObject = [{
    image: './assets/images/gosses1.jpg',
    thumbImage: './assets/images/gosses1.jpg',
    title: 'conter'
}, {
    image: './assets/images/gosses2.jpg',
    thumbImage: './assets/images/gosses2.jpg',
    title: 'flatearther.jpg'
}, {
    image: './assets/images/gosses3.jpg',
    thumbImage: './assets/images/gosses3.jpg',
    title: 'pinture'
},{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
}];
}
