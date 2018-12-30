import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CourseDetailPage } from './course-detail.page';
import {CourseDetailService} from './course-detail.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailPage
  },
  {
    path: ':id',
    component: CourseDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CourseDetailPage],
  providers: [CourseDetailService]
})
export class CourseDetailPageModule {}
