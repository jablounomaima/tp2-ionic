// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './course';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      title: 'Ionic',
      author: 'Team',
      keywords: ['mobile', 'angular']
    },

    {
        id: 2,
        icon: 'assets/icons/icon1.png',
        title: 'Ionic2',
        author: 'Bob Johnson',
        keywords: ['mobile', 'hybrid']
      },

      {
        id: 3,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Angular_gradient.png/1200px-Angular_gradient.png',
        title: 'Angular',
        author: 'Chaima Ouerghi',
        keywords: ['component', 'binding', 'directive'],
      },
  ];
  private nextId = 2;

  private coursesSubject = new BehaviorSubject<Course[]>(this.courses);
  public courses$ = this.coursesSubject.asObservable(); // ✅ This fixes TS2339

  getCourses(): Course[] {
    return [...this.courses];
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Omit<Course, 'id'>): void {
    this.courses.push({ ...course, id: this.nextId++ });
    this.coursesSubject.next([...this.courses]);
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(c => c.id !== id);
    this.coursesSubject.next([...this.courses]);
  }
}