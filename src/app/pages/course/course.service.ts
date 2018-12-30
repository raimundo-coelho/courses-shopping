import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './course';
import {API_URL} from '../../api';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/courses`);
  }
}
