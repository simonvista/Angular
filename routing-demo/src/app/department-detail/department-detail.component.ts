import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You chose department {{ departmentId }}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="gotoDepartment()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    /*     let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.departmentId = id; */
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  gotoDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    /*      this.router.navigate([
      '/departments',
      { id: selectedId, test: 'testvalue' },       
    ]); */
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.activatedRoute,
    });
  }
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.activatedRoute });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.activatedRoute });
  }
}
