import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { Course } from '../../services/course'; // Interface depuis course.ts
@Component({
  standalone:false,

  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss']
  // ❌ Supprime standalone: false → inutile en mode NgModule
})
export class CourseListPage implements OnInit, OnDestroy { // ✅ Implémente OnDestroy
  courses: Course[] = []; // ✅ Typé avec Course[]
  private subscription!: Subscription; // ✅ Typé correctement

  constructor(
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    // ✅ S'abonne au flux réactif du service
    this.subscription = this.courseService.courses$.subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

  goToDetail(courseId: number) {
    this.router.navigate(['/course-detail', courseId]);
  }

  goToAddCourse() {
    this.router.navigate(['/add-course']);
  }

  ngOnDestroy() {
    // ✅ Se désabonne pour éviter les fuites mémoire
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}