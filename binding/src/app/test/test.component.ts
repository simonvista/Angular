import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  //Interpolation
  //Property binding([] | 'bind-')
  //class binding, style binding
  //template binding
  //2-way binding ([()])
  template: `<h2>Hello {{ name }}</h2>
    <h2>{{ 2 + 3 }}</h2>
    <h2>{{ 'Hello ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2 class="text-success">{{ name.toUpperCase() }}</h2>
    <h2 [class]="successClass">{{ 'Hello ' + getName() }}</h2>
    <h2 [class.text-danger]="hasError">{{ siteUrl }}</h2>
    <input [id]="myId" type="text" value="Vishwas" />
    <input
      [disabled]="isDisabled"
      id="{{ myId }}"
      type="text"
      value="Vishwas"
    />
    <h2 [ngClass]="messageClasses">Codevolution</h2>
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color]="highlightColor">Style binding2</h2>
    <h2 [ngStyle]="titleStyles">Style binding3</h2>
    <button (click)="onClick($event)">Greeting Initialization</button>
    {{ greeting }}
    <button (click)="greeting = 'Hello World!'">Greeting Change</button>
    <input #myInput type="text" />
    <button (click)="logMsg(myInput.value)">Log</button>
    <input [(ngModel)]="name1" type="text" /> {{ name1 }}`,
  // styleUrls: ['./test.component.css']
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Vishwas';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = false;
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
  public greeting = '';
  public name1 = 'name1';
  constructor() {}
  getName() {
    return this.name;
  }
  onClick(event) {
    console.log(event);
    this.greeting = event.type;
    console.log(this.greeting);
  }
  logMsg(input) {
    console.log(input);
  }
  ngOnInit(): void {}
}
