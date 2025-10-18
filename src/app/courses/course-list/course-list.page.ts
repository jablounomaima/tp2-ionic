import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


export interface Course {
  id: number;
  icon: string;
  title: string;
  author: string;
  keywords: string[];
  images?: string[];
}
@Component({
  standalone: false,
  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss'],
})



export class CourseListPage {
  courses: Course[] = [
    {
      id: 1,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
      title: 'Angular',
      author: 'John Doe',
      keywords: ['frontend', 'typescript', 'framework'],
    },
    {
      id: 2,
      icon: 'https://developer.android.com/static/images/home/hero-android-logo.png',
      title: 'Android',
      author: 'Jane Smith',
      keywords: ['mobile', 'java', 'kotlin'],
    },
    {
      id: 3,
      icon: 'https://ionicframework.com/docs/img/logo.svg',
      title: 'Ionic',
      author: 'Bob Johnson',
      keywords: ['hybrid', 'mobile', 'angular'],
    },
    {
      id: 4,
      icon: 'https://nestjs.com/img/logo_text.svg',
      title: 'Nest JS',
      author: 'Bart Simpson',
      keywords: ['backend', 'api', 'node', 'rest', 'typescript'],
      images: [
        'https://nestjs.com/img/logo-small.svg',
        'https://nestjs.com/assets/images/nestjs-courses.png'
      ]
    }
  ];

  constructor(private router: Router) {}

  goToDetail(courseId: number) {
    this.router.navigate(['/course-detail', courseId]);
  }

  goToAddCourse() {
    this.router.navigate(['/add-course']);
  }
}
