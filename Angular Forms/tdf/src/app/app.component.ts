import { EnrollmentService } from './enrollment.service';
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  userModel = new User(
    'Rob',
    'Rob@test.com',
    5556665566,
    'default',
    'morning',
    true
  );
  constructor(private _enrollmentService: EnrollmentService) {}
  onSubmit(userForm) {
    console.log(userForm);
    /*     this.submitted = true;
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('Success!', data),
      // (error) => console.error('Error!', error)
      (error) => (this.errorMsg = error.statusText)
    ); */
  }
}
