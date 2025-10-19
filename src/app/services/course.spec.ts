// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { Course } from '../courses/add-course/add-course.module';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
      title: 'Angular',
      author: 'John Doe',
      keywords: ['frontend', 'typescript', 'framework']
    },
    {
      id: 2,
      icon: 'https://developer.android.com/static/images/home/hero-android-logo.png',
      title: 'Android',
      author: 'Jane Smith',
      keywords: ['mobile', 'java', 'kotlin']
    }
    // Ajoute d'autres cours de base si besoin
  ];

  private nextId = 3; // Pour générer de nouveaux IDs

  getCourses(): Course[] {
    return [...this.courses]; // retourne une copie
  }
  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Omit<Course, 'id'>): void {
    this.courses.push({ ...course, id: this.nextId++ });
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(c => c.id !== id);
  }}
  