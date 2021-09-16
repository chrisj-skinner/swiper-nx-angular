import { Component, ChangeDetectionStrategy } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'test-test-app-home',
  templateUrl: './test-app-home.component.html',
  styleUrls: ['./test-app-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestAppHomeComponent {
  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  breakpoints = {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };
  navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };
}
