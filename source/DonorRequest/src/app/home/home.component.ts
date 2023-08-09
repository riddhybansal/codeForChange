import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { GlobalValuesService } from 'src/shared/global-values.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  slides = [
    { id: '1', img: '../assets/img/header-bg.jpg' },
    { id: '2', img: 'https://dummyimage.com/350x150/2a2b7a/fff' },
    { id: '3', img: 'https://dummyimage.com/350x150/1a2b7a/fff' },
    { id: '4', img: 'https://dummyimage.com/350x150/7a2b7a/fff' },
    { id: '5', img: 'https://dummyimage.com/350x150/9a2b7a/fff' },
    { id: '6', img: 'https://dummyimage.com/350x150/5a2b7a/fff' },
    { id: '6', img: 'https://dummyimage.com/350x150/4a2b7a/fff' },
  ];

  constructor(
    private globalValuesService: GlobalValuesService,
    private router: Router
  ) {
    this.globalValuesService.transparentHeader.next(true);
    this.globalValuesService.isHomeComponent.next(true);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.globalValuesService.transparentHeader.next(false);
    this.globalValuesService.isHomeComponent.next(false);
  }

  navigateToTrainings() {
    this.router.navigate(['/trainings']);
  }
}
