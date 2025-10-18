// src/app/courses/course-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  course: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    // Récupérer le cours depuis la liste statique
    this.course = this.getCourseById(courseId);
    if (!this.course) {
      this.router.navigate(['/course-list']);
    }
  }

  getCourseById(id: number) {
    // Simuler récupération depuis la liste statique
    const mockCourses = [
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
    return mockCourses.find(c => c.id === id);
  }

  async deleteCourse() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            // Suppression logique (simulée ici)
            console.log('Cours supprimé:', this.course.id);
            this.router.navigate(['/course-list']);
          }
        }
      ]
    });

    await alert.present();
  }

  goBack() {
    this.router.navigate(['/course-list']);
  }
}