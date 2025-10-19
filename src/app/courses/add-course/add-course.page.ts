// src/app/courses/add-course/add-course.page.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// ✅ Correct import

import { CourseService } from '../../services/course.service';
@Component({
  standalone:false,
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss']
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
  router: any;

  constructor(private courseService: CourseService) {}
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // or Base64
        source: CameraSource.Prompt // Shows choice: Camera or Photos
      });
  
      if (image.dataUrl) {
        this.newCourse.images.push(image.dataUrl);
      }
    } catch (error) {
      console.error('User cancelled or error:', error);
      // Handle permission denied, user cancel, etc.
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
    if (!this.newCourse.title || !this.newCourse.author || !this.newCourse.icon) {
      alert('Veuillez remplir tous les champs obligatoires !');
      return;
    }

    this.courseService.addCourse({
      icon: this.newCourse.icon,
      title: this.newCourse.title,
      author: this.newCourse.author,
      keywords: this.newCourse.keywords,
      images: this.newCourse.images.length > 0 ? this.newCourse.images : undefined
    });

    console.log('Cours ajouté avec succès');
    this.router.navigate(['/course-list']);
  }

  cancel() {
    this.router.navigate(['/course-list']);
  }
}