import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  /*   templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'] */
  // template: ` <h2 *ngIf="false">Codevolution</h2>
  template: `
    <h2 *ngIf="displayName; else elseBlock">
      Codevolution
    </h2>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else elseBlock1"></div>
    <ng-template #thenBlock>
      <h2>Codevolution</h2>
    </ng-template>
    <ng-template #elseBlock1>
      <h2>Name is hidden</h2>
    </ng-template>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You chose red</div>
      <div *ngSwitchCase="'blue'">You chose blue</div>
      <div *ngSwitchCase="'green'">You chose green</div>
      <div *ngSwitchDefault>Your input is invalid</div>
    </div>
    <ul *ngFor="let col of colors; index as i">
      <li>{{ i }} : {{ col }}</li>
    </ul>
    <!-- index,first,last,odd,even -->
    <ul *ngFor="let col of colors; first as f">
      <li>{{ f }} : {{ col }}</li>
    </ul>
    <h2>{{ 'Parent data: ' + parentData }}</h2>
    <!-- <h2>{{ 'Parent Data: ' + name }}</h2> -->
    <button (click)="fireEvent()">Send Event</button>
    <h2>{{ name }}</h2>
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ name | titlecase }}</h2>
    <h2>{{ name | slice: 3:9 }}</h2>
    <h2>{{ person | json }}</h2>
    <h2>{{ 5.678 | number: '1.2-3' }}</h2>
    <h2>{{ 5.678 | number: '3.4-5' }}</h2>
    <h2>{{ 5.678 | number: '3.1-2' }}</h2>
    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency: 'GBP':'code' }}</h2>
    <h2>{{ date | date: 'short' }}</h2>
    <h2>{{ date | date: 'shortDate' }}</h2>
    <h2>{{ date | date: 'shortTime' }}</h2>
  `,
  styles: [``],
})
export class TestComponent implements OnInit {
  displayName = false;
  public color = 'blue ';
  public colors = ['red', 'blue', 'green', 'yellow'];
  // Accept name from parent and assign it to parentData
  @Input() public parentData;
  // @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  public name = 'Hello codevolution';
  public person = {
    firstName: 'John',
    LastName: 'Doe',
  };
  public date = new Date();
  constructor() {}

  ngOnInit(): void {}
  fireEvent() {
    this.childEvent.emit('Hey Codevolution');
  }
}
