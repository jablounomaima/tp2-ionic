import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // ← Import essentiel
import { AddCoursePageRoutingModule } from './add-course-routing.module';
import { AddCoursePage } from './add-course.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // ← Doit être ici
    AddCoursePageRoutingModule
  ],
  declarations: []
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
