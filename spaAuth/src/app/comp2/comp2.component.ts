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
  signInForm = new FormGroup({
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
      .post<any>('http://localhost:3000/users', this.signupForm.value)
      .subscribe((res: any) => {
        console.log(res);
        alert('signup success');
        // this.routes.navigate(['/comp2']);
      });
  }
  signIn() {
    console.log('here');
    
    this.http.get('http://localhost:3000/users').subscribe((res: any) => {
      console.log(res);
      const user = res.find(
        (user: any) =>{
          return user.email === this.signInForm.value.email
        }
      )
      alert(JSON.stringify(user));
      this.signInForm.reset();
      // if(res.email === this.signInForm.value.email && res.password === this.signInForm.value.password){
      //   // this.routes.navigate(['/comp1']);
      //   alert('login success');
      // }
      // else{
      //   alert('login failed');
      // }
    });
  }
}
