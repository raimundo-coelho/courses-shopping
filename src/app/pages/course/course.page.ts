import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {Course} from './course';

@Component({
    selector: 'app-course',
    templateUrl: './course.page.html',
    styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

    courses: Course;

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
        this.getAllCourses();
    }

    getAllCourses() {
        this.courseService.getAllCourses()
            .subscribe(res => {
                this.courses = res.data;
            });
    }

}
