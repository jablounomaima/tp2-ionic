// src/app/courses/course-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CourseService } from '../../services/course.service';// 
// src/app/courses/course-detail/course-detail.page.ts

@Component({
  standalone:false,
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
  // ❌ Supprime standalone: false → inutile en mode NgModule
})
export class CourseDetailPage implements OnInit {
  course: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private courseService: CourseService // ✅ Injection correcte
  ) {} // ← Virgule ajoutée après AlertController

 // In course-detail.page.ts
ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  const course = this.courseService.getCourseById(id);
  if (!course) {
    // Course was deleted → go back
    this.router.navigate(['/course-list']);
    return;
  }
  this.course = course;
}

  async deleteCourse() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Suppression annulée');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            if (this.course?.id) {
              this.courseService.deleteCourse(this.course.id); // ✅ Suppression via service
              console.log('Cours supprimé:', this.course.id);
            }
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