import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CoursePage} from './course.page';
import {HttpClientModule} from '@angular/common/http';
import {CourseService} from './course.service';

const routes: Routes = [
    {
        path: '',
        component: CoursePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CoursePage],
    providers: [CourseService]
})
export class CoursePageModule {
}
