import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  // Data binding
  // template: '<h2>{{"Title: "+title}}</h2>',
  // String interpolation
  // template: '<h2>{{"Title: "+getTitle()}}</h2>',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  // courses = ['course1', 'course2', 'course3'];
  /*   getTitle() {
    return this.title;
  } */
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    //Must add CoursesService in providers of app.module.ts in order to use service
    //Dependency injection
    this.courses = service.getCourses();
  }
}
