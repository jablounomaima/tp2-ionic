// src/app/courses/add-course/add-course.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddCoursePageRoutingModule } from './add-course-routing.module';
import { AddCoursePage } from './add-course.page';


@NgModule({
  imports: [
    CommonModule,      // ← Pour *ngFor, *ngIf
    FormsModule,       // ← Pour ngModel
    IonicModule,       // ← Pour ion-button, ion-input, etc.
    AddCoursePageRoutingModule
  ],
  declarations: [AddCoursePage] // ✅ Autorisé car composant NON standalone
})

export class AddCoursePageModule {}

// src/app/courses/course.model.ts
export interface Course {
  id: number;
  icon: string; // URL de l'icône
  title: string;
  author: string;
  keywords: string[];
  images?: string[]; // Optionnel
}
