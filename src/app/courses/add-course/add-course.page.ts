// src/app/courses/add-course.page.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { IonicModule } from '@ionic/angular';

@Component({
  
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddCoursePage {
  newCourse = {
    icon: '',
    title: '',
    author: '',
    keywords: [] as string[],
    images: [] as string[]
  };

  keywordInput = '';

  constructor(private router: Router) {}

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos // ou CameraSource.Camera
      });

      const base64Data = image.base64String;
      const imageUrl = `data:image/jpeg;base64,${base64Data}`;
      this.newCourse.images.push(imageUrl);
    } catch (e) {
      console.error('Erreur lors de la prise de photo:', e);
    }
  }

  addKeyword() {
    if (this.keywordInput.trim()) {
      this.newCourse.keywords.push(this.keywordInput.trim());
      this.keywordInput = '';
    }
  }

  removeKeyword(index: number) {
    this.newCourse.keywords.splice(index, 1);
  }

  removeImage(index: number) {
    this.newCourse.images.splice(index, 1);
  }

  saveCourse() {
    // Simuler l'ajout du cours (en vrai, vous sauvegarderiez dans un service ou localStorage)
    console.log('Nouveau cours ajouté:', this.newCourse);
    // Rediriger vers la liste
    this.router.navigate(['/course-list']);
  }

  cancel() {
    this.router.navigate(['/course-list']);
  }
}