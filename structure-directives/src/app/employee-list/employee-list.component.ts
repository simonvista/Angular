import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  /*   templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'] */
  template: `
    <h2>Employee List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.id }}: {{ employee.name }}: {{ employee.age }}
      </li>
    </ul>
  `,
  styles: [``],
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    /* this.employees = this._employeeService.getEmployees(); */
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
