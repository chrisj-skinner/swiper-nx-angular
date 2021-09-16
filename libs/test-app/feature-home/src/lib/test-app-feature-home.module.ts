import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestAppHomeComponent } from './test-app-home/test-app-home.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TestAppHomeComponent,
      },
    ]),
  ],
  declarations: [TestAppHomeComponent],
  exports: [TestAppHomeComponent],
})
export class TestAppFeatureHomeModule {}
