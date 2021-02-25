import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent],
  imports: [BrowserModule, AppRoutingModule],
  //Register dependencies
  //Singleton-single instance of service for sharing between components
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
