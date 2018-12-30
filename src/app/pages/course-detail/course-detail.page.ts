import {Component, OnInit} from '@angular/core';
import {CourseDetailService} from './course-detail.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../course/course';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.page.html',
    styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

    course: Course;

    constructor(
        private courseDetailService: CourseDetailService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params) => this.getFindCourse(params.id));
    }

    getFindCourse(id) {
        this.courseDetailService.getFindCourse(id)
            .subscribe(course => {
                this.course = course.data;
            });
    }

}
