import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../course/course';
import {API_URL} from '../../api';

@Injectable({
    providedIn: 'root'
})
export class CourseDetailService {

    constructor(private http: HttpClient) {
    }

    getFindCourse(id): Observable<Course> {
        return this.http.get<Course>(`${API_URL}/courses/${id}`);
    }
}
