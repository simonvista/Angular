import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `<div>
    <p>1st line</p>
    <p>2nd line</p>
  </div> `,
  // styleUrls: ['./test.component.css'],
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
