import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routes: Router
  ) {}

  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   email: [''],
    //   password: [''],
    // });
  }
  // change() {
  //   this.signupForm.controls.first_name.value;
  //   this.signupForm.controls.last_name.value;
  // }
  // change() {
  //   console.log(this.signupForm.value);
  // }
  signup() {
    this.http
      .post<any>('http://localhost:3000/user', this.signupForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.routes.navigate(['/comp2']);
      });
  }
}
